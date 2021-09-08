import React from "react";
import Header from "components/Header/Header";
import styles from "styles/pages/Home.scss";

export default function Home() {
  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <h1 className="home__title">Home Page</h1>
        </div>
      </div>
    </>
  );
}
