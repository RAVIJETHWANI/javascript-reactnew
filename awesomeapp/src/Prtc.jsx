import React from "react"
import { useSelector,useDispatch } from "react-redux"
import { incNumber,decNumber } from "./Action/index"
const Prtc =()=>{
    const myState=useSelector((state)=>state.ChangeNumber)
    const dispatch=useDispatch()
    return(
        <>
          <div className="main_div">
            <div className="center_div">
        <button  title="DECREAMENT" onClick={()=>dispatch(decNumber())} ><span>-</span> </button>
        <input type ="text" value={myState}/>
        <button title=" INCREAMENT" onClick={()=>dispatch(incNumber())}><span>+</span></button>
        </div>
        </div>
        </>
    )

}

export default Prtc