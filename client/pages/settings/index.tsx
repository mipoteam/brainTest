import { useState } from "react";
import { MainLayout } from "@/components/MainLayout";
import { SiteInfoCard } from "./SiteInfoCard";
import { DevicePanel } from "./DevicePanel";
import { siteInfo, devices } from "@/data/settingsData";

const TOP_TABS = ["General", "Devices", "Users"];

export default function SettingsPage() {
  const [activeTopTab, setActiveTopTab] = useState(1); // 0-indexed, default to "Devices" (index 1)
  const [activeDeviceTab, setActiveDeviceTab] = useState(0);

  return (
    <MainLayout>
      <div className="px-4 md:px-10 py-6">
        {/* Page Header */}
        <h1 className="text-[#30394A] text-2xl font-medium leading-[30px] mb-6">
          Settings
        </h1>

        {/* Top-level tabs */}
        <div className="flex border-b border-[#E1E1E4] mb-6">
          {TOP_TABS.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTopTab(index)}
              className={`px-6 py-3 text-base font-normal transition-colors relative ${
                activeTopTab === index
                  ? "text-[#005487] font-medium"
                  : "text-[#777786] hover:text-[#30394A]"
              }`}
            >
              {tab}
              {activeTopTab === index && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#005487]" />
              )}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {activeTopTab === 0 && (
          <div className="flex items-center justify-center h-48 text-[#777786] text-base">
            General settings coming soon.
          </div>
        )}

        {activeTopTab === 1 && (
          <div className="flex flex-col gap-4">
            {/* Site info card */}
            <SiteInfoCard site={siteInfo} />

            {/* Device tabs card */}
            <div className="bg-white rounded-lg shadow-[0_0_20px_0_rgba(0,0,0,0.08)]">
              {/* Device sub-tabs */}
              <div className="flex border-b border-[#E1E1E4] px-6">
                {devices.map((device, index) => (
                  <button
                    key={device.name}
                    onClick={() => setActiveDeviceTab(index)}
                    className={`px-4 py-4 text-sm font-normal transition-colors relative whitespace-nowrap ${
                      activeDeviceTab === index
                        ? "text-[#005487] font-medium"
                        : "text-[#777786] hover:text-[#30394A]"
                    }`}
                  >
                    {device.name}
                    {activeDeviceTab === index && (
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#005487]" />
                    )}
                  </button>
                ))}
              </div>

              {/* Active device panel */}
              <div className="px-6 pb-6">
                <DevicePanel device={devices[activeDeviceTab]} />
              </div>
            </div>
          </div>
        )}

        {activeTopTab === 2 && (
          <div className="flex items-center justify-center h-48 text-[#777786] text-base">
            User management coming soon.
          </div>
        )}
      </div>
    </MainLayout>
  );
}
