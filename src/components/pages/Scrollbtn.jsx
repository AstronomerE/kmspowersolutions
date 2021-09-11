/** @format */

import React, { useState, useEffect } from "react";
import { useWindowScroll } from "react-use";
import "../../App.scss";
import ArrowUpward from "@material-ui/icons/ArrowUpward";

const ScrollToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisibility] = useState(false);

  useEffect(() => {
    if (pageYOffset > 100) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) {
    return false;
  }
  return (
    <button
      className='scroll-to-top cursor-pointer text-center'
      onClick={scrollToTop}>
      <ArrowUpward />
    </button>
  );
};

export default ScrollToTop;
