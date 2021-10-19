import React from "react";
//import False from "./False2";
//import True from "./True2";
const SlotM=(porps)=>{
  let x= porps.x;
  let y= porps.y;
 let z= porps.z;
   if((x===y) && (y===z)){
     return (
      <>
      <div className="slot_inner">
          <h1>{x} {y} {z}</h1>
          <h1>This is Matching</h1>
          <hr/>
      </div>
  </>
     )
   }else{
      return (
        <>
            <div className="slot_inner">
                <h1>{x} {y} {z}</h1>
                <h1>This is not Matching</h1>
                <hr/>
            </div>
        </>
    )
   }
}
export default SlotM;