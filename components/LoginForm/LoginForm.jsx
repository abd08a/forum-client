import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import cookie from "js-cookie";

const LoginForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState(false);
  const [isBadData, setBadData] = useState(false);

  const onLogin = async () => {
    const loginBody = {
      email: email,
      password: password,
    };

    if (!email || !password) {
      setError(true);
      return;
    }
    setError(false);

    try {
      const response = await axios.post(
        `${process.env.SERVER_URL}/users/login`,
        loginBody
      );
      if (response.status === 200) {
        setBadData(false);
        cookie.set("jwt_token", response.data.jwt_token);
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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={onLogin}>Login</button>
      {isError && <div className={styles.error}>All inputs must be filled</div>}
      {isBadData && <div className={styles.error}>Provided data is bad</div>}
    </div>
  );
};

export default LoginForm;
