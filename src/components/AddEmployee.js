import React,{useState, useEffect} from 'react'
import EmployeeService from '../services/EmployeeService'

const AddEmployee = ({history, match}) => {

const [firstName, setFirstName] = useState("")
const [lastName, setLastName] = useState("")
const [email, setEmail] = useState("")
const [phoneNumber, setPhoneNumber] = useState("")


const handleSubmit = (e)=>{
    e.preventDefault()
    
}

const CancelEmployeeHandler =(e)=>{
    e.preventDefault()

    history.push("/")
}

const saveEmployeeHandler = (e)=>{

    const employee = {firstName, lastName, email, phoneNumber}

    e.preventDefault()

    if (match.params.id){

        EmployeeService.editEmployeeHandler(match.params.id, employee).then((response) => {

            history.push("/")

        }).catch((error) => {
            console.log(error)
        })
        
    }else {
        EmployeeService.saveEmployee(employee).then((response)=>{
            console.log(response.data)

            history.push("/")

        }).catch((error)=>{
            console.log(error)
        })   
        }

}


useEffect(() => {
    EmployeeService.findAnEmployee(match.params.id).then((response) => {

        setFirstName(response.data.firstName)
        setLastName(response.data.lastName)
        setEmail(response.data.email)
        setPhoneNumber(response.data.phoneNumber)
    }).catch((error)=>{
        console.log(error)
    })

}, [])


    const Label = ()=>{
        
        if (match.params.id){
            return <h2 className="text-center">Update Employee Details</h2>
        }else {
            return <h2 className="text-center">Add Employee Details</h2>
        }
    }



    return (
   
    <div className="container"> <br></br>

        <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
                <div className="card-body">
                    {Label()}
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

                        <button onClick={(e)=>CancelEmployeeHandler(e)}>Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AddEmployee