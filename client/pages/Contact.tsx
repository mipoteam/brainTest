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
            Contact us
          </h1>
          <p className="text-[#30394A] text-base">We're here to help.</p>
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
                    SUPPORT
                  </p>
                  <h2 className="text-[#30394A] text-2xl font-normal">
                    Get help using BrainsWay
                  </h2>
                </div>
              </div>

              {/* Support Items */}
              <div className="flex gap-[72px] pl-[86px]">
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#30394A] text-xl font-bold leading-7">
                    General Inquiries & Sales
                  </h3>
                  <a
                    href="mailto:DeepTMS@brainsway.com"
                    className="text-[#005487] text-xl leading-7 hover:underline"
                  >
                    DeepTMS@brainsway.com
                  </a>
                  <p className="text-[#30394A] text-xl leading-7">
                    Tel: 844-386-7001 ext 2
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-[#30394A] text-xl font-bold leading-7">
                    Service/Maintenance
                  </h3>
                  <a
                    href="mailto:service@brainsway.com"
                    className="text-[#005487] text-xl leading-7 hover:underline"
                  >
                    service@brainsway.com
                  </a>
                  <p className="text-[#30394A] text-xl leading-7">
                    Tel: 844-386-7001 ext 3
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-[#30394A] text-xl font-bold leading-7">
                    Reimbursement Support (U.S.)
                  </h3>
                  <a
                    href="mailto:reimbursement@brainsway.com"
                    className="text-[#005487] text-xl leading-7 hover:underline"
                  >
                    reimbursement@brainsway.com
                  </a>
                  <p className="text-[#30394A] text-xl leading-7">
                    Tel: 844-386-7001 ext 4
                  </p>
                </div>
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
                    LOCATIONS
                  </p>
                  <h2 className="text-[#30394A] text-2xl font-normal mb-2">
                    Learn more about BrainsWay
                  </h2>
                  <a
                    href="https://www.brainsway.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#005487] text-xl leading-7 hover:underline"
                  >
                    www.brainsway.com
                  </a>
                </div>
              </div>

              {/* Location Items */}
              <div className="flex gap-[72px] pl-[86px]">
                <div className="flex flex-col gap-4">
                  <h3 className="text-[#30394A] text-xl font-bold leading-7">
                    U.S. Headquarters
                  </h3>
                  <div className="flex flex-col gap-2">
                    <p className="text-[#30394A] text-xl leading-7">
                      95 Washington Street, Suite 224-323
                    </p>
                    <p className="text-[#30394A] text-xl leading-7">
                      Canton, MA 020
                    </p>
                  </div>
                  <p className="text-[#30394A] text-xl leading-7">
                    Tel: 844-386-7001
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-[#30394A] text-xl font-bold leading-7">
                    International Headquarters
                  </h3>
                  <div className="flex flex-col gap-2">
                    <p className="text-[#30394A] text-xl leading-7">
                      16 Hartum St, Har Hotzvim,
                    </p>
                    <p className="text-[#30394A] text-xl leading-7">
                      Jerusalem 9777516, Israel
                    </p>
                  </div>
                  <p className="text-[#30394A] text-xl leading-7">
                    Tel: +972-2-5824030
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Get in touch Section */}
          <div className="w-[412px] flex-shrink-0 bg-white rounded-lg shadow-[0_0_20px_0_rgba(0,0,0,0.12)] p-8 overflow-y-auto">
            <div className="mb-8">
              <h2 className="text-[#30394A] text-2xl font-normal mb-0.5">
                Get in touch
              </h2>
              <p className="text-[#30394A] text-sm leading-[18px] whitespace-nowrap">
                Help us improve our system by sharing your feedback.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name */}
              <div>
                <label className="text-[#777786] text-sm px-2 block">
                  Name
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
                  Email
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
                <label className="text-[#777786] text-sm px-2 block mb-1.5">
                  Phone number
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
                      <SelectItem value="+1">+1</SelectItem>
                      <SelectItem value="+44">+44</SelectItem>
                      <SelectItem value="+972">+972</SelectItem>
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
                <label className="text-[#777786] text-sm px-2 block mb-1.5">
                  Feedback subject
                </label>
                <Select
                  value={formData.subject}
                  onValueChange={(value) =>
                    setFormData({ ...formData, subject: value })
                  }
                >
                  <SelectTrigger className="h-10 border-[#E1E1E4] rounded-lg text-[#B8B8C0]">
                    <SelectValue placeholder="Select feedback" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bug">Bug Report</SelectItem>
                    <SelectItem value="feature">Feature Request</SelectItem>
                    <SelectItem value="general">General Feedback</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div>
                <label className="text-[#777786] text-sm px-2 block mb-1">
                  Your message
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Add note"
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
                  I would like a BrainsWay representative to contact me
                  regarding this message
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-10 bg-[#005487] hover:bg-[#004070] text-white text-sm font-medium rounded-lg transition-colors mt-2"
              >
                Send message
              </button>
            </form>
          </div>
        </div>

        {/* Version */}
        <div className="mt-6">
          <p className="text-[#777786] text-base">Version 172.22</p>
        </div>
      </div>
    </MainLayout>
  );
}
