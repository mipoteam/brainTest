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
        className="bg-white rounded-lg px-6 py-4 flex items-center gap-4"
        style={{ boxShadow: "0 0 20px 0 rgba(0,0,0,0.08)" }}
      >
        {/* Logo placeholder */}
        <div className="w-10 h-10 rounded-lg bg-[#ECF7FB] flex items-center justify-center shrink-0 border border-[#E1E1E4]">
          <span className="text-[#B8B8C0] text-xs font-normal">LOGO</span>
        </div>
        <span className="text-[#30394A] text-xl font-bold leading-7">
          {organization.name}
        </span>
        <a
          href={`mailto:${organization.email}`}
          className="text-[#005487] text-sm font-normal hover:underline ml-4"
        >
          {organization.email}
        </a>
        <a
          href={organization.website.startsWith("http") ? organization.website : `https://${organization.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#005487] text-sm font-normal hover:underline"
        >
          {organization.website}
        </a>
      </div>

      {/* Split layout */}
      <div
        className="flex items-stretch bg-white rounded-lg overflow-hidden"
        style={{ boxShadow: "0 0 20px 0 rgba(0,0,0,0.08)" }}
      >
        {/* Left panel — 55% */}
        <div className="w-[55%] min-w-0 py-6">
          <ClinicsList
            clinics={clinics}
            selectedId={selectedClinic?.id ?? null}
            onSelect={setSelectedClinic}
          />
        </div>

        {/* Right panel — 45% */}
        {selectedClinic && (
          <div className="w-[45%] shrink-0 bg-[#ECF7FB] p-6">
            <ClinicDetail clinic={selectedClinic} />
          </div>
        )}
      </div>
    </div>
  );
}
