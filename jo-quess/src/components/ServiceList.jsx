import Service from "./Service";

const ServiceList = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center h-full bg-[#495D49]/95 my-36 font-mate text-[#F5F5F5]/90">
      <Service
        serviceName="Ostéopathie"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie purus sit amet eros porta, sed suscipit purus laoreet. Quisque vitae feugiat ex. In feugiat, urna non viverra hendrerit, leo nunc convallis leo, id bibendum justo risus sed dolor. Proin ut facilisis libero"
      />
      <Service
        serviceName="Hypnose"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie purus sit amet eros porta, sed suscipit purus laoreet. Quisque vitae feugiat ex. In feugiat, urna non viverra hendrerit, leo nunc convallis leo, id bibendum justo risus sed dolor. Proin ut facilisis libero"
      />
    </div>
  );
};

export default ServiceList;
