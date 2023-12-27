// apis 
const API_KEY = "YOUR_API_KEY";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=8&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

const ApiUrls = {
    apiKey: API_KEY,
    headlineNews: HEADLINES_NEWS,
    generalNews: GENERAL_NEWS,
    businessNews: BUSINESS_NEWS,
    sportsNews: SPORTS_NEWS,
    entertainementNews: ENTERTAINMENT_NEWS,
    technologyNews: TECHNOLOGY_NEWS,
    searchNews: SEARCH_NEWS
}


export {ApiUrls as apiUrls};