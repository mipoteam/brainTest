// Locations Section Data
const LOCATIONS_SECTION = {
  label: "LOCATIONS",
  title: "Learn more about BrainsWay",
  website: "www.brainsway.com",
  websiteUrl: "https://www.brainsway.com",
  items: [
    {
      name: "U.S. Headquarters",
      address: ["95 Washington Street, Suite 224-323", "Canton, MA 020"],
      phone: "844-386-7001",
    },
    {
      name: "International Headquarters",
      address: ["16 Hartum St, Har Hotzvim,", "Jerusalem 9777516, Israel"],
      phone: "+972-2-5824030",
    },
  ],
};

export default function LocationsSection() {
  return (
    <div className="flex-1 bg-white rounded-lg shadow-[0_0_20px_0_rgba(0,0,0,0.12)] p-8 overflow-y-auto">
      <div className="flex items-start gap-8 mb-8">
        {/* Icon */}
        <div className="w-[52px] h-[52px] bg-[#DBEDF7] rounded-lg flex items-center justify-center flex-shrink-0">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0L16 1.39876e-06"
              stroke="#005487"
              strokeWidth="2"
              strokeLinecap="round"
              transform="translate(8, 29)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.5243 23.5977C12.5828 22.3146 20 17.1932 20 10.0095C20 4.4814 15.5228 0 10 0C4.47717 0 0 4.4814 0 10.0095C0 17.1932 7.41717 22.3146 9.47572 23.5977C9.80161 23.8008 10.1984 23.8008 10.5243 23.5977ZM9.99989 12.5C11.3806 12.5 12.4999 11.3807 12.4999 9.99999C12.4999 8.61928 11.3806 7.49999 9.99989 7.49999C8.61918 7.49999 7.49989 8.61928 7.49989 9.99999C7.49989 11.3807 8.61918 12.5 9.99989 12.5Z"
              fill="white"
              stroke="#005487"
              strokeWidth="2"
              transform="translate(6, 2)"
            />
          </svg>
        </div>

        {/* Title */}
        <div>
          <p className="text-[#777786] text-sm font-medium tracking-[1.4px] uppercase mb-2">
            {LOCATIONS_SECTION.label}
          </p>
          <h2 className="text-[#30394A] text-2xl font-normal mb-2">
            {LOCATIONS_SECTION.title}
          </h2>
          <a
            href={LOCATIONS_SECTION.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#005487] text-xl leading-7 hover:underline"
          >
            {LOCATIONS_SECTION.website}
          </a>
        </div>
      </div>

      {/* Location Items */}
      <div className="flex gap-[72px] pl-[86px]">
        {LOCATIONS_SECTION.items.map((location, index) => (
          <div key={index} className="flex flex-col gap-4">
            <h3 className="text-[#30394A] text-xl font-bold leading-7">
              {location.name}
            </h3>
            <div className="flex flex-col gap-2">
              {location.address.map((line, lineIndex) => (
                <p key={lineIndex} className="text-[#30394A] text-xl leading-7">
                  {line}
                </p>
              ))}
            </div>
            <p className="text-[#30394A] text-xl leading-7">
              Tel: {location.phone}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
