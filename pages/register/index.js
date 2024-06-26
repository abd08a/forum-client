import React from "react";
import Header from "../../components/Header/Header";
import { links } from "../../constants/links";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const index = () => {
  return (
    <div>
      <Header logo={"Q&A"} links={links} />
      <RegisterForm />
    </div>
  );
};

export default index;
