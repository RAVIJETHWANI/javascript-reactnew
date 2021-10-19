import React from "react"

const Categoryprtc=({categoryprop,filterItemprop})=>{
    return (
        <div className="btn-container">
        {
            categoryprop.map((category,index)=>{
                return <button className="filter-btn" key={index} type="button" onClick={()=>filterItemprop(category)}>{category}</button>
            })
        }
        </div>
        
    )
}

export default  Categoryprtc