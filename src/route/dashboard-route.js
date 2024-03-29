// import Dashboard from "../pages/dashboard";
// import Pagination from "../pages/pagination";
import About from "../pages/About";
import Employees from "../pages/Employees";
import Contacts from "../pages/Contacts";
import { lazy } from "react";
import Blog from "../pages/Blog";



const Dashboard = lazy(() => import('../pages/dashboard'));
const Users = lazy(() => import('../pages/Users'));
const Product = lazy(()=> import("../pages/product"));

class DashboardRoute {
    constructor(page, path, title) {
        this.page = page;
        this.path = path;
        this.title = title;
    };
}

const dashboardRoutes = [
    new DashboardRoute(Dashboard, '/dashboard', 'Dashboard'),
    new DashboardRoute(Product, '/products', 'Products'),
    new DashboardRoute(Users, '/pagination','Users'),
    new DashboardRoute(Blog, '/blogs','Blogs '),
    new DashboardRoute(About, '/about', 'About'),
    new DashboardRoute(Contacts, '/contacts','Contacts'),
    new DashboardRoute(Employees, '/employees', 'Employees'),
];

const routes = [...dashboardRoutes];
export { routes };