import { useState } from "react";
import { Phone, Mail, MapPin, Globe, ChevronDown, ChevronUp } from "lucide-react";
import { Clinic, DeviceInfo, CoilInfo } from "@/data/settingsData";
import { cn } from "@/lib/utils";

const COIL_COLORS: Record<string, string> = {
  H1: "bg-[#88D3EE]",
  H4: "bg-[#6FD44B]",
  H7: "bg-[#FFCE2D]",
};

function CoilRow({ coil }: { coil: CoilInfo }) {
  const bgColor = COIL_COLORS[coil.type] || "bg-[#B8B8C0]";
  return (
    <div className="flex items-center gap-2">
      <div className={cn("inline-flex h-6 w-8 justify-center items-center rounded-lg", bgColor)}>
        <span className="text-[#30394A] font-normal text-sm">{coil.type}</span>
      </div>
      <span className="text-[#30394A] text-sm font-normal">{coil.model}</span>
    </div>
  );
}

function DevicePanel({ device }: { device: DeviceInfo }) {
  const [logOpen, setLogOpen] = useState(false);

  return (
    <div>
      {/* Device ID + Download log */}
      <div className="flex items-center justify-between py-4 border-b border-[#E1E1E4]">
        <div className="flex items-center gap-2">
          <span className="text-[#777786] text-sm font-normal">Device ID</span>
          <span className="text-[#101128] text-sm font-bold">{device.deviceId}</span>
        </div>
        <div className="relative">
          <button
            onClick={() => setLogOpen(!logOpen)}
            className="flex items-center gap-2 h-9 px-4 border border-[#E1E1E4] rounded bg-white hover:bg-gray-50 transition-colors"
          >
            <span className="text-[#30394A] text-sm font-normal">Download log</span>
            {logOpen ? (
              <ChevronUp className="w-4 h-4 text-[#777786]" />
            ) : (
              <ChevronDown className="w-4 h-4 text-[#777786]" />
            )}
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
      <div className="grid grid-cols-3 gap-6 pt-4">
        {/* Activity */}
        <div className="flex flex-col gap-2">
          <span className="text-[#101128] text-sm font-bold">Activity</span>
          <div className="flex flex-col gap-2 mt-1">
            {[
              { label: "Last Sync", value: device.activity.lastSync },
              { label: "Last treatment", value: device.activity.lastTreatment },
              { label: "Last protocol", value: device.activity.lastProtocol },
              { label: "Treatment counts", value: String(device.activity.treatmentCounts) },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-wrap items-baseline gap-1">
                <span className="text-[#777786] text-xs font-normal whitespace-nowrap">{label}</span>
                <span className="text-[#30394A] text-xs font-normal">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Coil */}
        <div className="flex flex-col gap-2">
          <span className="text-[#101128] text-sm font-bold">Coil</span>
          <div className="flex flex-col gap-2 mt-1">
            {device.coils.map((coil, i) => (
              <CoilRow key={i} coil={coil} />
            ))}
          </div>
        </div>

        {/* Software details */}
        <div className="flex flex-col gap-2">
          <span className="text-[#101128] text-sm font-bold">Software details</span>
          <div className="flex flex-col gap-2 mt-1">
            {[
              { label: "Version", value: device.software.version },
              { label: "DAM", value: device.software.dam },
              { label: "MCU", value: device.software.mcu },
              { label: "OS1", value: device.software.os1 },
              { label: "OS2", value: device.software.os2 },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-baseline gap-1">
                <span className="text-[#777786] text-xs font-normal">{label}</span>
                <span className="text-[#30394A] text-xs font-normal">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface ClinicDetailProps {
  clinic: Clinic;
}

export function ClinicDetail({ clinic }: ClinicDetailProps) {
  const [activeDevice, setActiveDevice] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Site info */}
      <div className="pb-4 border-b border-[#E1E1E4]">
        <div className="flex items-center gap-2 mb-3">
          <h3 className="text-[#101128] text-base font-bold">{clinic.name}</h3>
          <span className="text-[#777786] text-xs font-normal">Site ID</span>
          <span className="text-[#101128] text-xs font-bold">{clinic.siteId}</span>
        </div>
        <div className="flex items-center gap-6 mb-1.5">
          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-[#777786] shrink-0" />
            <span className="text-[#30394A] text-xs">{clinic.phone}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-[#777786] shrink-0" />
            <span className="text-[#30394A] text-xs">{clinic.email}</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 mb-1.5">
          <MapPin className="w-3.5 h-3.5 text-[#777786] shrink-0" />
          <span className="text-[#30394A] text-xs">{clinic.address}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-[#777786] shrink-0" />
          <span className="text-[#30394A] text-xs">{clinic.website}</span>
        </div>
      </div>

      {/* Device sub-tabs */}
      <div>
        <div className="flex border-b border-[#E1E1E4]">
          {clinic.deviceList.map((device, index) => (
            <button
              key={device.name}
              onClick={() => setActiveDevice(index)}
              className={cn(
                "px-3 py-2.5 text-sm font-normal transition-colors relative whitespace-nowrap",
                activeDevice === index
                  ? "text-[#005487] font-medium"
                  : "text-[#777786] hover:text-[#30394A]"
              )}
            >
              {device.name}
              {activeDevice === index && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#005487]" />
              )}
            </button>
          ))}
        </div>

        <DevicePanel device={clinic.deviceList[activeDevice]} />
      </div>
    </div>
  );
}
