/*import React,{useState} from "react";



const App7=()=>{
    const [fullname, setfullName] = useState({
        fname: '',
        lname: '',
        email:'',
        number:''
    })
      
const InputEvent=(event)=>{
  const value= event.target.value
  const name= event.target.name
 
  setfullName((preValue)=>{

    return{
        ...preValue,
        [name]:value
    }
    if(name==="fName"){
        return{
            fname:value,
            lname:preValue.lname,
            email:preValue.email,
            numver:preValue.number
    
        }

       
    }else if(name==="lName"){
        return{
            fname:preValue.fname,
            lname:value,
            email:preValue.email,
            numver:preValue.number
        }
    }else if(name==="eMail"){
        return{
            fname:preValue.fname,
            lname:preValue.lname,
            email:value,
            numver:preValue.number
        }
    }else if(name==="number"){
        return{
            number:value,
            fname:preValue.fname,
            lname:preValue.lname,
            email:preValue.email
        }
    }


})
}

 const onsubmit=(event)=>{
    event.preventDefault();
  alert("form submited")
    
}


       return(
    <>
    <div className="main_div">
        <form  onSubmit={onsubmit}>
        <div>
            <h1> hello {fullname.fname} {fullname.lname}</h1>
            <p>{fullname.email}</p>
            <p>{fullname.number}</p>
            <input type="text" placeholder="Please Enter Your FirstName" name="fname" onChange={InputEvent} value={fullname.fname} />
            <input type="text" placeholder="Please Enter Your LastName" name="lname" onChange={InputEvent} value={fullname.lname} />
            <input type="email" placeholder="Please Enter Your email" name="email" onChange={InputEvent} value={fullname.email} />
            <input  type="number"  name="number"  placeholder="Please Enter number"  onChange={InputEvent} value={fullname.number} />
            <button type="submit">Submit</button>
        </div>
        </form>
    </div>
    </>
   )

}

//export default App7