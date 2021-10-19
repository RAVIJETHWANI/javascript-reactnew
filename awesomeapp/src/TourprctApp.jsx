
import React, { useEffect, useState } from "react";
import Loading from "./TourLoadingprct";
import Toursprct from "./Toursprct";
const url = 'https://course-api.com/react-tours-project'
//import Toursprct from "./Toursprct";
const TourprctApp =()=>{
    const [loading,setLoading]=useState(true)

    const [tour,setTour]=useState([])
   
        
        let fetchData = async ()=>{
            setLoading(true)
            try{const response= await fetch(url)
            const data = await response.json()
            setLoading(false)
            setTour(data)
           
            }
            catch(error){
                console.log(error)
                setLoading(false)
            }
           
        }
        useEffect(()=>{
            fetchData()
        },[])
    if(loading){
        return (
            <main>
                <Loading />
            </main>
        )
    }
   
   const removeTour =(id)=>{
     const newTour=  tour.filter((item)=>{
           return item.id!==id
       })
       setTour(newTour)
   }
   if(tour.length===0){
    return (
        <main>

            <h1>no tours left</h1>
            <button onClick={fetchData} className="btn">refresh</button>
        </main>
    )
}

    return (
        <main>
            <Toursprct props={tour} removeTour={removeTour}/>
        </main>
    )
}
export default TourprctApp