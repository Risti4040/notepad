import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";
import { NotebookPen } from "lucide-react";

interface NavbarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

function Navbar({ isSidebarOpen, toggleSidebar }: NavbarProps) {
  return (
    <header
      className={`shadow-md bg-transparent fixed top-0 right-0 h-12 transition-all duration-300 
        ${isSidebarOpen ? "md:left-75 left-0" : "left-0"} 
        `}
    >
      <div className="h-full flex items-center justify-between bbg-base-300">
        <div className="flex items-center">
          {!isSidebarOpen && (
            <button
              onClick={toggleSidebar}
              className="text-xl h-full p-1 rounded-lg text-left hover:bg-gray-300 ml-2"
            >
              <NotebookPen />
            </button>
          )}
          <div className="ml-2 text-xl">Navbar</div>
        </div>
        <div className="mr-4">
          <Show when="signed-out">
            <SignInButton mode="modal" />
            <SignUpButton mode="modal" />
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
