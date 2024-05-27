import React, { useState } from "react";
import styles from "./AnswerForm.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import cookie from "js-cookie";

const AnswerForm = ({ questionId }) => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [answer, setAnswer] = useState("");
  const [isError, setError] = useState(false);
  const [isBadData, setBadData] = useState(false);

  const onSubmitAnswer = async () => {
    if (!answer) {
      setError(true);
      return;
    }
    setError(false);

    try {
      const token = cookie.get("jwt_token");

      const headers = {
        Authorization: token, // Set the token in the Authorization header
      };

      const answerBody = {
        name: name,
        answer: answer,
      };

      const response = await axios.post(
        `${process.env.SERVER_URL}/question/${questionId}/answer`,
        answerBody,
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

      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Write your answer"
      />
      <button onClick={onSubmitAnswer}>Submit Answer</button>
      {isError && <div className={styles.error}>Answer cannot be empty</div>}
      {isBadData && <div className={styles.error}>Provided data is bad</div>}
    </div>
  );
};

export default AnswerForm;
