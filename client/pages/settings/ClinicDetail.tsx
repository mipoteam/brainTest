import { useState } from "react";
import { Clinic, DeviceInfo, CoilInfo } from "@/services/settingsService";
import { cn } from "@/lib/utils";

const COIL_COLORS: Record<string, string> = {
  H1: "bg-[#88D3EE]",
  H4: "bg-[#6FD44B]",
  H7: "bg-[#FFCE2D]",
};

// Contact icons (24x24, fill #777786)
const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.05 21C3.75 21 3.5 20.9 3.3 20.7C3.1 20.5 3 20.25 3 19.95V15.9C3 15.6833 3.075 15.4875 3.225 15.3125C3.375 15.1375 3.56667 15.0167 3.8 14.95L7.25 14.25C7.48333 14.2167 7.72083 14.2375 7.9625 14.3125C8.20417 14.3875 8.4 14.5 8.55 14.65L10.9 17C11.5333 16.6333 12.1333 16.2292 12.7 15.7875C13.2667 15.3458 13.8083 14.8667 14.325 14.35C14.875 13.8167 15.3792 13.2625 15.8375 12.6875C16.2958 12.1125 16.6917 11.5167 17.025 10.9L14.6 8.45C14.4667 8.31667 14.375 8.15833 14.325 7.975C14.275 7.79167 14.2667 7.56667 14.3 7.3L14.95 3.8C14.9833 3.58333 15.0917 3.39583 15.275 3.2375C15.4583 3.07917 15.6667 3 15.9 3H19.95C20.25 3 20.5 3.1 20.7 3.3C20.9 3.5 21 3.75 21 4.05C21 6.13333 20.5458 8.19167 19.6375 10.225C18.7292 12.2583 17.4417 14.1083 15.775 15.775C14.1083 17.4417 12.2583 18.7292 10.225 19.6375C8.19167 20.5458 6.13333 21 4.05 21Z" fill="#777786"/>
  </svg>
);

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM12 11L20 6H4L12 11ZM4 18H20V8L12.525 12.675C12.3583 12.775 12.1833 12.825 12 12.825C11.8167 12.825 11.6417 12.775 11.475 12.675L4 8V18Z" fill="#777786"/>
  </svg>
);

const MapPinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12C12.55 12 13.0208 11.8042 13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12ZM12 21.5C9.68333 19.4833 7.9375 17.6125 6.7625 15.8875C5.5875 14.1625 5 12.5667 5 11.1C5 8.86667 5.72917 7.08333 7.1875 5.75C8.64583 4.41667 10.3 3.75 12 3.75C13.7 3.75 15.3542 4.41667 16.8125 5.75C18.2708 7.08333 19 8.86667 19 11.1C19 12.5667 18.4125 14.1625 17.2375 15.8875C16.0625 17.6125 14.3167 19.4833 12 21.5Z" fill="#777786"/>
  </svg>
);

const GlobeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C12.3833 19.45 12.7167 18.8708 13 18.2625C13.2833 17.6542 13.5167 17.0167 13.7 16.35H10.3C10.4833 17.0167 10.7167 17.6542 11 18.2625C11.2833 18.8708 11.6167 19.45 12 20ZM9.4 19.6C9.0667 19.0333 8.7875 18.4333 8.5625 17.8C8.3375 17.1667 8.15 16.5 8 15.85H5.15C5.6 16.7 6.1875 17.4333 6.9125 18.05C7.6375 18.6667 8.46667 19.1167 9.4 19.4V19.6ZM14.6 19.6V19.4C15.5333 19.1167 16.3625 18.6667 17.0875 18.05C17.8125 17.4333 18.4 16.7 18.85 15.85H16C15.85 16.5 15.6625 17.1667 15.4375 17.8C15.2125 18.4333 14.9333 19.0333 14.6 19.6ZM4.25 14.35H7.5C7.45 14.0333 7.4167 13.7125 7.4 13.3875C7.3833 13.0625 7.375 12.7333 7.375 12.4C7.375 11.9667 7.3875 11.5875 7.4125 11.2625C7.4375 10.9375 7.4667 10.6333 7.5 10.35H4.25C4.15 10.65 4.075 10.9542 4.025 11.2625C3.975 11.5708 3.95 11.9 3.95 12.25C3.95 12.6333 3.975 12.9792 4.025 13.2875C4.075 13.5958 4.15 13.9 4.25 14.35ZM9 14.35H15C15.05 14.0333 15.0833 13.7083 15.1 13.375C15.1167 13.0417 15.125 12.7167 15.125 12.4C15.125 11.9667 15.1083 11.5875 15.075 11.2625C15.0417 10.9375 15.0083 10.6333 14.975 10.35H9.025C8.99167 10.6333 8.9625 10.9375 8.9375 11.2625C8.9125 11.5875 8.9 11.9667 8.9 12.4C8.9 12.7167 8.90833 13.0417 8.925 13.375C8.94167 13.7083 8.96667 14.0333 9 14.35ZM16.5 14.35H19.75C19.85 14.0333 19.925 13.7125 19.975 13.3875C20.025 13.0625 20.05 12.7167 20.05 12.35C20.05 11.9833 20.025 11.6333 19.975 11.3C19.925 10.9667 19.85 10.65 19.75 10.35H16.5C16.5333 10.6333 16.5625 10.9375 16.5875 11.2625C16.6125 11.5875 16.625 11.9667 16.625 12.4C16.625 12.7333 16.6167 13.0583 16.6 13.375C16.5833 13.6917 16.55 14.0167 16.5 14.35ZM15.95 8.85H18.85C18.4 8.01667 17.8125 7.29167 17.0875 6.675C16.3625 6.05833 15.5333 5.6 14.6 5.3V5.5C14.9333 6.06667 15.2125 6.66667 15.4375 7.3C15.6625 7.93333 15.85 8.38333 15.95 8.85ZM10.3 8.85H13.7C13.5167 8.18333 13.2833 7.54583 13 6.9375C12.7167 6.32917 12.3833 5.75 12 5.2C11.6167 5.75 11.2833 6.32917 11 6.9375C10.7167 7.54583 10.4833 8.18333 10.3 8.85ZM5.15 8.85H8.05C8.2 8.18333 8.3875 7.53333 8.6125 6.9C8.8375 6.26667 9.11667 5.66667 9.45 5.1C8.51667 5.4 7.6875 5.85833 6.9625 6.475C6.2375 7.09167 5.66667 7.91667 5.15 8.85Z" fill="#777786"/>
  </svg>
);

// Chevron icons matching Figma exactly (stroke-linecap="square")
const ChevronDownIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 11L12 15L16 11" stroke="#92929E" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
  </svg>
);

const ChevronUpIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 13L12 9L16 13" stroke="#92929E" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
  </svg>
);

function CoilRow({ coil }: { coil: CoilInfo }) {
  const bgColor = COIL_COLORS[coil.type] || "bg-[#B8B8C0]";
  return (
    <div className="flex items-center gap-2">
      <div className={cn("inline-flex h-6 w-8 justify-center items-center rounded-lg shrink-0", bgColor)}>
        <span className="text-[#30394A] font-normal text-sm">{coil.type}</span>
      </div>
      <span className="text-[#30394A] text-sm font-normal">{coil.model}</span>
    </div>
  );
}

const LOG_OPTIONS = [
  { id: "events", label: "Events log" },
  { id: "treatment", label: "Treatment log" },
  { id: "coil", label: "Coil log" },
];

function DevicePanel({ device }: { device: DeviceInfo }) {
  const [logOpen, setLogOpen] = useState(false);
  const [selectedLogs, setSelectedLogs] = useState<Set<string>>(
    new Set(["treatment", "coil"])
  );

  const toggleLog = (id: string) => {
    setSelectedLogs((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div>
      {/* Device ID + Download log — per Figma */}
      <div className="flex items-center justify-between py-4 border-b border-[#E1E1E4] -mx-6 px-6">
        <div className="flex items-center gap-2">
          <span className="text-[#777786] text-sm font-normal">Device ID</span>
          <span className="text-[#30394A] text-sm font-bold">{device.deviceId}</span>
        </div>

        {/* Dropdown — width 183px per Figma */}
        <div className="relative">
          <button
            onClick={() => setLogOpen(!logOpen)}
            className="flex items-center gap-1 bg-white border border-[#E1E1E4] rounded-lg"
            style={{ width: 183, padding: "8px 12px" }}
          >
            <span className="flex-1 text-left text-[#30394A] text-base font-normal leading-5">
              Download log
            </span>
            {logOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </button>

          {logOpen && (
            <div
              className="absolute right-0 top-full mt-1 bg-white border border-[#E1E1E4] rounded-lg z-20 flex flex-col"
              style={{
                width: 183,
                padding: 4,
                gap: 4,
                boxShadow: "1px 1px 4px 0 rgba(0,0,0,0.08)",
              }}
            >
              {LOG_OPTIONS.map((opt) => {
                const checked = selectedLogs.has(opt.id);
                return (
                  <label
                    key={opt.id}
                    className="flex items-center rounded-lg cursor-pointer hover:bg-[#ECF7FB] transition-colors"
                    style={{ height: 40, padding: "0 12px", gap: 8 }}
                  >
                    {/* Checkbox group: gap 6px between 24x24 container and label */}
                    <div className="flex items-center" style={{ gap: 6 }}>
                      {/* 24x24 checkbox container */}
                      <div className="relative shrink-0" style={{ width: 24, height: 24 }}>
                        {/* 18x18 actual checkbox at offset 3,3 */}
                        <div
                          className={cn(
                            "absolute transition-colors",
                            checked ? "bg-[#005487]" : "bg-white"
                          )}
                          style={{
                            left: 3,
                            top: 3,
                            width: 18,
                            height: 18,
                            borderRadius: 2,
                            border: checked ? "none" : "1.5px solid #B8B8C0",
                          }}
                          onClick={() => toggleLog(opt.id)}
                        />
                        {checked && (
                          <svg
                            style={{ position: "absolute", left: 3, top: 3 }}
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={() => toggleLog(opt.id)}
                          >
                            <path d="M14 5L7.33333 11.6667L4 8.33333" stroke="white" strokeWidth="1.5"/>
                          </svg>
                        )}
                      </div>
                      <span
                        className="text-[#30394A] text-base font-normal leading-5"
                        onClick={() => toggleLog(opt.id)}
                      >
                        {opt.label}
                      </span>
                    </div>
                  </label>
                );
              })}

              {/* Download button — h-[40px], px-[16px], 14px weight 500 */}
              <button
                className="flex items-center justify-center bg-[#005487] hover:bg-[#004373] rounded-lg text-white transition-colors"
                style={{ height: 40, padding: "0 16px", fontSize: 14, fontWeight: 500, lineHeight: "18px" }}
                onClick={() => setLogOpen(false)}
              >
                Download
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Three columns: Activity | Coil | Software */}
      <div className="grid grid-cols-3 pt-4" style={{ gap: 24 }}>
        {/* Activity */}
        <div className="flex flex-col gap-3">
          <span className="text-[#30394A] text-sm font-bold">Activity</span>
          <div className="flex flex-col gap-2">
            {[
              { label: "Last Sync", value: device.activity.lastSync },
              { label: "Last treatment", value: device.activity.lastTreatment },
              { label: "Last protocol", value: device.activity.lastProtocol },
              { label: "Treatment counts", value: String(device.activity.treatmentCounts) },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-baseline gap-1 flex-wrap">
                <span className="text-[#777786] text-sm font-normal whitespace-nowrap">{label}</span>
                <span className="text-[#30394A] text-sm font-normal">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Coil */}
        <div className="flex flex-col gap-3 border-l border-r border-[#E1E1E4] px-6">
          <span className="text-[#30394A] text-sm font-bold">Coil</span>
          <div className="flex flex-col gap-2">
            {device.coils.map((coil, i) => (
              <CoilRow key={i} coil={coil} />
            ))}
          </div>
        </div>

        {/* Software details */}
        <div className="flex flex-col gap-3">
          <span className="text-[#30394A] text-sm font-bold">Software details</span>
          <div className="flex flex-col gap-2">
            {[
              { label: "Version", value: device.software.version },
              { label: "DAM", value: device.software.dam },
              { label: "MCU", value: device.software.mcu },
              { label: "OS1", value: device.software.os1 },
              { label: "OS2", value: device.software.os2 },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-baseline gap-1">
                <span className="text-[#777786] text-sm font-normal">{label}</span>
                <span className="text-[#30394A] text-sm font-normal">{value}</span>
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
    <div className="bg-white rounded-lg p-6 flex flex-col">
      {/* Site info */}
      <div className="pb-4 border-b border-[#E1E1E4] -mx-6 px-6">
        {/* Name + Site ID */}
        <div className="flex items-center gap-3 mb-3">
          <h3 className="text-[#30394A] text-2xl font-normal leading-8">{clinic.name}</h3>
          <div className="flex items-center gap-1.5 ml-1">
            <span className="text-[#777786] text-sm font-normal">Site ID</span>
            <span className="text-[#30394A] text-sm font-bold">{clinic.siteId}</span>
          </div>
        </div>

        {/* Phone + Email */}
        <div className="flex items-center gap-4 mb-2">
          <div className="flex items-center gap-1.5">
            <PhoneIcon />
            <span className="text-[#30394A] text-sm font-normal">{clinic.phone}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MailIcon />
            <a
              href={`mailto:${clinic.email}`}
              className="text-[#30394A] text-sm font-normal hover:underline"
            >
              {clinic.email}
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-center gap-1.5 mb-2">
          <MapPinIcon />
          <span className="text-[#30394A] text-sm font-normal">{clinic.address}</span>
        </div>

        {/* Website */}
        <div className="flex items-center gap-1.5">
          <GlobeIcon />
          <a
            href={clinic.website.startsWith("http") ? clinic.website : `https://${clinic.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#30394A] text-sm font-normal hover:underline"
          >
            {clinic.website}
          </a>
        </div>
      </div>

      {/* Device sub-tabs */}
      <div className="mt-4">
        <div className="flex border-b border-[#E1E1E4] -mx-6 px-6">
          {clinic.deviceList.map((device, index) => (
            <button
              key={device.name}
              onClick={() => setActiveDevice(index)}
              className={cn(
                "py-2.5 text-sm font-normal transition-colors relative whitespace-nowrap mr-2",
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
