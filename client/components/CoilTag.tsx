import { CoilType } from "@/services/protocolsService";

// Mapping of coil types to their background colors
const COIL_COLORS: Record<CoilType, string> = {
  H1: "bg-[#88D3EE]", // Light Blue
  H4: "bg-[#6FD44B]", // Green
  H7: "bg-[#FFCE2D]", // Yellow/Gold
  // Add more coil types and colors as needed
};

interface CoilTagProps {
  type: CoilType;
}

export function CoilTag({ type }: CoilTagProps) {
  const bgColor = COIL_COLORS[type] || "bg-[#B8B8C0]"; // Fallback to gray for unknown types

  return (
    <div
      className={`inline-flex h-6 px-1 justify-center items-center rounded-lg ${bgColor}`}
    >
      <span className="text-[#30394A] font-normal text-sm leading-[18px]">
        {type}
      </span>
    </div>
  );
}

interface CoilTagsProps {
  coils: CoilType[];
}

export function CoilTags({ coils }: CoilTagsProps) {
  return (
    <div className="flex items-center gap-1.5">
      {coils.map((coil, index) => (
        <CoilTag key={index} type={coil} />
      ))}
    </div>
  );
}
