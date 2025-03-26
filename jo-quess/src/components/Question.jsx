import React from "react";
import { useState } from "react";
import { VscAdd, VscChromeMinimize } from "react-icons/vsc";


const Question = ({ faq }) => {
  const [showAnswer, setShowAnswer] = useState(true);

  return <div className="h-full px-5 py-2">
  <button
    className="flex flex-col w-full text-xl items-start text-left" // Change to flex-col and alignItems: start
    onClick={() => setShowAnswer((prevState) => !prevState)}
  >
    <div className="flex flex-row w-full justify-between">
      <span className="text-xl">
        {faq.question}
      </span>
      {showAnswer ? (
        <VscChromeMinimize fontSize="28px" fontWeight="bold" />
      ) : (
        <VscAdd fontSize="28px" fontWeight="bold" />
      )}
    </div>
    {showAnswer && (
      <span className="mt-5 mb-2 mx-6 text-lg text-left"> {/* Added mt-2 for margin-top */}
        {faq.answer}
      </span>
    )}
  </button>
</div>
};

export default Question;
