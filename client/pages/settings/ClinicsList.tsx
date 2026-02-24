import { useState } from "react";
import { Search } from "lucide-react";
import { Clinic } from "@/data/settingsData";
import { cn } from "@/lib/utils";

interface ClinicsListProps {
  clinics: Clinic[];
  selectedId: string | null;
  onSelect: (clinic: Clinic) => void;
}

export function ClinicsList({ clinics, selectedId, onSelect }: ClinicsListProps) {
  const [search, setSearch] = useState("");

  const filtered = clinics.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-4">
      {/* Header row */}
      <div className="flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          {/* Clinic icon */}
          <div className="w-8 h-8 rounded bg-[#ECF7FB] flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 21H21" stroke="#005487" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 21V7L12 3L19 7V21" stroke="#005487" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 21V15H15V21" stroke="#005487" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-[#30394A] text-[24px] font-normal">
            Clinics ({clinics.length})
          </span>
        </div>

        {/* Super admins button */}
        <button className="flex items-center gap-1.5 px-3 py-1.5 border border-[#E1E1E4] rounded-lg hover:bg-gray-50 transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L13.09 8.26L19 6L15.45 11.27L21 13.5L15.45 15.73L19 21L13.09 18.74L12 25L10.91 18.74L5 21L8.55 15.73L3 13.5L8.55 11.27L5 6L10.91 8.26L12 2Z" stroke="#005487" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-[#005487] text-sm font-normal">Super admins (3)</span>
        </button>
      </div>

      {/* Search */}
      <div className="relative mx-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Look for a clinic"
          className="w-full h-9 pl-3 pr-9 border border-[#E1E1E4] rounded text-sm text-[#30394A] placeholder:text-[#B8B8C0] focus:outline-none focus:border-[#005487] transition-colors"
        />
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B8B8C0]" />
      </div>

      {/* Table */}
      <div className="pl-6">
        {/* Table header */}
        <div className="grid grid-cols-[2fr_1fr_1fr_2fr] gap-2 pr-6 py-2 border-b border-[#E1E1E4]">
          {["Site Name", "Site ID", "Devices", "Address"].map((col) => (
            <span key={col} className="text-[#777786] text-xs font-normal">
              {col}
            </span>
          ))}
        </div>

        {/* Table rows */}
        <div className="flex flex-col">
          {filtered.map((clinic) => {
            const isSelected = clinic.id === selectedId;
            return (
              <button
                key={clinic.id}
                onClick={() => onSelect(clinic)}
                className={cn(
                  "w-full grid grid-cols-[2fr_1fr_1fr_2fr] gap-2 pr-6 py-3 border-b border-[#E1E1E4] text-left transition-colors hover:bg-[#ECF7FB]",
                  isSelected && "bg-[#ECF7FB]"
                )}
              >
              <span
                className={cn(
                  "text-base font-normal truncate",
                  isSelected ? "text-[#005487] font-medium" : "text-[#30394A]"
                )}
              >
                {clinic.name}
              </span>
              <span className="text-[#30394A] text-base font-normal">{clinic.siteId}</span>
              <span className="text-[#30394A] text-base font-normal">{clinic.devices}</span>
              <span className="text-[#30394A] text-base font-normal truncate">{clinic.address}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
