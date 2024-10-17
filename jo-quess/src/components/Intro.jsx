import bgPicture from "../assets/background.jpg";
import Button from "./Button";

const Intro = () => {
  return (
    <div className="relative">
      <img
        src={bgPicture}
        alt="Can't load background image"
        className="flex w-full sm:h-full"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center">
        <h1 className="text-white text-2xl font-bold max-w-96" >
          Quidquid latine dictum sit, altum videtur. Whatever is said in Latin,
          sounds profound.
        </h1>
        <Button
          color="#323F32"
          text="Contactez-moi"
        />
      </div>
    </div>
  );
};

export default Intro;
