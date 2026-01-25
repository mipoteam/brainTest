import { Link, useLocation } from "react-router-dom";
import {
  BarChart3,
  Users,
  FileText,
  Settings,
  Phone,
  LayoutDashboard,
} from "lucide-react";

interface NavItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    name: "Dashboard",
    path: "/",
    icon: <LayoutDashboard className="w-5 h-5" />,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: <BarChart3 className="w-5 h-5" />,
  },
  {
    name: "Patients",
    path: "/patients",
    icon: <Users className="w-5 h-5" />,
  },
  {
    name: "Protocols",
    path: "/protocols",
    icon: <FileText className="w-5 h-5" />,
  },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="fixed left-0 top-0 h-full w-[200px] bg-brand-blue flex flex-col z-20">
      {/* Logo */}
      <div className="flex items-center justify-center h-[118px] px-6 pt-7">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/4d49bf6c96b29f98aef22d90285689ba2bdc083f?width=208"
          alt="BrainWay Logo"
          className="w-[104px] h-auto"
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-6 pt-16">
        <div className="flex flex-col gap-10">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg transition-colors ${
                  isActive ? "bg-white/[0.14]" : "hover:bg-white/[0.08]"
                }`}
              >
                <div className="text-white">{item.icon}</div>
                <span className="text-white text-base font-normal tracking-[0.32px]">
                  {item.name}
                </span>
              </Link>
            );
          })}

          {/* Divider */}
          <div className="h-px bg-white/30 -mx-3"></div>

          {/* Settings */}
          <Link
            to="/settings"
            className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-white/[0.08] transition-colors"
          >
            <Settings className="w-5 h-5 text-white" />
            <span className="text-white text-base font-normal tracking-[0.32px]">
              Setting
            </span>
          </Link>
        </div>
      </nav>

      {/* Contact Us - Bottom */}
      <div className="px-6 pb-12">
        <Link
          to="/contact"
          className="flex items-center gap-2.5 px-3 py-2 hover:bg-white/[0.08] rounded-lg transition-colors"
        >
          <Phone className="w-5 h-5 text-white" />
          <span className="text-white text-base font-normal tracking-[0.32px]">
            Contact us
          </span>
        </Link>
      </div>
    </div>
  );
}
