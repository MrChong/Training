import Propos from "../components/Propos";
import ServiceList from "../components/ServiceList";
import Intro from "../components/Intro";

const MainPage = () => {
  return (
    <div>
      <Intro/>
      <Propos />
      <ServiceList />
    </div>
  );
};

export default MainPage;
