import React from "react"

const Menuprtc=({props})=>{
    return (
        <>
        <div className="section-center">
            {
                props.map((item)=>{
                    const {id,title,price,img,desc,category}=item
                    return (
                        <article key={id} className="menu-item">
                        <img src={img} alt={title} className="photo"/>
                        <div className="item-info">
                            <header>
                                <h4>{title}</h4>
                                <h4>{price}</h4>
                            </header>
                            <p className="item-text">{desc}</p>
                        </div>
                        </article>
                    )
                })
            }
        </div>
        </>
    )
}

export default Menuprtc