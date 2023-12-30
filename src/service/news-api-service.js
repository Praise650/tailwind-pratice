import { apiUrls } from "./api-urls";

class NewsApiService {
    constructor(url) {
        // this.url = url;
        this.baseUrl = apiUrls.baseUrl;
    };

    // static setEndpoint(endpoint) {
    //     this.url = endpoint;
    // }

    async postData() { }
    async retrieveNews(endpoint) {
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

let newsApiService = new NewsApiService();

export { newsApiService }