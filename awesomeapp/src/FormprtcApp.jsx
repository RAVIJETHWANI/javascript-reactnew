import React, { useState } from "react"

const FormprtcApp =()=>{

    const [fullName,setFullName]=useState({
        fname:"",
        lname:"",
        email:"",
        phone:""
    })
    
    const inputevent=(e)=>{
        const value= e.target.value
        const name= e.target.name
      
        setFullName((preval)=>{
           return{
               ...preval,
               [name]:value
           }
        })
    }
    
    const onSubmit=(event)=>{
        event.preventDefault()
       
    }
    return(
        <>
        <form onSubmit={onSubmit}>
        <div>
         <h1>{fullName.fname} {fullName.lname} {fullName.email}{fullName.phone}</h1>
        <input type='text' name="fname" value={fullName.fname} onChange={inputevent} placeholder="please enter your name" />
       
        <input type='text' name="lname" value={fullName.lname} onChange={inputevent}  placeholder="please enter your password"/>
        <input type='email' name="email" value={fullName.email} onChange={inputevent}  placeholder="please enter your email"/>
        <input type='number' name="phone" value={fullName.phone} onChange={inputevent}  placeholder="please enter your number"/>
        <button type="submit">click me</button>
        </div>
        </form>
        </>
    )

}

export default FormprtcApp