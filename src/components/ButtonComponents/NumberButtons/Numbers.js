import React, {useState} from "react";
import {numbers} from "../../../data";


const Numbers = (props) => {
  // STEP 2 - add the imported data to state
console.log(numbers);
  const [getStateX,setStatex]= useState(numbers);
  return (
    <div>
      {/* /* STEP 3 - Use .map() within curly braces 
      to iterate over your array 
      data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/ }
      {
          getStateX.map((element)=>{
             return <button onClick = {() => props.click(element)} >{element}</button>
          })
      }
    </div>
  );
};
export default Numbers;