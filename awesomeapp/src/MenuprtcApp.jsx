import React, { useState } from "react"
import Menuprtc from "./Menuprtc"
import Categoryprtc from "./Categoryprtc"

import MenuData from "./MenuData"
const allcategory = ["all", ...new Set(MenuData.map((item)=>item.category))]
console.log(allcategory)
const MenuprtcApp=()=>{
    const [menuItem,setMenuItem]=useState(MenuData)
    const [category,setCategory]=useState(allcategory)
    const filterItem = (categories)=>{
        if(categories==="all"){
           
            return  setMenuItem(MenuData)
        }
      const newItems=  MenuData.filter((item)=> item.category===categories
        )
        setMenuItem(newItems)
    }
    return (
        <main>
            <section className="menu-section">
                <div className="titel">
                    <h2>our menu</h2>
                    <div className="underline">
                    </div>
                </div>
                <Categoryprtc categoryprop={category} filterItemprop={filterItem} />
                <Menuprtc props={menuItem}/>
            </section>
        </main>
    )
}

export default MenuprtcApp