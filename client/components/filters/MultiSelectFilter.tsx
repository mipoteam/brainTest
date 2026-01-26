import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FilterChip } from "./FilterChip";
import { Checkbox } from "@/components/ui/checkbox";

export interface FilterOption {
  value: string;
  label: string;
}

interface MultiSelectFilterProps {
  label: string;
  options: FilterOption[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

export function MultiSelectFilter({
  label,
  options,
  selected,
  onChange,
}: MultiSelectFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggle = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  const handleRemove = (value: string) => {
    onChange(selected.filter((v) => v !== value));
  };

  const handleSelectAll = () => {
    if (selected.length === options.length) {
      onChange([]);
    } else {
      onChange(options.map((opt) => opt.value));
    }
  };

  const displayedChips = selected.slice(0, 2);
  const remainingCount = selected.length - displayedChips.length;

  return (
    <div className="flex items-center gap-0" ref={dropdownRef}>
      <div className="flex items-center py-2.5 px-2">
        <span className="text-[#30394A] font-normal text-base leading-5">
          {label}
        </span>
      </div>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 h-10 px-3 border border-[#E1E1E4] rounded bg-white hover:bg-gray-50 transition-colors min-w-[229px]"
        >
          <div className="flex items-center gap-1 flex-1">
            {selected.length === 0 ? (
              <span className="text-[#B8B8C0] font-normal text-sm">
                Select {label.toLowerCase()}
              </span>
            ) : (
              <>
                {displayedChips.map((value) => (
                  <FilterChip
                    key={value}
                    label={
                      options.find((opt) => opt.value === value)?.label || value
                    }
                    onRemove={() => handleRemove(value)}
                  />
                ))}
                {remainingCount > 0 && (
                  <div className="inline-flex h-6 px-2 justify-center items-center rounded-lg bg-[#DBEDF7]">
                    <span className="text-[#30394A] font-normal text-sm leading-[18px]">
                      +{remainingCount}
                    </span>
                  </div>
                )}
              </>
            )}
          </div>
          {isOpen ? (
            <ChevronUp className="w-6 h-6 text-[#92929E] flex-shrink-0" />
          ) : (
            <ChevronDown className="w-6 h-6 text-[#777786] flex-shrink-0" />
          )}
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 mt-1 w-[265px] bg-white border border-[#E1E1E4] rounded-lg shadow-[1px_1px_4px_0_rgba(0,0,0,0.08)] z-50 overflow-hidden">
            <div className="p-1 flex flex-col gap-1">
              {/* All options checkbox */}
              <div className="flex items-center h-10 pl-3 pr-3 border-b border-[#E1E1E4]">
                <div className="flex items-center gap-1.5 w-full">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <Checkbox
                      checked={selected.length === options.length}
                      onCheckedChange={handleSelectAll}
                      className="w-[18px] h-[18px] rounded-sm border-[1.5px] border-[#B8B8C0] data-[state=checked]:bg-[#005487] data-[state=checked]:border-[#005487]"
                    />
                  </div>
                  <span className="text-[#777786] font-normal text-base leading-5">
                    All {label.toLowerCase()}s
                  </span>
                </div>
              </div>

              {/* Individual options */}
              {options.map((option) => {
                const isSelected = selected.includes(option.value);

                return (
                  <div
                    key={option.value}
                    className="flex items-center h-10 px-3 rounded-lg cursor-pointer hover:bg-[#ECF7FB]"
                    onClick={() => handleToggle(option.value)}
                  >
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <Checkbox
                          checked={isSelected}
                          className="w-[18px] h-[18px] rounded-sm border-[1.5px] border-[#B8B8C0] data-[state=checked]:bg-[#005487] data-[state=checked]:border-[#005487]"
                        />
                      </div>
                      <span className="text-[#30394A] font-normal text-base leading-5">
                        {option.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
