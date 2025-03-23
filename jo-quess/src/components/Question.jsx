import React from "react";
import { useState } from "react";
import { VscAdd,VscChromeMinimize } from "react-icons/vsc";


const Question = ({faq}) => {
  const [showAnswer,setShowAnswer] = useState(false);
  
  return <div className="mx-3">
    <button className="flex flex-row w-full justify-between" onClick={() => setShowAnswer((prevState)=>!prevState)}>
      <span>
        {faq.question}
      </span>
    <VscAdd fontSize="30px" fontWeight="bold" />
    </button>
    </div>;
};

export default Question;
