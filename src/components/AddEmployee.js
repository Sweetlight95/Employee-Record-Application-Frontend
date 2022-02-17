import React,{useState} from 'react'

const AddEmployee = () => {

const [firstName, setFirstName] = useState("")
const [lastName, setLastName] = useState("")
const [email, setEmail] = useState("")
const [phoneNumber, setPhoneNumber] = useState("")


const handleDefault = (e)=>{
        e.preventDefault()
}
    return (
    
    <div className="container">

        <div className="row">
            <div className="">
                <div className="card-text">
                    <form onChange={(e)=>{handleDefault(e)}}>
                        <div className="">
                        <label></label>
                        <input></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AddEmployee