import React from "react";
import Question from "./Question";
import QnA from "../assets/QAList.json";

const QuestionList = () => {

  return <div className="flex flex-col justify-evenly h-full bg-[#495D49]/95 md:my-16">
    {QnA.QnAListing.map((qna) => (
      <Question key={qna.id} faq={qna}/>
    ))}
  </div>;
};

export default QuestionList;
