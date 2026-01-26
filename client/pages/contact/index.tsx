import { MainLayout } from "@/components/MainLayout";
import SupportSection from "./SupportSection";
import LocationsSection from "./LocationsSection";
import GetInTouchSection from "./GetInTouchSection";

// Page Data
const PAGE_DATA = {
  title: "Contact us",
  subtitle: "We're here to help.",
  version: "Version 172.22",
};

export default function Contact() {
  return (
    <MainLayout>
      <div className="px-4 md:px-10 py-6">
        {/* Title */}
        <div className="mb-10">
          <h1 className="text-[#30394A] text-5xl font-normal mb-1">
            {PAGE_DATA.title}
          </h1>
          <p className="text-[#30394A] text-base">{PAGE_DATA.subtitle}</p>
        </div>

        {/* Content Wrapper */}
        <div className="flex gap-8 h-[736px]">
          {/* Left Column - Support and Locations */}
          <div className="flex-1 flex flex-col gap-8">
            <SupportSection />
            <LocationsSection />
          </div>

          {/* Get in touch Section */}
          <GetInTouchSection />
        </div>

        {/* Version */}
        <div className="mt-6">
          <p className="text-[#777786] text-base">{PAGE_DATA.version}</p>
        </div>
      </div>
    </MainLayout>
  );
}
