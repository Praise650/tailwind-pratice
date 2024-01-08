import { apiUrls } from "./api-urls";

class NewsApiService {
    constructor(url) {
        this.baseUrl = apiUrls.baseUrl;
        this.apiKey = apiUrls.apiKey;
    };

    async postData() { }
    async retrieveNews(endpoint) {
        const response = await fetch(this.baseUrl + endpoint + this.apiKey, {
            method: 'GET',
            // headers: {
            //     'Content-Type': 'application/json'
            // }
        },);
        return await response.json();
    }
    deleteData() { }
    updateData() { }
}

let newsApiService = new NewsApiService();

export { newsApiService }