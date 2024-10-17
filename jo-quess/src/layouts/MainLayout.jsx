import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="mt-24 bg-[#F2F2F2]">
        <Outlet />
      </main>
    </>
  );
};
export default MainLayout;
