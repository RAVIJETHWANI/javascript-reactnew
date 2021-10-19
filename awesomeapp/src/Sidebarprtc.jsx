import React from 'react';
import { FaTimes } from 'react-icons/fa';
import logo from "./images/logo.svg"
import {links,social} from './SidebarData';
import {useGlobal} from "./SidebarContextprtc"
function Sidebarprtc() {
    const {isSidebarOpen,closeSidebar}=useGlobal()
  return (
      <aside className={`${isSidebarOpen?'sidebar show-sidebar':"sidebar"}`}>
      <div className="sidebar-header">
      <img src={logo} alt="logo" className="logo"/>
      <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
      </button>
      </div>
        <ul className="links">
            {
                links.map((link)=>{
                    const {id,text,url,icon}=link
                    return <li key="id"><a href={url} >{icon}{text}</a></li>
                })
            }
        </ul>
        <ul className="social-icons">
            {
                social.map((link)=>{
                    const {id,url,icon}=link
                    return <li key="id"><a href={url} >{icon}</a></li>
                })
            }
        </ul>
     
      </aside>
  )
}

export default Sidebarprtc;