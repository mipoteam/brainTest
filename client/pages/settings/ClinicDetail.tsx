import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Clinic, DeviceInfo, CoilInfo } from "@/data/settingsData";
import { cn } from "@/lib/utils";

const COIL_COLORS: Record<string, string> = {
  H1: "bg-[#88D3EE]",
  H4: "bg-[#6FD44B]",
  H7: "bg-[#FFCE2D]",
};

// Custom SVG Icons
const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.05 21C3.75 21 3.5 20.9 3.3 20.7C3.1 20.5 3 20.25 3 19.95V15.9C3 15.6833 3.075 15.4875 3.225 15.3125C3.375 15.1375 3.56667 15.0167 3.8 14.95L7.25 14.25C7.48333 14.2167 7.72083 14.2375 7.9625 14.3125C8.20417 14.3875 8.4 14.5 8.55 14.65L10.9 17C11.5333 16.6333 12.1333 16.2292 12.7 15.7875C13.2667 15.3458 13.8083 14.8667 14.325 14.35C14.875 13.8167 15.3792 13.2625 15.8375 12.6875C16.2958 12.1125 16.6917 11.5167 17.025 10.9L14.6 8.45C14.4667 8.31667 14.375 8.15833 14.325 7.975C14.275 7.79167 14.2667 7.56667 14.3 7.3L14.95 3.8C14.9833 3.58333 15.0917 3.39583 15.275 3.2375C15.4583 3.07917 15.6667 3 15.9 3H19.95C20.25 3 20.5 3.1 20.7 3.3C20.9 3.5 21 3.75 21 4.05C21 6.13333 20.5458 8.19167 19.6375 10.225C18.7292 12.2583 17.4417 14.1083 15.775 15.775C14.1083 17.4417 12.2583 18.7292 10.225 19.6375C8.19167 20.5458 6.13333 21 4.05 21ZM17.95 9C18.2333 8.35 18.45 7.69167 18.6 7.025C18.75 6.35833 18.8667 5.68333 18.95 5H16.75L16.3 7.35L17.95 9ZM9 17.9L7.35 16.25L5 16.75V18.95C5.68333 18.9 6.35833 18.7833 7.025 18.6C7.69167 18.4167 8.35 18.1833 9 17.9Z" fill="#777786"/>
  </svg>
);

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM20 8L12.525 12.675C12.4417 12.725 12.3542 12.7625 12.2625 12.7875C12.1708 12.8125 12.0833 12.825 12 12.825C11.9167 12.825 11.8292 12.8125 11.7375 12.7875C11.6458 12.7625 11.5583 12.725 11.475 12.675L4 8V18H20V8ZM12 11L20 6H4L12 11ZM4 8.25V6.775V6.8V6.7875V8.25Z" fill="#777786"/>
  </svg>
);

const MapPinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 19.6875C14.0333 17.8208 15.5417 16.125 16.525 14.6C17.5083 13.075 18 11.7208 18 10.5375C18 8.72083 17.4208 7.23333 16.2625 6.07499C15.1042 4.91666 13.6833 4.33749 12 4.33749C10.3167 4.33749 8.89583 4.91666 7.7375 6.07499C6.57917 7.23333 6 8.72083 6 10.5375C6 11.7208 6.49167 13.075 7.475 14.6C8.45833 16.125 9.96667 17.8208 12 19.6875ZM12 21.6625C11.7667 21.6625 11.5333 21.6208 11.3 21.5375C11.0667 21.4542 10.8583 21.3292 10.675 21.1625C9.59167 20.1625 8.63333 19.1875 7.8 18.2375C6.96667 17.2875 6.27083 16.3667 5.7125 15.475C5.15417 14.5833 4.72917 13.725 4.4375 12.9C4.14583 12.075 4 11.2875 4 10.5375C4 8.03749 4.80417 6.04583 6.4125 4.56249C8.02083 3.07916 9.88333 2.33749 12 2.33749C14.1167 2.33749 15.9792 3.07916 17.5875 4.56249C19.1958 6.04583 20 8.03749 20 10.5375C20 11.2875 19.8542 12.075 19.5625 12.9C19.2708 13.725 18.8458 14.5833 18.2875 15.475C17.7292 16.3667 17.0333 17.2875 16.2 18.2375C15.3667 19.1875 14.4083 20.1625 13.325 21.1625C13.1417 21.3292 12.9333 21.4542 12.7 21.5375C12.4667 21.6208 12.2333 21.6625 12 21.6625ZM12 12.3375C12.55 12.3375 13.0208 12.1417 13.4125 11.75C13.8042 11.3583 14 10.8875 14 10.3375C14 9.78749 13.8042 9.31666 13.4125 8.92499C13.0208 8.53333 12.55 8.33749 12 8.33749C11.45 8.33749 10.9792 8.53333 10.5875 8.92499C10.1958 9.31666 10 9.78749 10 10.3375C10 10.8875 10.1958 11.3583 10.5875 11.75C10.9792 12.1417 11.45 12.3375 12 12.3375Z" fill="#777786"/>
  </svg>
);

const GlobeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_2858_6532)">
      <path d="M12 21.9999C10.6333 21.9999 9.34167 21.7374 8.125 21.2124C6.90833 20.6874 5.84583 19.9707 4.9375 19.0624C4.02917 18.1541 3.3125 17.0916 2.7875 15.8749C2.2625 14.6582 2 13.3666 2 11.9999C2 10.6166 2.2625 9.32074 2.7875 8.11241C3.3125 6.90408 4.02917 5.84574 4.9375 4.93741C5.84583 4.02908 6.90833 3.31241 8.125 2.78741C9.34167 2.26241 10.6333 1.99991 12 1.99991C13.3833 1.99991 14.6792 2.26241 15.8875 2.78741C17.0958 3.31241 18.1542 4.02908 19.0625 4.93741C19.9708 5.84574 20.6875 6.90408 21.2125 8.11241C21.7375 9.32074 22 10.6166 22 11.9999C22 13.3666 21.7375 14.6582 21.2125 15.8749C20.6875 17.0916 19.9708 18.1541 19.0625 19.0624C18.1542 19.9707 17.0958 20.6874 15.8875 21.2124C14.6792 21.7374 13.3833 21.9999 12 21.9999ZM12 19.9499C12.4333 19.3499 12.8083 18.7249 13.125 18.0749C13.4417 17.4249 13.7 16.7332 13.9 15.9999H10.1C10.3 16.7332 10.5583 17.4249 10.875 18.0749C11.1917 18.7249 11.5667 19.3499 12 19.9499ZM9.4 19.5499C9.1 18.9999 8.8375 18.4291 8.6125 17.8374C8.3875 17.2457 8.2 16.6332 8.05 15.9999H5.1C5.58333 16.8332 6.1875 17.5582 6.9125 18.1749C7.6375 18.7916 8.46667 19.2499 9.4 19.5499ZM14.6 19.5499C15.5333 19.2499 16.3625 18.7916 17.0875 18.1749C17.8125 17.5582 18.4167 16.8332 18.9 15.9999H15.95C15.8 16.6332 15.6125 17.2457 15.3875 17.8374C15.1625 18.4291 14.9 18.9999 14.6 19.5499ZM4.25 13.9999H7.65C7.6 13.6666 7.5625 13.3374 7.5375 13.0124C7.5125 12.6874 7.5 12.3499 7.5 11.9999C7.5 11.6499 7.5125 11.3124 7.5375 10.9874C7.5625 10.6624 7.6 10.3332 7.65 9.99991H4.25C4.16667 10.3332 4.10417 10.6624 4.0625 10.9874C4.02083 11.3124 4 11.6499 4 11.9999C4 12.3499 4.02083 12.6874 4.0625 13.0124C4.10417 13.3374 4.16667 13.6666 4.25 13.9999ZM9.65 13.9999H14.35C14.4 13.6666 14.4375 13.3374 14.4625 13.0124C14.4875 12.6874 14.5 12.3499 14.5 11.9999C14.5 11.6499 14.4875 11.3124 14.4625 10.9874C14.4375 10.6624 14.4 10.3332 14.35 9.99991H9.65C9.6 10.3332 9.5625 10.6624 9.5375 10.9874C9.5125 11.3124 9.5 11.6499 9.5 11.9999C9.5 12.3499 9.5125 12.6874 9.5375 13.0124C9.5625 13.3374 9.6 13.6666 9.65 13.9999ZM16.35 13.9999H19.75C19.8333 13.6666 19.8958 13.3374 19.9375 13.0124C19.9792 12.6874 20 12.3499 20 11.9999C20 11.6499 19.9792 11.3124 19.9375 10.9874C19.8958 10.6624 19.8333 10.3332 19.75 9.99991H16.35C16.4 10.3332 16.4375 10.6624 16.4625 10.9874C16.4875 11.3124 16.5 11.6499 16.5 11.9999C16.5 12.3499 16.4875 12.6874 16.4625 13.0124C16.4375 13.3374 16.4 13.6666 16.35 13.9999ZM15.95 7.99991H18.9C18.4167 7.16658 17.8125 6.44158 17.0875 5.82491C16.3625 5.20824 15.5333 4.74991 14.6 4.44991C14.9 4.99991 15.1625 5.57074 15.3875 6.16241C15.6125 6.75408 15.8 7.36658 15.95 7.99991ZM10.1 7.99991H13.9C13.7 7.26658 13.4417 6.57491 13.125 5.92491C12.8083 5.27491 12.4333 4.64991 12 4.04991C11.5667 4.64991 11.1917 5.27491 10.875 5.92491C10.5583 6.57491 10.3 7.26658 10.1 7.99991ZM5.1 7.99991H8.05C8.2 7.36658 8.3875 6.75408 8.6125 6.16241C8.8375 5.57074 9.1 4.99991 9.4 4.44991C8.46667 4.74991 7.6375 5.20824 6.9125 5.82491C6.1875 6.44158 5.58333 7.16658 5.1 7.99991Z" fill="#777786"/>
    </g>
    <defs>
      <clipPath id="clip0_2858_6532">
        <rect width="24" height="24" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

function CoilRow({ coil }: { coil: CoilInfo }) {
  const bgColor = COIL_COLORS[coil.type] || "bg-[#B8B8C0]";
  return (
    <div className="flex items-center gap-2">
      <div className={cn("inline-flex h-6 w-8 justify-center items-center rounded-lg", bgColor)}>
        <span className="text-[#30394A] font-normal text-sm">{coil.type}</span>
      </div>
      <span className="text-[#30394A] text-base font-normal">{coil.model}</span>
    </div>
  );
}

function DevicePanel({ device }: { device: DeviceInfo }) {
  const [logOpen, setLogOpen] = useState(false);

  return (
    <div>
      {/* Device ID + Download log */}
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <span className="text-[#777786] text-base font-normal">Device ID</span>
          <span className="text-[#101128] text-base font-bold">{device.deviceId}</span>
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
          <span className="text-[#101128] text-base font-bold">Activity</span>
          <div className="flex flex-col gap-2 mt-1">
            {[
              { label: "Last Sync", value: device.activity.lastSync },
              { label: "Last treatment", value: device.activity.lastTreatment },
              { label: "Last protocol", value: device.activity.lastProtocol },
              { label: "Treatment counts", value: String(device.activity.treatmentCounts) },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-wrap items-baseline gap-1">
                <span className="text-[#777786] text-sm font-normal whitespace-nowrap">{label}</span>
                <span className="text-[#30394A] text-sm font-normal">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Coil */}
        <div className="flex flex-col gap-2 border-l border-r border-[#E1E1E4] px-6">
          <span className="text-[#101128] text-base font-bold">Coil</span>
          <div className="flex flex-col gap-2 mt-1">
            {device.coils.map((coil, i) => (
              <CoilRow key={i} coil={coil} />
            ))}
          </div>
        </div>

        {/* Software details */}
        <div className="flex flex-col gap-2">
          <span className="text-[#101128] text-base font-bold">Software details</span>
          <div className="flex flex-col gap-2 mt-1">
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
    <div className="bg-white rounded-lg p-6 flex flex-col gap-4">
      {/* Site info */}
      <div className="pb-4 mb-4 border-b border-[#E1E1E4] -mx-6 px-6">
        <div className="flex items-center gap-2 mb-3">
          <h3 className="text-[#101128] text-base font-bold">{clinic.name}</h3>
          <span className="text-[#777786] text-sm font-normal">Site ID</span>
          <span className="text-[#101128] text-sm font-bold">{clinic.siteId}</span>
        </div>
        <div className="flex items-center gap-6 mb-3">
          <div className="flex items-center gap-1.5">
            <PhoneIcon />
            <span className="text-[#30394A] text-sm">{clinic.phone}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MailIcon />
            <span className="text-[#30394A] text-sm">{clinic.email}</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 mb-3">
          <MapPinIcon />
          <span className="text-[#30394A] text-sm">{clinic.address}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <GlobeIcon />
          <span className="text-[#30394A] text-sm">{clinic.website}</span>
        </div>
      </div>

      {/* Device sub-tabs */}
      <div>
        <div className="flex border-b border-[#B8B8C0]">
          {clinic.deviceList.map((device, index) => (
            <button
              key={device.name}
              onClick={() => setActiveDevice(index)}
              className={cn(
                "px-3 py-2.5 text-base font-normal transition-colors relative whitespace-nowrap",
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
