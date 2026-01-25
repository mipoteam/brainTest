import { MainLayout } from "@/components/MainLayout";
import { FileQuestion } from "lucide-react";

interface PlaceholderProps {
  title: string;
  description?: string;
}

export default function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center">
        <div className="text-center max-w-md px-6">
          <FileQuestion className="w-16 h-16 text-brand-gray-500 mx-auto mb-4" />
          <h1 className="text-2xl font-medium text-brand-text-secondary mb-2">
            {title}
          </h1>
          <p className="text-brand-gray-600 mb-6">
            {description ||
              "This page is coming soon. Continue prompting to help build out this section."}
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
