import React from "react";
import locationIcon from "../../assets/icon/location.svg";

export default function SearchPlace() {
  return (
    <div className="mt-4 w-full flex justify-center">
      <form className="flex items-center justify-center gap-2 w-3/4 max-w-56" action="">
        <input type="text" placeholder="Search for places..." className="bg-transparent w-3/4"></input>
        <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
          <img src={locationIcon} alt="loc" className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
