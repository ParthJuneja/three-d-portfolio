import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { Button } from "./ScrollElements";

const ScrollUpButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",

      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <div align="left" style={{ marginLeft: "30px" }}>
        <Button style={{padding:0, width: "50px"}}>
          <div align="left" style={{ marginLeft: "30px", height:"50px",width:"50px" }}>
            <i
              class="fa fa-angle-double-up"
              onClick={scrollToTop}
              style={{ display: visible ? "block" : "none" }}
            ></i>
          </div>
        </Button>
      </div>
    </>
  );
};

export default ScrollUpButton;
