import React from "react";
import Question from "./Question";
import QnA from "../assets/QAList.json";

const QuestionList = () => {
  return <div className="flex flex-col justify-center md:my-16 md:mx-8 lg:mx-12">
    <Question/>
    <Question/>
    <Question/>
    </div>;
};

export default QuestionList;
