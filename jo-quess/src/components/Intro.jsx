import Button from "./Button";

const Intro = () => {
  return (
      <div className="flex flex-col w-full h-full items-start justify-center my-36 mx-4 md:mx-8 lg:mx-12">
        <h1 className="text-[#252525] text-4xl font-bold max-w-96">
          Quidquid latine dictum sit, altum videtur. Whatever is said in Latin.
        </h1>
        {/*<Button
          text="Contactez-moi"
          style="text-[#F5F5F5]/90 border-2 border-[#be7a0e] font-medium text-lg mt-3"
        />*/}
      </div>
  );
};

export default Intro;
