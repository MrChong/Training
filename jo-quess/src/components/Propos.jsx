import profilPicture from "../assets/profilPicture.jpg";

const Propos = () => {
  return (
    <div className="mt-4 flex justify-around items-center px-28 py-10">
      <img
        src={profilPicture}
        alt="Profile Picture can't load"
        className="h-72 rounded-lg"
      />
      <div className="text-left font-medium font-mate grid content-around h-72 w-2/5">
        <div className="">
          <h1 className="text-3xl">Josianne Quessy D.O.</h1>
          <h2 className="text-xl">Ostéopathe & Massothérapeuthe</h2>
        </div>
        <p className="text-l">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          molestie purus sit amet eros porta, sed suscipit purus laoreet.
          Quisque vitae feugiat ex. In feugiat, urna non viverra hendrerit, leo
          nunc convallis leo, id bibendum justo risus sed dolor. Proin ut
          facilisis libero. Quisque nec tellus non lectus tincidunt gravidaProin
          malesuada, ex ut luctus pellentesque, erat dui lacinia tortor, eu
          imperdiet nisl lacus nec nulla. Pellentesque et aliquam nisi
        </p>
      </div>
    </div>
  );
};

export default Propos;
