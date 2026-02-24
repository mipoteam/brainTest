import { useState } from "react";
import { organization, clinics, Clinic } from "@/data/settingsData";
import { ClinicsList } from "./ClinicsList";
import { ClinicDetail } from "./ClinicDetail";

export function ClinicsTab() {
  const [selectedClinic, setSelectedClinic] = useState<Clinic>(clinics[0]);

  return (
    <div className="flex flex-col gap-4">
      {/* Organization header card */}
      <div className="bg-white rounded-lg border border-[#E1E1E4] px-6 py-4 flex items-center gap-6">
        {/* Logo placeholder */}
        <div className="w-12 h-12 rounded border border-[#E1E1E4] bg-[#F7F8FC] flex items-center justify-center shrink-0">
          <span className="text-[#B8B8C0] text-xs font-normal">LOGO</span>
        </div>
        <span className="text-[#101128] text-base font-bold">{organization.name}</span>
        <span className="text-[#005487] text-sm font-normal ml-4">{organization.email}</span>
        <span className="text-[#005487] text-sm font-normal">{organization.website}</span>
      </div>

      {/* Split layout: clinics list + detail */}
      <div className="flex gap-4 items-start">
        {/* Left panel — clinics list */}
        <div className="flex-1 min-w-0 bg-white rounded-lg border border-[#E1E1E4] p-6">
          <ClinicsList
            clinics={clinics}
            selectedId={selectedClinic?.id ?? null}
            onSelect={setSelectedClinic}
          />
        </div>

        {/* Right panel — clinic detail */}
        {selectedClinic && (
          <div className="w-[420px] shrink-0 bg-white rounded-lg border border-[#E1E1E4] p-6">
            <ClinicDetail clinic={selectedClinic} />
          </div>
        )}
      </div>
    </div>
  );
}
