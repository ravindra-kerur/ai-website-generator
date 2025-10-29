import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import AppHeader from "./_components/AppHeader";
import { AppSidebar } from "./_components/AppSideBar";

function WorkspaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
        <AppHeader />
        {children}
      </div>
    </SidebarProvider>
  );
}

export default WorkspaceLayout;
