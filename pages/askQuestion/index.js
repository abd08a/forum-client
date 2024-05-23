import React from "react";
import Header from "../../components/Header/Header";
import { links } from "../../constants/links";
import QuestionForm from "../../components/QuestionForm/QuestionForm";

const index = () => {
  return (
    <div>
      <Header logo={"Q&A"} links={links} />
      <QuestionForm />
    </div>
  );
};

export default index;
