import { useState } from "react";
import { X, ChevronDown, Calendar } from "lucide-react";
import { getConditions } from "@/services/conditionsService";
import { getProtocolOptions } from "@/services/protocolOptionsService";

interface AddPatientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (patient: PatientFormData) => void;
}

export interface PatientFormData {
  firstName: string;
  lastName: string;
  id: string;
  dateOfBirth: string;
  gender: "Male" | "Female" | "Other";
  condition: string;
  protocol: string;
  sites: string[];
}

export function AddPatientModal({
  isOpen,
  onClose,
  onSave,
}: AddPatientModalProps) {
  const conditions = getConditions();
  const protocols = getProtocolOptions();

  const [formData, setFormData] = useState<PatientFormData>({
    firstName: "",
    lastName: "",
    id: "",
    dateOfBirth: "",
    gender: "Female",
    condition: "",
    protocol: "",
    sites: ["First site"],
  });

  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleSubmit = () => {
    const newErrors: Record<string, boolean> = {};

    if (!formData.firstName) newErrors.firstName = true;
    if (!formData.lastName) newErrors.lastName = true;
    if (!formData.id) newErrors.id = true;
    if (!formData.dateOfBirth) newErrors.dateOfBirth = true;
    if (!formData.condition) newErrors.condition = true;
    if (!formData.protocol) newErrors.protocol = true;
    if (formData.sites.length === 0) newErrors.sites = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const missingFields = Object.keys(newErrors).join(", ");
      alert(`Please fill in: ${missingFields}`);
      return;
    }

    onSave(formData);
    onClose();
    setFormData({
      firstName: "",
      lastName: "",
      id: "",
      dateOfBirth: "",
      gender: "Female",
      condition: "",
      protocol: "",
      sites: ["First site"],
    });
    setErrors({});
  };

  const toggleSite = (site: string) => {
    setFormData((prev) => {
      const sites = prev.sites.includes(site)
        ? prev.sites.filter((s) => s !== site)
        : [...prev.sites, site];
      return { ...prev, sites };
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-[0_0_16px_0_rgba(0,0,0,0.2)] w-[700px] max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-4 border-b border-[#E1E1E4]">
          <h2 className="text-brand-text-secondary text-2xl font-medium">
            Add patient
          </h2>
          <button
            onClick={onClose}
            className="text-[#B8B8C0] hover:text-brand-text-secondary transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form Content */}
        <div className="p-16 space-y-6">
          {/* First Name */}
          <div className="flex items-center gap-2">
            <label className="w-[100px] text-brand-text-secondary text-base">
              First name
            </label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              placeholder="Enter  first name"
              className={`flex-1 h-10 px-3 border rounded ${
                errors.firstName ? "border-red-500" : "border-[#E1E1E4]"
              } text-base placeholder:text-[#B8B8C0] focus:outline-none focus:border-brand-blue`}
            />
          </div>

          {/* Last Name */}
          <div className="flex items-center gap-2">
            <label className="w-[100px] text-brand-text-secondary text-base">
              Last name
            </label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              placeholder="Enter last name"
              className={`flex-1 h-10 px-3 border rounded ${
                errors.lastName ? "border-red-500" : "border-[#E1E1E4]"
              } text-base placeholder:text-[#B8B8C0] focus:outline-none focus:border-brand-blue`}
            />
          </div>

          {/* ID */}
          <div className="flex items-center gap-2">
            <label className="w-[100px] text-brand-text-secondary text-base">
              ID
            </label>
            <input
              type="text"
              value={formData.id}
              onChange={(e) => setFormData({ ...formData, id: e.target.value })}
              placeholder="Enter ID"
              className={`flex-1 h-10 px-3 border rounded ${
                errors.id ? "border-red-500" : "border-[#E1E1E4]"
              } text-base placeholder:text-[#B8B8C0] focus:outline-none focus:border-brand-blue`}
            />
          </div>

          {/* Date of Birth */}
          <div className="flex items-center gap-2">
            <label className="w-[100px] text-brand-text-secondary text-base">
              Date of birth
            </label>
            <div className="flex-1 relative">
              <input
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) =>
                  setFormData({ ...formData, dateOfBirth: e.target.value })
                }
                placeholder="Month, DD YYYY"
                className={`w-full h-10 px-3 border rounded ${
                  errors.dateOfBirth ? "border-red-500" : "border-[#E1E1E4]"
                } text-base placeholder:text-[#B8B8C0] focus:outline-none focus:border-brand-blue`}
              />
              <Calendar className="absolute right-3 top-2 w-5 h-5 text-[#777786] pointer-events-none" />
            </div>
          </div>

          {/* Gender */}
          <div className="flex items-center gap-2">
            <label className="w-[100px] text-brand-text-secondary text-base">
              Gender
            </label>
            <div className="flex gap-4">
              {["Male", "Female", "Other"].map((gender) => (
                <label
                  key={gender}
                  className="flex items-center gap-1 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="gender"
                    value={gender}
                    checked={formData.gender === gender}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        gender: e.target.value as any,
                      })
                    }
                    className="sr-only"
                  />
                  <div
                    className={`w-6 h-6 rounded-full border-[1.5px] flex items-center justify-center ${
                      formData.gender === gender
                        ? "border-[#326392] bg-white"
                        : "border-[#777786]"
                    }`}
                  >
                    {formData.gender === gender && (
                      <div className="w-4 h-4 rounded-full bg-[#326392]" />
                    )}
                  </div>
                  <span className="text-brand-text-secondary text-base">
                    {gender}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#E1E1E4]" />

          {/* Condition */}
          <div className="flex items-center gap-2">
            <label className="w-[100px] text-brand-text-secondary text-base">
              Condition
            </label>
            <select
              value={formData.condition}
              onChange={(e) =>
                setFormData({ ...formData, condition: e.target.value })
              }
              className={`flex-1 h-10 px-3 border rounded ${
                errors.condition ? "border-red-500" : "border-[#E1E1E4]"
              } text-base ${
                formData.condition
                  ? "text-brand-text-secondary"
                  : "text-[#B8B8C0]"
              } focus:outline-none focus:border-brand-blue appearance-none bg-white pr-10`}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 10L12 14L16 10' stroke='%23B8B8C0' stroke-width='2' stroke-linecap='square' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 12px center",
                backgroundSize: "24px 24px",
              }}
            >
              <option value="">Enter first name</option>
              {conditions.map((condition) => (
                <option key={condition.id} value={condition.name}>
                  {condition.name}
                </option>
              ))}
            </select>
          </div>

          {/* Protocol */}
          <div className="flex items-center gap-2">
            <label className="w-[100px] text-brand-text-secondary text-base">
              Protocol
            </label>
            <select
              value={formData.protocol}
              onChange={(e) =>
                setFormData({ ...formData, protocol: e.target.value })
              }
              className={`flex-1 h-10 px-3 border rounded ${
                errors.protocol ? "border-red-500" : "border-[#E1E1E4]"
              } text-base ${
                formData.protocol
                  ? "text-brand-text-secondary"
                  : "text-[#B8B8C0]"
              } focus:outline-none focus:border-brand-blue appearance-none bg-white pr-10`}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 10L12 14L16 10' stroke='%23B8B8C0' stroke-width='2' stroke-linecap='square' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 12px center",
                backgroundSize: "24px 24px",
              }}
            >
              <option value="">Select last name </option>
              {protocols.map((protocol) => (
                <option key={protocol.id} value={protocol.name}>
                  {protocol.name}
                </option>
              ))}
            </select>
          </div>

          {/* Site */}
          <div className="flex items-center gap-2">
            <label className="w-[100px] text-brand-text-secondary text-base">
              Site
            </label>
            <div className="flex gap-4">
              {["All sites", "First site", "Second site"].map((site) => (
                <label
                  key={site}
                  className="flex items-center gap-1 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={formData.sites.includes(site)}
                    onChange={() => toggleSite(site)}
                    className="sr-only"
                  />
                  <div
                    className={`w-6 h-6 rounded-sm border-[1.5px] flex items-center justify-center ${
                      formData.sites.includes(site)
                        ? "border-brand-blue bg-brand-blue"
                        : "border-[#777786]"
                    }`}
                  >
                    {formData.sites.includes(site) && (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14 5L7.33333 11.6667L4 8.33333"
                          stroke="white"
                          strokeWidth="1.5"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="text-brand-text-secondary text-base">
                    {site}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end gap-4 px-8 py-4 border-t border-[#E1E1E4]">
          <button
            onClick={onClose}
            className="h-10 px-4 border border-brand-blue text-brand-blue rounded-lg hover:bg-brand-blue/5 transition-colors font-medium text-sm"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="h-10 px-4 bg-brand-blue text-white rounded-lg hover:bg-brand-blue/90 transition-colors font-medium text-sm"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
