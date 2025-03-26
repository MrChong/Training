import React from "react";
import Question from "./Question";
import QnA from "../assets/QAList.json";

const QuestionList = () => {

  return <div className="flex flex-col justify-evenly font-mate py-4 bg-[#495D49]/95 text-[#F5F5F5]/90">
    {QnA.QnAListing.map((qna) => (
      <Question key={qna.id} faq={qna}/>
    ))}
  </div>;
};

export default QuestionList;
