import{useEffect, useState} from 'react'
import './App.css';

function App() {
  const [employe,setEmploye]=useState({
    name:"",
    age:"",
    address:"",
    department:"",
    salary:"",
    marital_status:"Unmarried"
  })
const [append,setappend]=useState([])
const [flag,setFlag]=useState(true)
  useEffect(()=>{
    getData()
  },[flag])
  const getData=async()=>{
    let res=await fetch("http://localhost:8080/employee_details")
    let data= await res.json()
       setappend(data)
  }
  function setData(e){
    if(e.target.id==="marital_status"){
       if(e.target.value==="on"){
        e.target.value="Married"
       }
     }
  setEmploye({
      ...employe,
      [e.target.id]:e.target.value
    })
    
  }
  const storeData=async(employe)=>{
   
    if(employe.name==="" || employe.age==="" || employe.address==="" || employe.department==="" || employe.salary===""){
      alert("All fields are required")
    }
    else{
      console.log(employe)
     await fetch("http://localhost:8080/employee_details",{
       method:"POST",
       body:JSON.stringify(employe),
       headers:{
        "Content-Type":"application/json"
       }
     })
     setFlag(!flag)
    }
  }
  return (
    <div className="App">
      <form>
        <h3>Name</h3>
        <input id='name' onChange={(e)=>setData(e)} type="text"/>
        <h3>Age</h3>
        <input id='age' onChange={(e)=>setData(e)} type="number"/>
        <h3>Address</h3>
        <input id='address' onChange={(e)=>setData(e)} type="text"/>
         <h3>Department</h3>
         <select id='department' value="" onChange={(e)=>setData(e)}>
           <option>Select</option>
           <option value="Mechanical">Mechanical</option>
           <option value="Electrical">Electrical</option>
         </select>
         <h3>Salary</h3>
         <input id='salary' onChange={(e)=>setData(e)} type="number"/>
         <h3>Marital Status</h3>
         <input id='marital_status' onChange={(e)=>setData(e)} type="checkbox"/>
         <br></br>
         <input onClick={(e)=>{e.preventDefault();
          storeData(employe)}} type="submit" />
      </form>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Address</td>
            <td>Department</td>
            <td>Salary</td>
            <td>marital status</td>
          </tr>
        </thead>
        <tbody>
           {append.map((ele)=>{
        return <tr key={ele.id}>
           <td>{ele.name}</td>
            <td>{ele.age}</td>
            <td>{ele.address}</td>
            <td>{ele.department}</td>
            <td>{ele.salary}</td>
            <td>{ele.marital_status}</td>
        </tr>
           })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
