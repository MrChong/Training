import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import bgPicture from "../assets/background.jpg";

const MainLayout = () => {

  return (
    <>
      <Navbar />
      <main
        style={{
          backgroundImage: `url(${bgPicture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
          marginTop: "6rem",
        }}
        className="h-100%"
      >
        <Outlet />
      </main>
    </>
  );
};
export default MainLayout;
