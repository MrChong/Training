import Service from "./Service"

const ServiceList = () => {
  return (
    <div className="flex flex justify-around items-center mt-32 py-10 font-mate">
        <Service serviceName="Ostéopathie"/>
        <Service serviceName="Massothérapie"/>
        <Service serviceName="Hypnose"/>
    </div>
  )
}

export default ServiceList