"use client";

import Profile from "./profile";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 border-b px-4 shrink-0">
        
            <div className="flex-none lg:hidden">
              <label
                htmlFor="dashboard-drawer"
                className="btn btn-square btn-ghost"
              >
                ☰
              </label>
            </div>
      
      <div className="flex-1">
        <h1 className="text-lg font-semibold">
          AI Interview Platform
        </h1>
      </div>
   
      <div className="flex-none gap-2 flex items-center">
        <ThemeToggle />
        <Profile/>
      </div>
    </div>
  );
}
