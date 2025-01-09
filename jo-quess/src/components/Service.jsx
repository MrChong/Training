import React from "react";

const Service = ({ serviceName, description }) => {
  return (
    <div className="flex flex-col my-16 lg:max-w-xl">
      <h1 className="text-3xl">{serviceName}</h1>
      <p className="text-xl pt-8">{description}</p>
    </div>
  );
};

export default Service;
