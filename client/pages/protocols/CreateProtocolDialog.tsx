import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ValueCard } from "@/components/ValueCard";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface CreateProtocolDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface ProtocolFormData {
  protocolName: string;
  condition: string;
  protocolType: "standard" | "theta-burst";
  frequency: number;
  trainDuration: number;
  interTrainInterval: number;
  trains: number;
  mt: number;
  note: string;
}

interface FormErrors {
  protocolName?: string;
  condition?: string;
}

export function CreateProtocolDialog({
  open,
  onOpenChange,
}: CreateProtocolDialogProps) {
  const [formData, setFormData] = useState<ProtocolFormData>({
    protocolName: "",
    condition: "",
    protocolType: "standard",
    frequency: 10.0,
    trainDuration: 2.0,
    interTrainInterval: 10.0,
    trains: 4,
    mt: 80,
    note: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  // Calculate values
  const pulsesPerTrain = formData.frequency * formData.trainDuration;
  const totalPulses = pulsesPerTrain * formData.trains;
  const totalTimeInSeconds =
    formData.trains * formData.trainDuration +
    (formData.trains - 1) * formData.interTrainInterval;
  const hours = Math.floor(totalTimeInSeconds / 3600);
  const minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
  const seconds = Math.floor(totalTimeInSeconds % 60);
  const totalTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.protocolName.trim()) {
      newErrors.protocolName = "This protocol name already exists";
    }

    if (!formData.condition) {
      newErrors.condition = "Please select at least one option";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    setAttemptedSubmit(true);
    const isValid = validateForm();

    if (isValid) {
      // Handle save logic here
      console.log("Saving protocol:", formData);
      onOpenChange(false);
      // Reset form
      setFormData({
        protocolName: "",
        condition: "",
        protocolType: "standard",
        frequency: 10.0,
        trainDuration: 2.0,
        interTrainInterval: 10.0,
        trains: 4,
        mt: 80,
        note: "",
      });
      setErrors({});
      setAttemptedSubmit(false);
    }
  };

  const handleCancel = () => {
    onOpenChange(false);
    // Reset form
    setFormData({
      protocolName: "",
      condition: "",
      protocolType: "standard",
      frequency: 10.0,
      trainDuration: 2.0,
      interTrainInterval: 10.0,
      trains: 4,
      mt: 80,
      note: "",
    });
    setErrors({});
    setAttemptedSubmit(false);
  };

  const isSaveDisabled = attemptedSubmit && Object.keys(errors).length > 0;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-[700px] p-0 gap-0 overflow-hidden !border-0 !rounded-none"
        style={{ borderRadius: 0 }}
        onInteractOutside={(e) => e.preventDefault()}
      >
        {/* Custom Header */}
        <div className="relative flex items-center bg-[#005487] px-8 py-4 h-[72px]">
          <h2 className="text-white text-xl font-bold">Create protocol</h2>
          <button
            onClick={handleCancel}
            className="absolute right-8 flex items-center justify-center p-2 hover:bg-white/10 rounded transition-colors"
          >
            <X className="w-4 h-4 text-[#A7A7B1]" />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col px-16 py-4 gap-4 max-h-[calc(100vh-200px)] overflow-y-auto">
          {/* Details Section */}
          <div className="flex flex-col gap-4">
            {/* Protocol Name */}
            <div className="flex items-start gap-2">
              <div className="flex flex-col justify-center items-start w-[118px] h-10">
                <span className="text-[#30394A] text-base font-normal leading-5">
                  Protocol name:
                </span>
              </div>
              <div className="flex flex-col gap-1 flex-1 max-w-[256px]">
                <Input
                  value={formData.protocolName}
                  onChange={(e) =>
                    setFormData({ ...formData, protocolName: e.target.value })
                  }
                  placeholder="OCD_NEW"
                  className={cn(
                    "h-10 border-[#E1E1E4] text-base",
                    errors.protocolName && "border-[#F34545]",
                  )}
                />
                {errors.protocolName && (
                  <span className="text-[#F34545] text-sm px-2">
                    {errors.protocolName}
                  </span>
                )}
              </div>
            </div>

            {/* Condition */}
            <div className="flex items-start gap-2">
              <div className="flex flex-col justify-center items-start w-[118px] h-10">
                <span className="text-[#30394A] text-base font-normal leading-5">
                  Condition:
                </span>
              </div>
              <div className="flex flex-col gap-1 flex-1 max-w-[256px]">
                <Select
                  value={formData.condition}
                  onValueChange={(value) =>
                    setFormData({ ...formData, condition: value })
                  }
                >
                  <SelectTrigger
                    className={cn(
                      "h-10 border-[#E1E1E4]",
                      errors.condition && "border-[#F34545]",
                      !formData.condition && "text-[#A7A7B1]",
                    )}
                  >
                    <SelectValue placeholder="Select item" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ocd">OCD</SelectItem>
                    <SelectItem value="depression">Depression</SelectItem>
                    <SelectItem value="anxiety">Anxiety</SelectItem>
                  </SelectContent>
                </Select>
                {errors.condition && (
                  <span className="text-[#F34545] text-sm px-2">
                    {errors.condition}
                  </span>
                )}
              </div>
            </div>

            {/* Protocol Type */}
            <div className="flex items-center gap-2">
              <div className="flex flex-col justify-center items-start w-[118px]">
                <span className="text-[#30394A] text-base font-normal leading-5">
                  Protocol type:
                </span>
              </div>
              <RadioGroup
                value={formData.protocolType}
                onValueChange={(value: "standard" | "theta-burst") =>
                  setFormData({ ...formData, protocolType: value })
                }
                className="flex items-center gap-6"
              >
                <div className="flex items-center gap-1">
                  <RadioGroupItem
                    value="standard"
                    id="standard"
                    className="w-6 h-6 border-[1.5px] border-[#005487] data-[state=checked]:border-[#005487]"
                  />
                  <label
                    htmlFor="standard"
                    className="text-[#101128] text-base cursor-pointer"
                  >
                    Standard
                  </label>
                </div>
                <div className="flex items-center gap-1">
                  <RadioGroupItem
                    value="theta-burst"
                    id="theta-burst"
                    className="w-6 h-6 border-[1.5px] border-[#A7A7B1] data-[state=checked]:border-[#005487]"
                    disabled
                  />
                  <label
                    htmlFor="theta-burst"
                    className="text-[#A7A7B1] text-base cursor-not-allowed"
                  >
                    Theta burst
                  </label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#E1E1E4]" />

          {/* Value Cards Section */}
          <div className="flex flex-col gap-2">
            {/* Row 1 */}
            <div className="flex items-center">
              <div className="bg-[#F9F9F9] p-2 rounded">
                <ValueCard
                  value={formData.frequency}
                  unit="Hz"
                  label="Frequency"
                  onIncrement={() =>
                    setFormData({
                      ...formData,
                      frequency: Number((formData.frequency + 0.1).toFixed(1)),
                    })
                  }
                  onDecrement={() =>
                    setFormData({
                      ...formData,
                      frequency: Math.max(0, Number((formData.frequency - 0.1).toFixed(1))),
                    })
                  }
                  className="w-[180px]"
                />
              </div>
              <div className="bg-[#F9F9F9] p-2 rounded">
                <ValueCard
                  value={formData.trainDuration}
                  unit="Sec"
                  label="Train duration"
                  onIncrement={() =>
                    setFormData({
                      ...formData,
                      trainDuration: Number((formData.trainDuration + 0.1).toFixed(1)),
                    })
                  }
                  onDecrement={() =>
                    setFormData({
                      ...formData,
                      trainDuration: Math.max(0, Number((formData.trainDuration - 0.1).toFixed(1))),
                    })
                  }
                  className="w-[180px]"
                />
              </div>
              <div className="px-3">
                <div className="flex items-start bg-[#F9F9F9] rounded overflow-hidden">
                  <div className="w-[3px] self-stretch bg-[#005487]" />
                  <div className="w-[157px] h-20 flex flex-col p-2 px-3 pb-3 rounded">
                    <div className="flex items-end gap-0.5">
                      <span className="text-[34px] font-normal leading-[42px] text-[#005487]">
                        {pulsesPerTrain.toFixed(1)}
                      </span>
                      <span className="text-base font-normal leading-5 text-[#005487] pb-2">
                        No.
                      </span>
                    </div>
                    <span className="text-base font-normal leading-5 text-[#005487]">
                      Pulses per train
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex items-center">
              <div className="bg-[#F9F9F9] p-2 rounded">
                <ValueCard
                  value={formData.interTrainInterval}
                  unit="Sec"
                  label="Inter train interval"
                  onIncrement={() =>
                    setFormData({
                      ...formData,
                      interTrainInterval: Number((formData.interTrainInterval + 0.1).toFixed(1)),
                    })
                  }
                  onDecrement={() =>
                    setFormData({
                      ...formData,
                      interTrainInterval: Math.max(
                        0,
                        Number((formData.interTrainInterval - 0.1).toFixed(1)),
                      ),
                    })
                  }
                  className="w-[180px]"
                />
              </div>
              <div className="bg-[#F9F9F9] p-2 rounded">
                <ValueCard
                  value={formData.trains}
                  unit="No."
                  label="Trains"
                  onIncrement={() =>
                    setFormData({ ...formData, trains: formData.trains + 1 })
                  }
                  onDecrement={() =>
                    setFormData({
                      ...formData,
                      trains: Math.max(1, formData.trains - 1),
                    })
                  }
                  className="w-[180px]"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex items-center">
              <div className="bg-[#F9F9F9] p-2 rounded">
                <ValueCard
                  value={formData.mt}
                  unit="%"
                  label="MT"
                  onIncrement={() =>
                    setFormData({ ...formData, mt: formData.mt + 1 })
                  }
                  onDecrement={() =>
                    setFormData({ ...formData, mt: Math.max(0, formData.mt - 1) })
                  }
                  className="w-[180px]"
                />
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="flex items-center justify-between bg-[#F9F9F9] rounded border-t-[3px] border-t-[#005487] px-8 py-3">
            <div className="flex flex-col gap-0.5">
              <span className="text-[34px] font-normal leading-[42px] text-[#005487]">
                {totalPulses}
              </span>
              <span className="text-base font-normal leading-5 text-[#005487]">
                Total number of pulses
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[34px] font-normal leading-[42px] text-[#005487]">
                {totalTime}
              </span>
              <span className="text-base font-normal leading-5 text-[#005487]">
                Total time
              </span>
            </div>
          </div>

          {/* Note Section */}
          <div className="flex flex-col gap-1">
            <label className="text-[#777786] text-sm px-2">Note</label>
            <Textarea
              value={formData.note}
              onChange={(e) =>
                setFormData({ ...formData, note: e.target.value })
              }
              placeholder="Add note"
              className="min-h-[72px] border-[#E1E1E4] text-base placeholder:text-[#A7A7B1]"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-4 px-8 py-4 border-t border-[#E1E1E4]">
          <button
            onClick={handleCancel}
            className="h-10 px-4 flex items-center justify-center border border-[#005487] rounded-lg transition-colors hover:bg-[#DBEDF7]"
          >
            <span className="text-[#005487] text-sm font-medium">Cancel</span>
          </button>
          <button
            onClick={handleSave}
            disabled={isSaveDisabled}
            className={cn(
              "h-10 px-4 flex items-center justify-center rounded-lg transition-colors",
              isSaveDisabled
                ? "bg-[#B3CCDB] cursor-not-allowed"
                : "bg-[#005487] hover:bg-[#004070]",
            )}
          >
            <span className="text-white text-sm font-medium">Save</span>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
