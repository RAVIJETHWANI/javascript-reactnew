import React,{useState} from "react";



const App6=()=>{
    const [name,setName]=useState()
    const [fullname, setFullname]=useState(name)
    
const InputEvent=(event)=>{
    const newval =event.target.value;
    setName(newval)
  

}
const [lastname,setlastname]=useState()
    const [lastnamenew, setlastnamenew]=useState(lastname)
const InputEvent2=(event2)=>{
    const newval2 =event2.target.value;
    setlastname(newval2)
  

}


const onsubmit=(event)=>{
    event.preventDefault();
    
    setFullname(name)
    setlastnamenew(lastname)
}


       return(
    <>
    <div className="main_div">
        <form  onSubmit={onsubmit}>
        <div>
            <h1> hello {fullname}{lastnamenew}</h1>
            <input type="text" placeholder="Please Enter Your FirstName"  onChange={InputEvent} value={name}/>
            <input type="text" placeholder="Please Enter Your LastName"  onChange={InputEvent2} value={lastname}/>
            <button type="submit">Submit</button>
        </div>
        </form>
    </div>
    </>
   )

}
export default App6