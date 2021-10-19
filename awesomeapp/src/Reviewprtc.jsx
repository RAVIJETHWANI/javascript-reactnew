import React, { useEffect, useState } from "react";

import People from "./ReviewData";
import {FaChevronLeft,FaChevronRight,FaQuoteRight} from "react-icons/fa"

const Review =()=>{
    let count;
    
    const onSubmitNext=()=>{
      
    
         setIndex((index)=>{
             let newIndex=index+1
             if(newIndex>People.length-1){
                 newIndex=0
             }
             return newIndex
         })
    }
    const onSubmitPrev=()=>{
       setIndex((index)=>{
             let newIndex=index+1
             if(newIndex>People.length-1){
                 newIndex=0
             }
             return newIndex
         })
        }
       const random=()=>{
          
           
           
            let randomNumber=Math.floor(Math.random() *People.length);
            if(randomNumber===index){
                randomNumber=index+1
                if(randomNumber>People.length-1)
                randomNumber=0;
            }
            setIndex((randomNumber))
             
            
        
       }
    
    const [index,setIndex]=useState(0)
    
    const {id,name,job,image,text}=People[index]

    

    return <article className="review">
       <div className="img-container">
            <img src={image} alt={name} className="person-img"/>
            <span className="quote-icon">
                <FaQuoteRight />
            </span>
       </div>
       <h4 className="author">{name}</h4>
       <p className="job">{job}</p>
       <p className="info">{text}</p>
       <div className="btm-container">
           <button className="prev-btn" onClick={onSubmitPrev} >
               <FaChevronLeft />
           </button>
           <button className="next-btn" onClick={onSubmitNext}>
               <FaChevronRight />
           </button>
           <button className="random-btn" onClick={random}>
               surprise me
           </button>
       </div>
    </article>
}
export default Review