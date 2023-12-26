class ApiService {
    constructor(url) {
        // this.url = url;
        this.baseUrl = 'https://jsonplaceholder.typicode.com';
    };

    // static setEndpoint(endpoint) {
    //     this.url = endpoint;
    // }

    async postData() { }
    async retrieveData(endpoint) {
        const response = await fetch(this.baseUrl + endpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        },);
        return await response.json();
    }
    deleteData() { }
    updateData() { }
}

var apiService = new ApiService();

export { apiService }