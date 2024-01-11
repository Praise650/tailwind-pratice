import { apiUrls } from "./api-urls";

class EmployeesService {
    constructor(url) {
        this.baseUrl = apiUrls.employeesBaseUrl;
    };

    postData() { }
    async getEmployeeList(endpoint) {
        // https://dummyapis.com/
        // source of the endpoint
        var url = 'https://hub.dummyapis.com/employee?noofRecords=50&idStarts=0';
        // const response = await fetch(this.baseUrl + endpoint);
        const response = await fetch(url);
        return await response.json();
    }
    deleteData() { }
    updateData() { }
}


// {
    // method: 'GET',
    // headers: {
    //     // 'Content-Type': 'application/json',
    //     // 'Access-Control-Allow-Origin':'*',
    //     'Access-Control-Allow-Origin' : 'http://localhost:3000',
    //     'Access-Control-Allow-Credentials' : true,
    //     'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS',
    //     'Access-Control-Allow-Headers' : 'Origin, Content-Type, Accept'
    // }
// },

let employeesService = new EmployeesService();

export { employeesService }