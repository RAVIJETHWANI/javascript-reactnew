import React from "react";
//import SlotM from "./SlotMach";

const False=(porps)=>{
   let x=  porps.x
    let y=  porps.y;
   let z=  porps.z;
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
export default False;