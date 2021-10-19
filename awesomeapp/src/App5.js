import React,{useState} from "react";





const App5=()=>{

    const purple="#8e44ad";
    const [bg, setBg] = useState(purple);

    const [name,setName]= useState("click Me")

    const bgChange=()=>{
        console.log('change')
       let newBg = "#34495e";
       setBg(newBg)
       setName("ouch 😿")

    }
    const backChange=()=>{
        const purple="#8e44ad";
       setBg(purple)
       setName("Ayoo!! 😠")

    }
   return(
    <>
        <div style={{background:bg}}>
            <button onClick={bgChange} onDoubleClick={backChange}>{name}</button>
        </div>
    </>
   )

}
export default App5