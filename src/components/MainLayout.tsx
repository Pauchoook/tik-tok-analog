import { Navbar } from "@/modules/Navbar";
import { Sidebar } from "@/modules/Sidebar";
import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <GoogleOAuthProvider
      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID + ""}
    >
      <Navbar />
      <div className="flex gap-6 md:gap-20">
        <div className="h-[92vh] overflow-auto">
          <Sidebar />
        </div>
        <div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1">
          {children}
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default MainLayout;
