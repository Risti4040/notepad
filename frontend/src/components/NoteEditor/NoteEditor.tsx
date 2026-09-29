function NoteEditor({ isSidebarOpen }: { isSidebarOpen: boolean }) {
  return (
    <div
      className={`mt-12 selection:bg-violet-200 selection:text-violet-800 transition-all duration-300 ${isSidebarOpen ? "md:ml-75" : "md:ml-0"}`}
    >
      <div className="p-4 flex flex-col">
        <textarea
          className="w-full text-3xl font-semibold border-none outline-none resize-none field-sizing-content"
          placeholder="Untitled"
        ></textarea>
        <div className="my-2 text-sm text-gray-500 border-b border-gray-300">
          <div>Last Modified:</div>
          <div>Created at:</div>
        </div>
        <textarea
          placeholder="Start writing..."
          className="min-h-0 field-sizing-content border-none outline-none resize-none text-lg"
        ></textarea>
      </div>
    </div>
  );
}

export default NoteEditor;
