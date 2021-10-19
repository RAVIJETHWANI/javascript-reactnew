import React from "react"
import { FaEdit } from "react-icons/fa"
import { FaTrash } from "react-icons/fa"

const GroceryprtcList=({items,removeitem,editItem})=>{
    return(
       <div className="grocery-list">
           {
               items.map((item)=>{
                   const {id,title}=item
                   return(
                       <article key={id} className="grocery-item">
                            <p className="title">{title}</p>
                            <div className="btn-container">
                            <button className="edit-btn" type="button" onClick={()=>editItem(id)}>
                                <FaEdit />
                            </button>
                            <button className="delete-btn" type="button" onClick={()=>removeitem(id)}>
                                <FaTrash />
                            </button>
                            </div>
                       </article>
                   )
               })
           }
       </div>
    )
}
export default GroceryprtcList