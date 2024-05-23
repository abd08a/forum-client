import React from "react";
import Header from "../../components/Header/Header";
import { links } from "../../constants/links";
import LoginForm from "../../components/LoginForm/LoginForm";

const index = () => {
  return (
    <div>
      <Header logo={"Q&A"} links={links} />
      <LoginForm />
    </div>
  );
};

export default index;
