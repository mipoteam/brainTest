import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { MainLayout } from "@/components/MainLayout";
import { AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center">
        <div className="text-center max-w-md px-6">
          <AlertCircle className="w-16 h-16 text-brand-blue mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-brand-text-primary mb-4">
            404
          </h1>
          <p className="text-xl text-brand-gray-600 mb-4">
            Oops! Page not found
          </p>
          <Link
            to="/"
            className="inline-block text-brand-blue hover:text-brand-blue/80 underline"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
