import React,{useState, useEffect} from 'react'
import EmployeeService from '../services/EmployeeService'

const AddEmployee = ({history}) => {

const [firstName, setFirstName] = useState("")
const [lastName, setLastName] = useState("")
const [email, setEmail] = useState("")
const [phoneNumber, setPhoneNumber] = useState("")


const handleSubmit = (e)=>{
    e.preventDefault()
    
}

const saveEmployeeHandler = (e)=>{

    const employee = {firstName, lastName, email, phoneNumber}

    e.preventDefault()

       EmployeeService.saveEmployee(employee).then((response)=>{
        console.log(response.data)
         history.push("/")
    }).catch((error)=>{
        console.log(error)
    })

}


useEffect(() => {
    

}, [])


    return (
   
    <div className="container"> <br></br>

        <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
                <div className="card-body">
                    <form onSubmit={(e)=>{handleSubmit(e)}}>
                        <div className="form-group mb-2">
                        <label >firstName:</label>
                        <input type= "text" 
                        className="form-control" 
                        placeholder="Enter First Name" 
                        name="firstName"
                        value={firstName}
                        onChange={(e)=>setFirstName(e.target.value)}/>
                        </div>
                        
                        <div className="form-group mb-2">
                        <label >firstName:</label>
                        <input type= "text" 
                        className="form-control" 
                        placeholder="Enter Last Name" 
                        name="lastName"
                        value={lastName}
                        onChange={(e)=>setLastName(e.target.value)}/>
                        </div>

                        <div className="form-group mb-2">
                            <label>email:</label>
                            <input type="text" 
                            className="form-control" 
                            placeholder="Enter Email" 
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="form-group mb-2">
                            <label>phoneNumber:</label>
                            <input type="text"
                            className="form-control"
                            placeholder="Enter Phone Number"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={(e)=>setPhoneNumber(e.target.value)}/>
                        </div>
                        <button onClick={(e)=>saveEmployeeHandler(e)}>Save Employee</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AddEmployee