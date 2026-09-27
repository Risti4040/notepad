import React from "react";
import { Link } from "react-router";
import { PanelLeft, Search } from "lucide-react";

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

function Sidebar({ isSidebarOpen, toggleSidebar }: SidebarProps) {
  return (
    <>
      <aside
        className={`fixed top-0 min-h-screen transition-all duration-300 ease-in-out overflow-hidden bg-fuchsia-400 ${isSidebarOpen ? "w-64" : "w-0"}`}
      >
        <div id="sidebar panel">
          <div
            id="header"
            className="p-2 h-12 bg-violet-300 flex items-center justify-between"
          >
            <Link
              to="/home"
              className={`${isSidebarOpen ? "block" : "hidden"}`}
            >
              Sidebar
            </Link>
            <div className="flex gap-4">
              <Search />
              <button
                onClick={toggleSidebar}
                className="text-xl rounded-lg text-left hover:bg-gray-200"
              >
                <PanelLeft />
              </button>
            </div>
          </div>
          <div>
            <div>dd</div>
            <div>sdsdsdsdssd</div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
