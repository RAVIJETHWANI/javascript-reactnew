import React, { useState } from "react";

const FormApp=()=>{
    const [name,setName]=useState("");
    const [fullName,setFullName]=useState("");
    const [lastName,setLastName]=useState("");
    const [lastNewName,setLastNewName]=useState();
    const InputEvent = (event)=>{
        const newVal=event.target.value;
        setName(newVal)
       
    }
    const InputEvent2 = (event)=>{
        const newVal2=event.target.value;
        setLastName(newVal2)
       
    }
    const onsubmit=(e)=>{
        e.preventDefault();
        setFullName(name)
        setName("")
        setLastNewName(lastName)
        setLastName("")
    }
  
    return(
        <>
        <div className="main_div">
        <form onSubmit={onsubmit}>
        <div>
        <h1>hello {fullName} {lastNewName}</h1>
        
        <input type="text" value={name} placeholder="enter your name" onChange={InputEvent} />
        <input type="text" value={lastName} placeholder="enter your password" onChange={InputEvent2} />
        <button type="submit" >click me</button>
        </div>
        </form>
        </div>
        </>
    )
}
export default FormApp;