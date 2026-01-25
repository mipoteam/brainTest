import { Bell, User } from "lucide-react";

export function TopBar() {
  return (
    <div className="fixed top-0 right-0 left-[200px] h-14 bg-transparent z-10">
      <div className="h-full flex items-center justify-end px-4 md:px-10 gap-4">
        {/* Divider */}
        <div className="h-4 w-px bg-[#979797]"></div>

        {/* Notifications */}
        <button className="relative">
          <Bell className="w-6 h-6 text-brand-text-secondary" />
          <div className="absolute -top-1 -right-1 w-[18px] h-[18px] bg-[#ED1C24] rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold leading-4">5</span>
          </div>
        </button>

        {/* User */}
        <button className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
          <User className="w-5 h-5 text-brand-text-primary" />
        </button>
      </div>
    </div>
  );
}
