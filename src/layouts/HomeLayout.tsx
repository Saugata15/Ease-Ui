import { Outlet } from "react-router";
import Navbar from "../components/Personal/Navbar";

const HomeLayout = () => {
  return (
    <div className="h-screen overflow-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 bg-(--bg-color)">
        <Navbar />
      </header>

      <main className="h-full pt-20 md:pt-16 overflow-y-auto bg-(--bg-color)">
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;