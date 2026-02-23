// Support Section Data
const SUPPORT_SECTION = {
  label: "SUPPORT",
  title: "Get help using BrainsWay",
  items: [
    {
      name: "General Inquiries & Sales",
      email: "DeepTMS@brainsway.com",
      phone: "844-386-7001 ext 2",
    },
    {
      name: "Service/Maintenance",
      email: "service@brainsway.com",
      phone: "844-386-7001 ext 3",
    },
    {
      name: "Reimbursement Support (U.S.)",
      email: "reimbursement@brainsway.com",
      phone: "844-386-7001 ext 4",
    },
  ],
};

export default function SupportSection() {
  return (
    <div className="bg-white rounded-lg shadow-[0_0_20px_0_rgba(0,0,0,0.12)] p-8 overflow-y-auto">
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
              d="M1 17V29"
              stroke="#005487"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M9.35 20H1V27H24V25.5C24 24.3954 23.1046 23.5 22 23.5H11.35V22C11.35 20.8954 10.4546 20 9.35 20Z"
              fill="#DAEFF8"
            />
            <path
              d="M7.325 23.5H11.35M11.35 23.5H22C23.1046 23.5 24 24.3954 24 25.5V27H1V20H9.35C10.4546 20 11.35 20.8954 11.35 22V23.5Z"
              stroke="#005487"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M28.3332 4H14.7142C14.0304 4 13.4761 4.51167 13.4761 5.14286V14.8571C13.4761 15.4883 14.0304 16 14.7142 16H28.3332C29.017 16 29.5713 15.4883 29.5713 14.8571V5.14286C29.5713 4.51167 29.017 4 28.3332 4Z"
              fill="white"
              stroke="#005487"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.4759 4L20.7867 9.29325C20.9802 9.4517 21.2241 9.53846 21.4759 9.53846C21.7278 9.53846 21.9716 9.4517 22.1652 9.29325L28.4759 4"
              fill="#DBEDF7"
              stroke="#005487"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Title */}
        <div>
          <p className="text-[#777786] text-sm font-medium tracking-[1.4px] uppercase mb-2">
            {SUPPORT_SECTION.label}
          </p>
          <h2 className="text-[#30394A] text-2xl font-normal">
            {SUPPORT_SECTION.title}
          </h2>
        </div>
      </div>

      {/* Support Items */}
      <div className="flex gap-[72px] pl-[86px]">
        {SUPPORT_SECTION.items.map((item, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h3 className="text-[#30394A] text-xl font-bold leading-7">
              {item.name}
            </h3>
            <a
              href={`mailto:${item.email}`}
              className="text-[#005487] text-xl leading-7 hover:underline"
            >
              {item.email}
            </a>
            <p className="text-[#30394A] text-xl leading-7">
              Tel: {item.phone}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
