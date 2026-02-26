import { useState } from "react";
import { MainLayout } from "@/components/MainLayout";
import { ClinicsTab } from "./ClinicsTab";
import { cn } from "@/lib/utils";

const TOP_TABS = ["Users", "Clinics", "Scales"];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <MainLayout>
      <div className="px-10 py-6">
        {/* Page title */}
        <h1 className="text-[#30394A] text-2xl font-medium leading-[30px] mb-4">
          Settings
        </h1>

        {/* Top tabs */}
        <div className="flex gap-4 border-b border-[#E1E1E4] mb-6">
          {TOP_TABS.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(index)}
              className={cn(
                "pb-3 px-3 text-sm transition-colors relative",
                activeTab === index
                  ? "text-[#005487] font-bold bg-white rounded-t-lg"
                  : "text-[#777786] font-normal hover:text-[#30394A]"
              )}
            >
              {tab}
              {activeTab === index && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#005487]" />
              )}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {activeTab === 0 && (
          <div className="flex items-center justify-center h-48 text-[#777786] text-sm">
            User management coming soon.
          </div>
        )}
        {activeTab === 1 && <ClinicsTab />}
        {activeTab === 2 && (
          <div className="flex items-center justify-center h-48 text-[#777786] text-sm">
            Scales configuration coming soon.
          </div>
        )}
      </div>
    </MainLayout>
  );
}
