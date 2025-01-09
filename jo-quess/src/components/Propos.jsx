import profilPicture from "../assets/profilPicture.jpg";

const Propos = () => {
  return (
    <div className="bg-[#f5f5f5]/70">
      <div className="flex flex-col md:flex-row justify-evenly items-center md:my-16 md:mx-8 lg:mx-12">
        <img
          src={profilPicture}
          alt="Profile Picture can't load"
          className="w-full sm:w-auto sm:h-72 lg:h-96 sm:rounded-3xl aspect-auto"
        />
        <div className="text-left font-medium font-mate grid content-around p-8">
          <h1 className="text-3xl">Josianne Quessy D.O.</h1>
          <h2 className="text-xl">Ostéopathe & Massothérapeuthe</h2>
          <p className="pt-8 text-xl lg:max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            molestie purus sit amet eros porta, sed suscipit purus laoreet.
            Quisque vitae feugiat ex. In feugiat, urna non viverra hendrerit,
            leo nunc convallis leo, id bibendum justo risus sed dolor. Proin ut
            facilisis libero.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Propos;
