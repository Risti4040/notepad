import { Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import NotePage from "./pages/NotePage";
import useAuthReq from "./hooks/useAuthreq";
import useSyncUser from "./hooks/useSyncUser";

function App() {
  const { isClerkLoaded, isSignedIn } = useAuthReq();
  useSyncUser();
  if (!isClerkLoaded) {
    return;
  }
  return (
    <div className="min-h-screen bg-base-100 ">
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/notes" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/notes" element={<NotePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
