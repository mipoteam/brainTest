import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

export default function GetInTouchSection() {
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
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
  );
}
