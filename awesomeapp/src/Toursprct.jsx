import React, { useState } from "react";
import Tourprct from "./Tourprct";
const Toursprct =({props, removeTour})=>{
    
    return (
        <section>
         <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
            {
                props.map((item)=>{
    
                    return <Tourprct key={item.id} {...item} removeTour={removeTour} />
                    
                })
            }

        </div>
                       
        </section>
    )
}
export default Toursprct