import React from "react";
import Header from "../components/Header/Header";
import { links } from "../constants/links";

const Index = () => {
  return (
    <div>
      <Header logo={"Q&A"} links={links} />
    </div>
  );
};

export default Index;
