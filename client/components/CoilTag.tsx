import { CoilType } from "@/services/protocolsService";

interface CoilTagProps {
  type: CoilType;
}

export function CoilTag({ type }: CoilTagProps) {
  const bgColor = type === "H1" ? "bg-[#88D3EE]" : "bg-[#6FD44B]";

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
