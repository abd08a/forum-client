import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { links } from "../../constants/links";
import QuestionWrapper from "../../components/QuestionWrapper/QuestionWrapper";
import cookies from "js-cookie";
import { useRouter } from "next/router";
import axios from "axios";

const Question = () => {
  const [question, setQuestion] = useState();
  const router = useRouter();

  const fetchQuestion = async () => {
    try {
      const headers = {
        authorization: cookies.get("jwt_token"),
      };

      const response = await axios.get(
        `${process.env.SERVER_URL}/questions/${router.query.id}`,
        {
          headers,
        }
      );

      setQuestion(response.data.question);
    } catch (err) {
      console.log("err", err);

      if (err.response.status === 401) {
        router.push("/login");
      }
    }
  };
  useEffect(() => {
    router.query.id && fetchQuestion();
  }, [router]);

  return (
    <div>
      <Header logo={"Q&A"} links={links} />
      {/* <QuestionWrapper /> */}
    </div>
  );
};

export default Question;
