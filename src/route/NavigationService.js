import { useNavigate } from "react-router-dom";

let navigate = useNavigate();

const index = '/';
const register = '/register';
const home = '/dashboard';
const profile = '/profile';

export const to = (route) => {
    // window.location.
    navigate(route);
}
export const back = (route) => {
    navigate(route)
}