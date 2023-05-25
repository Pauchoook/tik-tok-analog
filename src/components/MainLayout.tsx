import { Navbar } from "@/modules/Navbar";
import { Sidebar } from "@/modules/Sidebar";
import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="xl:w-[1200px] m-auto overflow-hidden h-screen">
      <Navbar />
      <div className="flex gap-6 md:gap-20 h-[calc(100vh-58px)] md:h-[calc(100vh-82px)] overflow-hidden">
        <div className="h-full overflow-auto">
          <Sidebar />
        </div>
        <div className="flex flex-col gap-10 overflow-auto h-full videos flex-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
