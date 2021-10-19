import React from "react";
import SlotM from "./SlotMach";
//import React from "react";
//import False from "./False2";
//import True from "./True2";
//import False from "./False2";
/*const SlotM=(porps)=>{
    let x= porps.x;
    let y= porps.y;
   let z= porps.z;
     if((x===y) && (y===z)){
       return <True />
     }else{
        return <False />
     }
 }*/
 //export default SlotM;


const App2 = ()=>{
    return (
    <>
        <h1 className="heading_style">🎰 welcome to <span> Slot Machine game</span> 🎰</h1>
        <div className="slotMachine">
        <SlotM x= "😄" y= "😄" z= "😄" />
        <SlotM x= "😄" y= "😄" z= "🎅" />
        <SlotM x= "🍎"  y= "🍎"  z="🍌" />
        <SlotM x= "💑"  y= "💑"  z="💑" />
        <SlotM x= "💑"  y= "💑"  z="💑" />
        </div>
    </>

    );
};

export default App2