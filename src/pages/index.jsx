import React from "react";
import Header from "../components/header";
import NowShowing from "../components/home/catagoryOne";
import MostPopular from "../components/home/catagoryTwo";
import Nav from "../components/nav";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  return (
    <>
      <main>
        <Header />
        <NowShowing />
        <MostPopular />
      </main>
      <Nav currentPath={location.pathname} />
    </>
  );
};

export default Index;
