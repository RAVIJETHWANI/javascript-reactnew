import React, { useEffect, useState } from "react"

import peopleData from "./SliderData";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa"
const SliderprtcApp = ()=>{
    const [data,setData]=useState(peopleData)
    const [index,setIndex]=useState(0)

    useEffect(()=>{
        const lastIndex=data.length-1
        if(index<0){
            setIndex(lastIndex)
        }if(index>lastIndex){
            setIndex(0)
        }
    },[index,data])

    useEffect(()=>{
        let slider=   setInterval(() => {
               setIndex(index+1)
           }, 3000);
           return ()=> clearInterval(slider)
       },[index])
    return (
         <section className="section">
        <div className="title">
            <h2><span>/</span> reviews</h2>
        </div>
        <div className="section-center">
            {
                data.map((person,personIndex)=>{
                  //  console.log(personIndex)
                    const {id,image,name,title,quote}=person
                    
                
                        let position="nextSlide"
                        
                    
                    if(personIndex===index){
                        position="activeSlide"
                       // console.log(personIndex)
                       //console.log(index)
                    }if(personIndex===index-1||(index===0 && personIndex===data.length-1)){
                        position="lastSlide"
                       // console.log(personIndex)
                        //console.log(index-1)
                    }
                    return (
                    <article key={id} className={position}>
                        <img src={image} alt={name} className="person-img"/>
                        <h4>{name}</h4>
                        <p className="title">{title}</p>
                        <p className="text">{quote}</p>
                        <FaQuoteRight className="icon"/>
                    </article>
                    )
                })}
                <button className="prev" onClick={()=>setIndex(index-1)}>
                    <FaChevronLeft />
                </button>
                <button className="next" onClick={()=>setIndex(index+1)}>
                    <FaChevronRight />
                </button>
            </div>
        </section>
    )
}
export default SliderprtcApp