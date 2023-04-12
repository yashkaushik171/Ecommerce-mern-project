import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Shoppage from "./Shoppage";

const Shopproduct = ({}) => {
  return (
    <>
      <Header />

      <Shoppage heading="shop" />

      <Footer />
    </>
  );
};

export default Shopproduct;
