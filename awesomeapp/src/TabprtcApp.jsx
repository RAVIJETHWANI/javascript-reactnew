import React, { useEffect, useState } from 'react';
import {FaAngleDoubleRight} from "react-icons/fa"
const url = 'https://course-api.com/react-tabs-project'

const TabprtcApp =()=>{
    const [loading,setLoading]=useState(true)
    const [job,setJob]=useState([])
    const [value,setValue]=useState(0)

    const fetchJobs= async ()=>{
        setLoading(true)
        const response= await fetch(url)
        const data= await response.json()
        console.log(data)
        setJob(data)
        setLoading(false)
    }
    useEffect(()=>{
     fetchJobs()   
    },[])
    

    if(loading){
        return <h1>loading....</h1>
    }
    const {company,dates,duties,title}=job[value]

    return (
        <section className='section'>
            <div className="title">
                <h2>experience</h2>
                <div className="underline">
                </div>
                <div className="jobs-center">
                <div className="btn-container">
                    {job.map((item,index)=>{
                        const {company}=item
                        return<button key={index} onClick={()=>setValue(index)} className={`job-btn ${index===value&& "active-btn"}`}>{company}</button>
                    })}
                </div>
                    <article className="job-info">
                        <h3>{title}</h3>
                        <h4>{company}</h4>
                        <p className="job-date">{dates}</p>
                        {
                            duties.map((duty,index)=>{
                              return  <div key={index} className="job-desc">
                                        <FaAngleDoubleRight className="job-icon"/>
                                        <p>{duty}</p>
                                      </div>
                            })
                        }
                        
                    </article>
                </div>
            </div>
        </section>
    )
}

export default TabprtcApp;