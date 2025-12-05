import React from "react";
import locationIcon from "../../assets/icon/location.svg";

export default function SearchPlace() {
  return (
    <div className="flex">
      <form action="">
        <input type="text" placeholder="Search for places..."></input>
        <button>
          <img src={locationIcon} alt="loc" className="w-6 h-6 bg-gray-200 rounded-full" />
        </button>
      </form>
    </div>
  );
}
