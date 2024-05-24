import React, { useState } from "react";
import styles from "./QuestionForm.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import cookie from "js-cookie";

const QuestionForm = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [theme, setTheme] = useState("");
  const [question, setQuestion] = useState("");
  const [isError, setError] = useState(false);
  const [isBadData, setBadData] = useState(false);

  const onAsking = async () => {
    const questionBody = {
      name: name,
      theme: theme,
      question: question,
    };

    if (!name || !theme || !question) {
      setError(true);
      return;
    }
    setError(false);

    try {
      const token = cookie.get("jwt_token");

      const headers = {
        Authorization: token, // Set the token in the Authorization header
      };

      const response = await axios.post(
        `${process.env.SERVER_URL}/question`,
        questionBody,
        { headers }
      );
      if (response.status === 201) {
        setBadData(false);
        router.push("/");
      }

      console.log(response);
    } catch (err) {
      setBadData(true);
      console.log("err:", err);
    }
  };

  return (
    <div className={styles.form}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />
      <input
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        placeholder="theme"
      />
      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="question"
      />
      <button onClick={onAsking}>Submit question</button>
      {isError && <div className={styles.error}>All inputs must be filled</div>}
      {isBadData && <div className={styles.error}>Provided data is bad</div>}
    </div>
  );
};

export default QuestionForm;
