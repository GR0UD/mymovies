import React from "react";
import Header from "../components/header";

import Nav from "../components/nav";
const Index = () => {
  return (
    <>
      <main>
        <Header />
      </main>
      <Nav currentPath={location.pathname} />
    </>
  );
};

export default Index;
