import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F7F8FC]">
      <Sidebar />
      <TopBar />
      <main className="ml-[200px] pt-14">{children}</main>
    </div>
  );
}
