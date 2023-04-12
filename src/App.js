import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Productpage from "./components/Productpage";
import Shopproduct from "./components/Shopproduct";
import Cartpage from "./components/Cartpage";
import Checkoutpage from "./components/Checkoutpage";
import Orderplaced from "./components/Orderplaced";
import Signup from "./components/Signup";
import Loginpage from "./components/Loginpage";
import Grocerypage from "./components/Grocerypage";
import Juicepage from "./components/Juicepage";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/shop" exact element={<Shopproduct />} />
        <Route path="/grocery" exact element={<Grocerypage />} />
        <Route path="/juice" exact element={<Juicepage />} />
        <Route path="/productpage/:id" exact element={<Productpage />} />
        <Route path="/cartpage" exact element={<Cartpage />} />
        <Route path="/checkout" exact element={<Checkoutpage />} />
        <Route path="/orderplaced" exact element={<Orderplaced />} />
        <Route path="/login" exact element={<Loginpage />} />
        <Route path="/signup" exact element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
