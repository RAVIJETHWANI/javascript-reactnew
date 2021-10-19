import React from "react";

const List =({data})=>{
    return (
        <>
        {
            data.map((item)=>{
                const {id,name,age,image}=item
                return (
                    <article key={id} className="person">
                    
                        <img src={image} alt={name} className="person img" />
                        <h4>{name}</h4>
                        <p>{age} years</p>
                        
                    </article>
                )
            })
        }
        </>
    )
}
export default List