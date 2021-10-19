import React, { useState } from "react"
import Cardprtc from "./Cardprtc";
import Images from "./Image";
import Sdata from "./Sdata";
const CardprtcApp =()=>{
    //const [data,setData]=useState(Sdata)
    return(
        <>
            <Cardprtc props={Sdata}/>
        </>
    )
}
export default CardprtcApp;