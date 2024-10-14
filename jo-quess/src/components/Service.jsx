import React from "react";

const Service = ({ serviceName, description }) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl">{serviceName}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Service;
