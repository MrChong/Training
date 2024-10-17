import Service from "./Service"

const ServiceList = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center mt-8 md:mt-20 font-mate">
        <Service serviceName="Ostéopathie"/>
        <Service serviceName="Massothérapie"/>
        <Service serviceName="Hypnose"/>
    </div>
  )
}

export default ServiceList