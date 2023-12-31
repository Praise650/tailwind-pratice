// apis 
const API_KEY = "658460401b864a178bd8ac186927fffd";
const BASEURL = "https://newsapi.org/v2";
const HEADLINES_NEWS = "/top-headlines?country=in&apiKey=";
const GENERAL_NEWS = "/top-headlines?country=in&category=general&apiKey=";
const BUSINESS_NEWS = "/top-headlines?country=in&category=business&apiKey=";
const SPORTS_NEWS = "/top-headlines?country=in&category=sports&apiKey=";
const ENTERTAINMENT_NEWS = "/top-headlines?country=in&category=entertainment&apiKey=";
const TECHNOLOGY_NEWS = "/top-headlines?country=in&category=technology&pageSize=8&apiKey=";
const SEARCH_NEWS = "/everything?q=";

const ApiUrls = {
    apiKey: API_KEY,
    baseUrl:BASEURL,
    headlineNews: HEADLINES_NEWS,
    generalNews: GENERAL_NEWS,
    businessNews: BUSINESS_NEWS,
    sportsNews: SPORTS_NEWS,
    entertainementNews: ENTERTAINMENT_NEWS,
    technologyNews: TECHNOLOGY_NEWS,
    searchNews: SEARCH_NEWS
}


export {ApiUrls as apiUrls};