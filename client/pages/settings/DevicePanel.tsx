import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { DeviceInfo, CoilInfo } from "@/data/settingsData";

const COIL_COLORS: Record<string, string> = {
  H1: "bg-[#88D3EE]",
  H4: "bg-[#6FD44B]",
  H7: "bg-[#FFCE2D]",
};

function CoilRow({ coil }: { coil: CoilInfo }) {
  const bgColor = COIL_COLORS[coil.type] || "bg-[#B8B8C0]";
  return (
    <div className="flex items-center gap-2">
      <div
        className={`inline-flex h-6 w-8 justify-center items-center rounded-lg ${bgColor}`}
      >
        <span className="text-[#30394A] font-normal text-sm">{coil.type}</span>
      </div>
      <span className="text-[#30394A] text-sm font-normal">{coil.model}</span>
    </div>
  );
}

interface DevicePanelProps {
  device: DeviceInfo;
}

export function DevicePanel({ device }: DevicePanelProps) {
  const [logOpen, setLogOpen] = useState(false);

  return (
    <div>
      {/* Device ID + Download log row */}
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <span className="text-[#777786] text-sm font-normal">Device ID</span>
          <span className="text-[#101128] text-sm font-bold">
            {device.deviceId}
          </span>
        </div>

        <div className="relative">
          <button
            onClick={() => setLogOpen(!logOpen)}
            className="flex items-center gap-2 h-9 px-4 border border-[#E1E1E4] rounded bg-white hover:bg-gray-50 transition-colors"
          >
            <span className="text-[#30394A] text-sm font-normal">
              Download log
            </span>
            <ChevronDown
              className={`w-4 h-4 text-[#777786] transition-transform ${logOpen ? "rotate-180" : ""}`}
            />
          </button>
          {logOpen && (
            <div className="absolute right-0 top-full mt-1 w-44 bg-white border border-[#E1E1E4] rounded-lg shadow-md z-10">
              <button
                className="w-full text-left px-4 py-2.5 text-sm text-[#30394A] hover:bg-[#ECF7FB] transition-colors"
                onClick={() => setLogOpen(false)}
              >
                Download as CSV
              </button>
              <button
                className="w-full text-left px-4 py-2.5 text-sm text-[#30394A] hover:bg-[#ECF7FB] transition-colors"
                onClick={() => setLogOpen(false)}
              >
                Download as PDF
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Three columns */}
      <div className="grid grid-cols-3 gap-8 pt-2">
        {/* Activity */}
        <div className="flex flex-col gap-3">
          <span className="text-[#101128] text-sm font-bold">Activity</span>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-[#777786] text-sm font-normal">
                Last Sync
              </span>
              <span className="text-[#30394A] text-sm font-normal">
                {device.activity.lastSync}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#777786] text-sm font-normal">
                Last treatment
              </span>
              <span className="text-[#30394A] text-sm font-normal">
                {device.activity.lastTreatment}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#777786] text-sm font-normal">
                Last protocol
              </span>
              <span className="text-[#30394A] text-sm font-normal">
                {device.activity.lastProtocol}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#777786] text-sm font-normal">
                Treatment counts
              </span>
              <span className="text-[#30394A] text-sm font-normal">
                {device.activity.treatmentCounts}
              </span>
            </div>
          </div>
        </div>

        {/* Coil */}
        <div className="flex flex-col gap-3">
          <span className="text-[#101128] text-sm font-bold">Coil</span>
          <div className="flex flex-col gap-2">
            {device.coils.map((coil, index) => (
              <CoilRow key={index} coil={coil} />
            ))}
          </div>
        </div>

        {/* Software details */}
        <div className="flex flex-col gap-3">
          <span className="text-[#101128] text-sm font-bold">
            Software details
          </span>
          <div className="flex flex-col gap-2">
            {[
              { label: "Version", value: device.software.version },
              { label: "DAM", value: device.software.dam },
              { label: "MCU", value: device.software.mcu },
              { label: "OS1", value: device.software.os1 },
              { label: "OS2", value: device.software.os2 },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="text-[#777786] text-sm font-normal">
                  {label}
                </span>
                <span className="text-[#30394A] text-sm font-normal">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
