import { useState } from "react";
import { NotebookPen } from "lucide-react";

interface NavbarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

function Navbar({ isSidebarOpen, toggleSidebar }: NavbarProps) {
  return (
    <header
      className={`fixed top-0 right-0 h-12 transition-all duration-300 
        ${isSidebarOpen ? "left-64" : "left-0"} 
        lg:${isSidebarOpen ? "translate-x-0" : ""} `}
    >
      <div className="h-full flex items-center justify-between bg-base-300">
        <div className="flex">
          {!isSidebarOpen && (
            <button
              onClick={toggleSidebar}
              className="text-xl rounded-lg text-left hover:bg-gray-200"
            >
              <NotebookPen />
            </button>
          )}
          <div className="px-4">Navbar</div>
        </div>
        <div>sds</div>
      </div>
    </header>
  );
}

export default Navbar;
