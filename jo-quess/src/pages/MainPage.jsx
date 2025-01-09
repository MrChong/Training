import Propos from "../components/Propos";
import ServiceList from "../components/ServiceList";
import Intro from "../components/Intro";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <div className="flex flex-col">
      <Intro/>
      <Propos />
      <ServiceList />
      <Footer />
    </div>
  );
};

export default MainPage;
