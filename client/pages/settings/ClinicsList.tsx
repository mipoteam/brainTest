import { useState } from "react";
import { Crown } from "lucide-react";
import { Clinic } from "@/services/settingsService";
import { cn } from "@/lib/utils";

interface ClinicsListProps {
  clinics: Clinic[];
  selectedId: string | null;
  onSelect: (clinic: Clinic) => void;
}

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="#B8B8C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function ClinicsList({ clinics, selectedId, onSelect }: ClinicsListProps) {
  const [search, setSearch] = useState("");

  const filtered = clinics.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col">
      {/* Header row */}
      <div className="flex items-center justify-between px-6 mb-4">
        <div className="flex items-center gap-2">
          {/* Clinic icon */}
          <div className="w-8 h-8 rounded-lg bg-[#ECF7FB] flex items-center justify-center shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 21H21" stroke="#005487" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 21V7L12 3L19 7V21" stroke="#005487" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 21V15H15V21" stroke="#005487" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-[#30394A] text-2xl font-normal leading-8">
            Clinics ({clinics.length})
          </span>
        </div>

        {/* Super admins button */}
        <button className="flex items-center gap-2 px-4 py-2 border border-[#005487] rounded-lg hover:bg-[#ECF7FB] transition-colors">
          <Crown className="w-4 h-4 text-[#005487]" />
          <span className="text-[#005487] text-sm font-medium leading-[18px]">Super admins (3)</span>
        </button>
      </div>

      {/* Search */}
      <div className="relative mx-6 mb-4 w-[280px]">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Look for a clinic"
          className="w-full h-[40px] pl-3 pr-9 border border-[#E1E1E4] rounded-lg text-sm text-[#30394A] placeholder:text-[#B8B8C0] focus:outline-none focus:border-[#005487] transition-colors"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <SearchIcon />
        </span>
      </div>

      {/* Table header */}
      <div className="grid grid-cols-[2fr_1fr_1fr_2fr] px-6 py-3 border-b border-[#E1E1E4]">
        {["Site Name", "Site ID", "Devices", "Address"].map((col) => (
          <span key={col} className="text-[#777786] text-sm font-normal">
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
                "w-full grid grid-cols-[2fr_1fr_1fr_2fr] px-6 py-3 border-b border-[#E1E1E4] text-left transition-colors hover:bg-[#ECF7FB]",
                isSelected && "bg-[#ECF7FB]"
              )}
            >
              <span className="text-[#30394A] text-sm font-normal truncate pr-2">
                {clinic.name}
              </span>
              <span className="text-[#30394A] text-sm font-normal">{clinic.siteId}</span>
              <span className="text-[#30394A] text-sm font-normal">{clinic.devices}</span>
              <span className="text-[#30394A] text-sm font-normal truncate">{clinic.address}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
