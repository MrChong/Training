import React from "react";

const Service = ({ serviceName, description }) => {
  return (
    <div className="flex flex-col py-8 px-8 lg:max-w-xl">
      <h1 className="text-3xl">{serviceName}</h1>
      <p className="text-xl pt-6">{description}</p>
    </div>
  );
};

export default Service;
