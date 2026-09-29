import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import NoteEditor from "../components/NoteEditor/NoteEditor";

function NotePage() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isSidebarOpen, setIsSidebarOpen] = useState(
    width < 768 ? false : true,
  );

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    if (width < 768) {
      setIsSidebarOpen(false);
    }
    if (width >= 768) {
      setIsSidebarOpen(true);
    }
  }, [width < 768]);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-col min-h-screen">
        <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <NoteEditor isSidebarOpen={isSidebarOpen} />
      </div>
    </>
  );
}

export default NotePage;
