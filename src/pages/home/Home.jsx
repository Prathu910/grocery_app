import React from "react";
import "./Home.scss";
import Hero from "../../components/hero/Hero";
import Main from "../../components/main/Main";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="main-content container">
        <Main />
      </div>
    </>
  );
};

export default Home;
