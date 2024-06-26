import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { links } from "../constants/links";
import axios from "axios";
import cookies from "js-cookie";
import CardsWrapper from "../components/CardsWrapper/CardsWrapper";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = async () => {
    try {
      const headers = {
        authorization: cookies.get("jwt_token"),
      };

      const response = await axios.get(`${process.env.SERVER_URL}/questions`, {
        headers,
      });

      const fetchedQuestions = response.data.questions;

      // Fetch answers for each question
      const questionsWithAnswers = await Promise.all(
        fetchedQuestions.map(async (question) => {
          const answersResponse = await axios.get(
            `${process.env.SERVER_URL}/question/${question.id}/answers`,
            { headers }
          );
          return { ...question, answers: answersResponse.data.answers };
        })
      );

      setQuestions(questionsWithAnswers);
    } catch (err) {
      console.log("err", err);

      if (err.response && err.response.status === 401) {
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
      {questions.length > 0 && <CardsWrapper questions={questions} />}
    </div>
  );
};

export default Index;
