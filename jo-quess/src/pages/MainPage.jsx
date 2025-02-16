import Propos from "../components/Propos";
import ServiceList from "../components/ServiceList";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import QuestionList from "../components/QuestionList";

const MainPage = () => {
  return (
    <div className="flex flex-col">
      <Intro/>
      <Propos />
      <ServiceList />
      <QuestionList/>
      <Footer />
    </div>
  );
};

export default MainPage;
