import axios from 'axios';

const BASE_EMPLOYEE_URL = "http://localhost:8080/api/employee"

class EmployeeService{

    getAllEmployees(){
       return axios.get(BASE_EMPLOYEE_URL)
    }

    deleteEmployee(employeeId){
        return axios.delete(BASE_EMPLOYEE_URL + "/" + employeeId)
    }
    
}

export default new EmployeeService();