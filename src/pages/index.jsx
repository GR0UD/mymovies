import React from "react";
import Header from "../components/header";
import NowShowing from "../components/index/MovieShowingContent";
import MostPopular from "../components/index/MoviePopularContent";
import Nav from "../components/NavigationBar";
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
