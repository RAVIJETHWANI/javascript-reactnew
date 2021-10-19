import React, { useState,useEffect } from "react"
import ButtonUnstyled from '@mui/core/ButtonUnstyled';
//import { FaTimes} from 'react-icons/fa';

import Listcom from "./TodoListCom";
const getLocalStorage =()=>{
    let list = localStorage.getItem('list')
    if(list){
        return JSON.parse(localStorage.getItem('list'))
    }else{
        return []
    }
}
const Prtc =()=>{
   
   const [item,setItem]=useState()
   
     const [newItem,setNewItem]=useState(getLocalStorage())
     
    
    const eventSubmit=(e)=>{
      let event=  e.target.value
        setItem(event)
    }
    const submit=()=>{
        setNewItem((preval)=>{
            return [
                ...preval,
                item
            ]
        })
        setItem("")
    }
    
    useEffect(()=>{
        localStorage.setItem('list',JSON.stringify(newItem))
    },[newItem])
    return (
        <>
        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1>ToDoList</h1>
                <br/>
                <input type="text" placeholder="add an item" value={item} onChange={eventSubmit}/>
                <ButtonUnstyled onClick={submit}>+</ButtonUnstyled>
                <br/>
                <ol>
                    {
                       newItem.map((val,index)=>{
                        return (
                            <Listcom text={val} key={index}/>
                            
                       )
                       })
                    }
                </ol>
                <button className="clear-all" onClick={()=>setNewItem([])}>
                clear all
            </button>
            </div>
           
        </div>

    </>
    )
}

export default Prtc