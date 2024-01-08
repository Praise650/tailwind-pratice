// apis 
const API_KEY = "658460401b864a178bd8ac186927fffd";
const NEWS_BASE_URL = "https://newsapi.org/v2";
const HEADLINES_NEWS = "/top-headlines?country=in&apiKey=";
const GENERAL_NEWS = "/top-headlines?country=in&category=general&apiKey=";
const BUSINESS_NEWS = "/top-headlines?country=in&category=business&apiKey=";
const SPORTS_NEWS = "/top-headlines?country=in&category=sports&apiKey=";
const ENTERTAINMENT_NEWS = "/top-headlines?country=in&category=entertainment&apiKey=";
const TECHNOLOGY_NEWS = "/top-headlines?country=in&category=technology&pageSize=8&apiKey=";
const SEARCH_NEWS = "/everything?q=";

const EMPLOYEES_BASE_URL = 'https://dummy.restapiexample.com/api/v1';
const GET_EMPLOYEES = '/employees';
const GET_EMPLOYEE = '/employee/1';
const CREATE_EMPLOYEE = '/create';
const UPDATE_EMPLOYEE = '/update/21';
const DELETE_EMPLOYEE = '/delete/2';

const ApiUrls = {
    apiKey: API_KEY,
    baseUrl: NEWS_BASE_URL,
    headlineNews: HEADLINES_NEWS,
    generalNews: GENERAL_NEWS,
    businessNews: BUSINESS_NEWS,
    sportsNews: SPORTS_NEWS,
    entertainementNews: ENTERTAINMENT_NEWS,
    technologyNews: TECHNOLOGY_NEWS,
    searchNews: SEARCH_NEWS,

    employeesBaseUrl: EMPLOYEES_BASE_URL,
    getEmployees: GET_EMPLOYEES,
    getEmployee: GET_EMPLOYEE,
    createEmployee: CREATE_EMPLOYEE,
    updateEmployee: UPDATE_EMPLOYEE,
    deleteEmployee: DELETE_EMPLOYEE,
}


export { ApiUrls as apiUrls };