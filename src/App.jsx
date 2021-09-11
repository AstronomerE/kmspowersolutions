/** @format */

import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import ScrollToTop from "./components/ScrollToTop";
import { FooterContainer } from "./containers/footer";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' exact component={Products} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/about' exact component={About} />
        </Switch>
        <FooterContainer />
      </Router>
    </>
  );
}

export default App;
