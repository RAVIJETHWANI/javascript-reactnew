import React from "react"
import Images from "./CardImages"
const Cardprtc=({props})=>{

    return(
        <>
        {
            props.map((item)=>{
                const {id,imgsrc,title,link,sname}=item
                return  (<div className="cards" key={id}>
                <div className="card">
                   <Images props={imgsrc} />
                    <div className="card_info">
                        <span className="card-category">{title}</span>
                        <h3 className="card_title">{sname}</h3>
                        <a href={link} target="_blank">
                        <button>watch now</button>
                        </a>
                    </div>
                </div>
            </div>)
            })
        }
   </>
    )
}
export default Cardprtc