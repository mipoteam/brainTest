import { X } from "lucide-react";

interface FilterChipProps {
  label: string;
  onRemove: () => void;
}

export function FilterChip({ label, onRemove }: FilterChipProps) {
  return (
    <div className="inline-flex h-6 px-2 justify-center items-center gap-1 rounded-lg bg-[#DBEDF7] max-w-full">
      <span className="text-[#30394A] font-normal text-sm leading-[18px] truncate whitespace-nowrap">
        {label}
      </span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
        className="flex items-center justify-center"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle opacity="0.3" cx="8" cy="8" r="6" fill="white" />
          <path
            d="M5 5L11 11"
            stroke="#777786"
            strokeMiterlimit="10"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
          <path
            d="M11 5L5 11"
            stroke="#777786"
            strokeMiterlimit="10"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
