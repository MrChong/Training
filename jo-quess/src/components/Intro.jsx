import Button from "./Button";

const Intro = () => {
  return (
      <div className="flex flex-col h-full items-center justify-center my-36 mx-4 md:mx-8 lg:mx-12">
        <h1 className="text-[#464646] text-4xl font-bold">
        Lorem ipsum dolor sit amet <br/> consectetur adipiscing elit
        </h1>
        {/*<Button
          text="Contactez-moi"
          style="text-[#F5F5F5]/90 border-2 border-[#be7a0e] font-medium text-lg mt-3"
        />*/}
      </div>
  );
};

export default Intro;

