
import React, {useState} from "react";
import {operators} from "../../../data";


const Operators = () => {

console.log(operators);
  const [getState,setState]= useState(operators);
  return (
    <div>
      {
          getState.map((element)=>{
             return <button>{element.value}</button>
          })
      }
    </div>
 
 );
};
export default Operators;