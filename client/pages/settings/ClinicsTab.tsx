import { useState } from "react";
import { organization, clinics, Clinic } from "@/services/settingsService";
import { ClinicsList } from "./ClinicsList";
import { ClinicDetail } from "./ClinicDetail";

export function ClinicsTab() {
  const [selectedClinic, setSelectedClinic] = useState<Clinic>(clinics[0]);

  return (
    <div className="flex flex-col gap-4">
      {/* Organization header card */}
      <div
        className="bg-white rounded-lg px-6 py-4 flex items-center gap-6"
        style={{ boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.12)" }}
      >
        {/* Logo placeholder */}
        <div className="w-12 h-12 rounded bg-[#F7F8FC] flex items-center justify-center shrink-0">
          <span className="text-[#B8B8C0] text-xs font-normal">LOGO</span>
        </div>
        <span className="text-[#30394A] text-[24px] font-normal">{organization.name}</span>
        <span className="text-[#005487] text-base font-normal ml-4">{organization.email}</span>
        <span className="text-[#005487] text-base font-normal">{organization.website}</span>
      </div>

      {/* Split layout: clinics list + detail */}
      <div
        className="flex items-stretch bg-white rounded-lg overflow-hidden"
        style={{ boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.12)" }}
      >
        {/* Left panel — clinics list */}
        <div className="w-[55%] min-w-0 py-6">
          <ClinicsList
            clinics={clinics}
            selectedId={selectedClinic?.id ?? null}
            onSelect={setSelectedClinic}
          />
        </div>

        {/* Right panel — clinic detail */}
        {selectedClinic && (
          <div className="w-[45%] shrink-0 bg-[#ECF7FB] p-6 relative">
            <ClinicDetail clinic={selectedClinic} />
          </div>
        )}
      </div>
    </div>
  );
}
