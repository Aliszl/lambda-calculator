import React, {useState} from "react";
import {numbers} from "../../../data";


//import any components needed
// example of import from data.js. Note all the ../  
//  This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = () => {
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
             return <button>{element}</button>
          })
      }
    </div>
  );
};
export default Numbers;