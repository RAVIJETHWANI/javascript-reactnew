import List  from './ReminderprctList'
import React, { useState } from 'react'
import ReminderData from './ReminderData'

const ReminderprctApp = ()=>{
    const [data,setData]=useState(ReminderData)
    const submitEvent=()=>{
        setData([])
        return <h3>no reminder left</h3>
    }
    return (
        <main>
            <section className="container">
                <h3>{data.length} birthday reminder</h3>
                <List data={data} />
                
                <button onClick={submitEvent}>clear All</button>
            </section>
        </main>
    )
}
export default ReminderprctApp