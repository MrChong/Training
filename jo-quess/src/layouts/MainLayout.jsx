import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import bgPicture from "../assets/background.jpg";

const MainLayout = () => {

  return (
    <>
      <Navbar />
      <main
        className="relative h-full min-h-screen mt-[6rem] overflow-hidden"
      >
        {/* Blurred Background Layer */}
        <div className="absolute inset-0 bg-cover bg-fixed bg-no-repeat bg-left-top blur-[6px] opacity-99 z-[-1]" 
          style={{ backgroundImage: `url(${bgPicture})` }}>
        </div>
        <Outlet />
      </main>
    </>
  );
};
export default MainLayout;
