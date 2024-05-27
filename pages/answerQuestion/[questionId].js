import React from "react";
import Header from "../../components/Header/Header";
import { links } from "../../constants/links";
import AnswerForm from "../../components/AnswerForm/AnswerForm";
import { useRouter } from "next/router";

const AnswerQuestion = () => {
  const router = useRouter();
  const { questionId } = router.query;

  console.log("question id:", questionId); // This should log the correct questionId when navigated to a specific question

  return (
    <div>
      <Header logo={"Q&A"} links={links} />
      {questionId ? <AnswerForm questionId={questionId} /> : <p>Loading...</p>}
    </div>
  );
};

export default AnswerQuestion;
