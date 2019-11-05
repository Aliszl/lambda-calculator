import React from "react";
import Numbers from "./Numbers"
const NumberButton = (props) => {
  return (
    <>
     <Numbers click = {props.click}/> 
    </>
  );
};
export default NumberButton;