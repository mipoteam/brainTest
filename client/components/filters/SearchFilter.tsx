import { Search } from "lucide-react";

interface SearchFilterProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchFilter({
  value,
  onChange,
  placeholder = "Protocol name",
}: SearchFilterProps) {
  return (
    <div className="flex flex-col gap-1 w-60">
      <div className="flex items-center gap-1 px-3 py-2 border border-[#E1E1E4] bg-white rounded-lg">
        <div className="flex items-center gap-2.5 flex-1">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="flex-1 text-base leading-5 text-[#30394A] placeholder:text-[#B8B8C0] outline-none bg-transparent"
          />
        </div>
        <Search className="w-6 h-6 text-[#777786]" />
      </div>
    </div>
  );
}
