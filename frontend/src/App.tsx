import { useState } from "react";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import NotePage from "./pages/NotePage";

function App() {
  return (
    <div className="min-h-screen bg-base-100 ">
      <main>
        <Routes>
          <Route path="/notes" element={<NotePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
