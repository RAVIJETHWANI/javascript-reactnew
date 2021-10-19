import React, { useEffect, useState } from "react"
import GroceryprtcAlert from "./GroceryprtcAlert"
import GroceryprtcList from "./GroceryprtcList"

const getLocalStorage=()=>{
    const newlist = localStorage.getItem("list")
    if(newlist){
   return JSON.parse(newlist)
    }else{
        return []
    }
}
const GroceryprtcApp=()=>{
    const [name,setName]=useState("")
    const [list,setList]=useState(getLocalStorage())
    const[isEditing,setIsEditing]=useState(false)
    const[editId,setEditId]=useState()
    const[alert,setAlert]=useState({show:false,msg:"",type:""})

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!name){
            showAlert(true,"please enter the value","danger")
        }else if(name && isEditing){
            showAlert(true,"item edited successfully","success")
            setList(list.map((item)=>{
                if(item.id===editId){
                    return{...item,title:name}
                }
                return item
            }))
            setName("")
            setIsEditing(false)
            setEditId(null)
        }else{
            showAlert(true,"item added to the list","success")
            const newItem ={id: new Date().getTime().toString(),
            title:name}
            setList([...list,newItem])
            setName("")
        }
    }
    
    const showAlert=(show,msg,type)=>{
        setAlert({show,msg,type})
    }
    const clearList=()=>{
        showAlert(true,"empty list","danger")
        setList([])
    }
    const removeitem=(index)=>{
        showAlert(true,"item removed","danger")
        setList(list.filter((item)=>{
            return item.id!==index
        }))
    }
    const editItem=(index)=>{
        const specificitem= list.find((item)=>{
            return item.id===index
        })
        setIsEditing(true)
        setEditId(index)
        setName(specificitem.title)
    }
    useEffect(()=>{
        localStorage.setItem('list',JSON.stringify(list))
    },[list])
    return(
       <section className="section-center">
           <form className="grocery-form" onSubmit={handleSubmit}>
               {alert.show&&<GroceryprtcAlert {...alert} removeAlert={showAlert} list={list}/>}
               <h3>grocery bud</h3>
               <div className="form-control">
                    <input type="text" className="grocery" value={name} placeholder="add an item" onChange={(e)=>setName(e.target.value)} />
                    <button type="submit" className="submit-btn">
                        {isEditing?"edit":"submit"}
                    </button>
               </div>
           </form>
           {list.length>0 && 
            <div className="grocery-container">
               <GroceryprtcList items={list} removeitem={removeitem} editItem={editItem}/>
               <button className="clear-btn" onClick={clearList}>clear-item</button>
           </div>
           }
          
       </section>
    )
}
export default GroceryprtcApp


