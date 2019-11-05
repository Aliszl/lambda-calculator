import React, {useState} from "react";
import {specials} from "../../../data";

//import any components needed

//Import your array data to from the provided data file

// const Specials = () => {
//   // STEP 2 - add the imported data to state

//   return (
//     <div>
//       {/* STEP 3 - Use .map() to iterate over your array data and return a button
//        component matching the name on the provided file. Pass
//        it any props needed by the child component*/}
//     </div>
//   );
// };



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