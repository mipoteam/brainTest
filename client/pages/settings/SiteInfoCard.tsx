import { Phone, Mail, MapPin, Globe } from "lucide-react";
import { SiteInfo } from "@/data/settingsData";

interface SiteInfoCardProps {
  site: SiteInfo;
}

export function SiteInfoCard({ site }: SiteInfoCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-[0_0_20px_0_rgba(0,0,0,0.08)]">
      {/* Site name + ID */}
      <div className="flex items-center gap-3 mb-4">
        <h2 className="text-[#101128] text-xl font-bold leading-[26px]">
          {site.name}
        </h2>
        <div className="flex items-center gap-1.5">
          <span className="text-[#777786] text-sm font-normal">Site ID</span>
          <span className="text-[#101128] text-sm font-bold">{site.siteId}</span>
        </div>
      </div>

      {/* Contact row */}
      <div className="flex items-center gap-8 mb-2">
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-[#777786] shrink-0" />
          <span className="text-[#30394A] text-sm font-normal">{site.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-[#777786] shrink-0" />
          <span className="text-[#30394A] text-sm font-normal">{site.email}</span>
        </div>
      </div>

      {/* Address row */}
      <div className="flex items-center gap-2 mb-2">
        <MapPin className="w-4 h-4 text-[#777786] shrink-0" />
        <span className="text-[#30394A] text-sm font-normal">{site.address}</span>
      </div>

      {/* Website row */}
      <div className="flex items-center gap-2">
        <Globe className="w-4 h-4 text-[#777786] shrink-0" />
        <span className="text-[#30394A] text-sm font-normal">{site.website}</span>
      </div>
    </div>
  );
}
