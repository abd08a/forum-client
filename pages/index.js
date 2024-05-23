import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { links } from "../constants/links";
import axios from "axios";
import cookies from "js-cookie";
import CardsWrapper from "../components/CardsWrapper/CardsWrapper";

const Index = () => {
  const [questions, setQuestions] = useState(null);
  const fetchQuestions = async () => {
    try {
      const headers = {
        authorization: cookies.get("jwt_token"),
      };

      const response = await axios.get(`${process.env.SERVER_URL}/questions`, {
        headers,
      });

      setQuestions(response.data.questions);

      console.log(response);
    } catch (err) {
      console.log("err", err);

      // @ts-expect-error
      if (err.response.status === 401) {
        router.push("/login");
      }
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);
  return (
    <div>
      <Header logo={"Q&A"} links={links} />
      {questions && <CardsWrapper questions={questions} />}
    </div>
  );
};

export default Index;
