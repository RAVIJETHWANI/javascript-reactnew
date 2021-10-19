import React,{useState} from "react";

const App9=()=>{
    const [count,setCount]=useState(0);

    const incment=()=>{
        setCount(count+1)
    }
    const decment=()=>{
        setCount(count-1)
        if(count<1){
            alert("the value cant be less than 0")
            setCount(0)
        }
      
       
    }
    return(
        <>
        <div>
        <div className="center-div">
             <h1>{count}</h1>
            <div className="btn-div">
            <button onClick={incment}>increment</button>
            <button onClick={decment}>decrement</button>
            </div>
        </div>
        </div>
        </>
    )
}
export default App9;
