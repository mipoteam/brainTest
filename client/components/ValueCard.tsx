import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface ValueCardProps {
  value: number;
  unit: string;
  label: string;
  onIncrement: () => void;
  onDecrement: () => void;
  showControls?: boolean;
  className?: string;
}

export function ValueCard({
  value,
  unit,
  label,
  onIncrement,
  onDecrement,
  showControls = true,
  className,
}: ValueCardProps) {
  return (
    <div
      className={cn(
        "flex items-center border border-[#C7CDD5] bg-white rounded",
        className,
      )}
    >
      <div className="flex-1 flex flex-col p-2 px-3 pr-0 gap-0.5">
        <div className="flex items-end gap-0.5">
          <span className="text-[34px] font-normal leading-[42px] text-[#005487]">
            {typeof value === 'number' && value % 1 !== 0 ? value.toFixed(1) : value}
          </span>
          <span className="text-sm font-normal leading-[18px] text-[#005487] pb-1.5">
            {unit}
          </span>
        </div>
        <span className="text-base font-normal leading-5 text-[#005487]">
          {label}
        </span>
      </div>
      {showControls && (
        <div className="flex flex-col pr-1 gap-0">
          <button
            type="button"
            onClick={onIncrement}
            className="w-6 h-6 flex items-center justify-center hover:bg-gray-50 rounded transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2.5"
                y="2.5"
                width="19"
                height="19"
                rx="3.5"
                stroke="#005487"
              />
              <path d="M12 16L12 8" stroke="#005487" strokeLinecap="square" />
              <path d="M8 12H16" stroke="#005487" strokeLinecap="square" />
            </svg>
          </button>
          <button
            type="button"
            onClick={onDecrement}
            className="w-6 h-6 flex items-center justify-center hover:bg-gray-50 rounded transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2.5"
                y="2.5"
                width="19"
                height="19"
                rx="3.5"
                stroke="#005487"
              />
              <path d="M8 12H16" stroke="#005487" strokeLinecap="square" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
