import React from "react";
import { Link } from "react-router";
import { PanelLeft, Search, House, SquarePen } from "lucide-react";
import { useUserNotes } from "../hooks/useNotes";
import LoadingSpinner from "./LoadingSpinner";

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

function Sidebar({ isSidebarOpen, toggleSidebar }: SidebarProps) {
  const { data: notes, isLoading } = useUserNotes();

  return (
    <div className={`${isSidebarOpen ? "md:bg-black" : ""}`}>
      <aside
        className={`fixed top-0 min-h-screen transition-all z-10 border-gray-300 duration-300 ease-in-out overflow-hidden bg-violet-200 ${isSidebarOpen ? "w-75 border-r" : "w-0"}`}
      >
        <div id="sidebar panel" className="w-75 flex flex-col">
          <div
            id="header"
            className="p-2 h-12 flex items-center justify-between"
          >
            <div className="text-2xl">Sidebar</div>
            <div className="flex items-center gap-4">
              <button className="text-xl p-1 rounded-lg text-left hover:bg-[#c0bbdb]">
                <Search />
              </button>
              <button
                onClick={toggleSidebar}
                className="text-xl p-1 rounded-lg text-left hover:bg-[#c0bbdb]"
              >
                <PanelLeft />
              </button>
            </div>
          </div>

          <div className="w-full p-2 flex flex-col gap-2 border-y border-[#c0bbdb]">
            <Link
              to="/home"
              className="flex gap-2 text-[18px] p-1 rounded-lg text-left hover:bg-[#c0bbdb]"
            >
              <House />
              Home
            </Link>
            <div className="flex gap-2 text-[18px] p-1 rounded-lg text-left hover:bg-[#c0bbdb]">
              <SquarePen />
              Create New
            </div>
          </div>
          <div className="p-2">
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <>
                <div>Recent Notes:</div>
              </>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
