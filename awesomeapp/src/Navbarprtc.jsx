import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './NavbarData'
import logo from './images/logo.svg'

const Navbar = () => {
    const [showLinks,setShowLinks]=useState(false)
    const linkscontainerRef=useRef(null)
    const linkRef=useRef(null)

    useEffect(()=>{
        const linksHeight= linkRef.current.getBoundingClientRect().height
        console.log(linksHeight)
        if(showLinks){
            linkscontainerRef.current.style.height= `${linksHeight}px`
        }else{
            linkscontainerRef.current.style.height="0px"
        }
    },[showLinks])
  return (
      <nav>
          <div className="nav-center">
              <div className="nav-header">
                <img src={logo} alt="logo" />
                <button className="nav-toggle" onClick={()=>setShowLinks(!showLinks)}>
                    <FaBars />
                </button>
              </div>
              
                <div className="links-container" ref={linkscontainerRef}>
                <ul className="links" ref={linkRef}>
                   
                        {links.map((link)=>{
                            const {id,text,url}=link
                            return <li key={id}><a href={url}>{text}</a></li>
                        })}
                    
                </ul>
              </div>
              
              
              <ul className="social-icons">
                        {
                            social.map((link)=>{
                                const {id,icon,url}=link
                                return <li key={id}><a href={url}>{icon}</a></li>
                            })
                        }
              </ul>
          </div>
      </nav>
  )
}

export default Navbar