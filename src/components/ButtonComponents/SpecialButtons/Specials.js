import React, {useState} from "react";
import {specials} from "../../../data";


const Specials = () => {

console.log(specials);
  const [getState,setState]= useState(specials);
  return (
    <div>
      {
          getState.map((element)=>{
             return <button>{element}</button>
          })
      }
    </div>
 
 );
};
export default Specials;