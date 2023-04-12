import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Shoppage from "./Shoppage";

const Grocerypage = () => {
  return (
    <>
      <Header />

      <Shoppage heading="Grocery" />

      <Footer />
    </>
  );
};

export default Grocerypage;
