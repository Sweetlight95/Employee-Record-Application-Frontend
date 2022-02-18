import React, {useState, useEffect}from 'react'
import EmployeeService from '../services/EmployeeService'
import {Link} from 'react-router-dom'
const ListOfEmployee = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getAllEmployes();
    }, [])

    const getAllEmployes = () => {
        EmployeeService.getAllEmployees().then((response) => {
            console.log(response)
            setEmployees(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

    const deleteEmployeeHandler = (employeeId) => {
        EmployeeService.deleteEmployee(employeeId).then((response)=>{
            getAllEmployes()
        }).catch((error) => {
            console.log(error)
        })
    }


    return (
    <div className="container">
        <h2 className="text-center">List of Employees</h2>
        {<Link to ="/add-employee" className="btn btn-primary">Add Employee</Link>}
        <table className="table table-bordered table-strip">
        <thead>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Actions</th>
        </thead>
        <tbody>
            {employees.map((employee) =>
                <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phoneNumber}</td>
                   <td>
                    <button className = "btn btn-danger m-2" onClick={()=>deleteEmployeeHandler(employee.id)}>Delete</button>
                   </td> 
                    
                </tr>
                )}
        </tbody>
        </table>
    </div>
    )
}

export default ListOfEmployee;