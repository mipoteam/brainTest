import { useState } from "react";
import { MainLayout } from "@/components/MainLayout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Page Data
const PAGE_DATA = {
  title: "Contact us",
  subtitle: "We're here to help.",
  version: "Version 172.22",
};

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

// Get in Touch Section Data
const GET_IN_TOUCH_SECTION = {
  title: "Get in touch",
  subtitle: "Help us improve our system by sharing your feedback.",
  submitButtonText: "Send message",
};

// Form Fields Data
const FORM_FIELDS = {
  phoneCountries: [
    { code: "+1", label: "+1" },
    { code: "+44", label: "+44" },
    { code: "+972", label: "+972" },
  ],
  feedbackSubjects: [
    { value: "bug", label: "Bug Report" },
    { value: "feature", label: "Feature Request" },
    { value: "general", label: "General Feedback" },
  ],
  labels: {
    name: "Name",
    email: "Email",
    phoneNumber: "Phone number",
    feedbackSubject: "Feedback subject",
    message: "Your message",
    checkboxLabel:
      "I would like a BrainsWay representative to contact me regarding this message",
  },
  placeholders: {
    feedbackSubject: "Select feedback",
    message: "Add note",
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneCode: "+1",
    phone: "",
    subject: "",
    message: "",
    requestContact: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

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
            {/* Support Section */}
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

            {/* Locations Section */}
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
                        <p
                          key={lineIndex}
                          className="text-[#30394A] text-xl leading-7"
                        >
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
          </div>

          {/* Get in touch Section */}
          <div className="w-[412px] flex-shrink-0 bg-white rounded-lg shadow-[0_0_20px_0_rgba(0,0,0,0.12)] p-8 overflow-y-auto">
            <div className="mb-8">
              <h2 className="text-[#30394A] text-2xl font-normal mb-0.5">
                {GET_IN_TOUCH_SECTION.title}
              </h2>
              <p className="text-[#30394A] text-sm leading-[18px] whitespace-nowrap">
                {GET_IN_TOUCH_SECTION.subtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name */}
              <div>
                <label className="text-[#777786] text-sm px-2 block">
                  {FORM_FIELDS.labels.name}
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="h-10 border-[#E1E1E4] rounded-lg"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-[#777786] text-sm px-2 block">
                  {FORM_FIELDS.labels.email}
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="h-10 border-[#E1E1E4] rounded-lg"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-[#777786] text-sm px-2 block">
                  {FORM_FIELDS.labels.phoneNumber}
                </label>
                <div className="flex gap-1.5">
                  <Select
                    value={formData.phoneCode}
                    onValueChange={(value) =>
                      setFormData({ ...formData, phoneCode: value })
                    }
                  >
                    <SelectTrigger className="w-[84px] h-10 border-[#E1E1E4] rounded-lg">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {FORM_FIELDS.phoneCountries.map((country) => (
                        <SelectItem key={country.code} value={country.code}>
                          {country.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="flex-1 h-10 border-[#E1E1E4] rounded-lg"
                  />
                </div>
              </div>

              {/* Feedback Subject */}
              <div>
                <label className="text-[#777786] text-sm px-2 block">
                  {FORM_FIELDS.labels.feedbackSubject}
                </label>
                <Select
                  value={formData.subject}
                  onValueChange={(value) =>
                    setFormData({ ...formData, subject: value })
                  }
                >
                  <SelectTrigger className="h-10 border-[#E1E1E4] rounded-lg text-[#B8B8C0]">
                    <SelectValue
                      placeholder={FORM_FIELDS.placeholders.feedbackSubject}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {FORM_FIELDS.feedbackSubjects.map((subject) => (
                      <SelectItem key={subject.value} value={subject.value}>
                        {subject.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div>
                <label className="text-[#777786] text-sm px-2 block">
                  {FORM_FIELDS.labels.message}
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder={FORM_FIELDS.placeholders.message}
                  className="min-h-[124px] border-[#E1E1E4] rounded-lg placeholder:text-[#B8B8C0]"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-1.5">
                <input
                  type="checkbox"
                  id="contact-checkbox"
                  checked={formData.requestContact}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      requestContact: e.target.checked,
                    })
                  }
                  className="w-6 h-6 rounded border-[1.5px] border-[#B8B8C0] mt-0.5"
                />
                <label
                  htmlFor="contact-checkbox"
                  className="text-[#777786] text-base leading-5 cursor-pointer"
                >
                  {FORM_FIELDS.labels.checkboxLabel}
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-10 bg-[#005487] hover:bg-[#004070] text-white text-sm font-medium rounded-lg transition-colors mt-2"
              >
                {GET_IN_TOUCH_SECTION.submitButtonText}
              </button>
            </form>
          </div>
        </div>

        {/* Version */}
        <div className="mt-6">
          <p className="text-[#777786] text-base">{PAGE_DATA.version}</p>
        </div>
      </div>
    </MainLayout>
  );
}
