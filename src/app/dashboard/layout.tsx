"use client";

import Navbar from "@/components/layout/navbar";
import Sidebar from "@/components/layout/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen bg-base-200">
      <div className="drawer lg:drawer-open h-full">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />

        
        <div className="drawer-content flex flex-col h-full">
          <Navbar />

          <main className="flex-1 overflow-y-auto bg-base-200">
            <div className="max-w-7xl mx-auto px-4 py-6">
              {children}
            </div>
          </main>
        </div>

        
        <div className="drawer-side h-full">
          <label
            htmlFor="dashboard-drawer"
            className="drawer-overlay"
          ></label>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
