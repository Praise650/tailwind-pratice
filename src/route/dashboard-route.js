// import Dashboard from "../pages/dashboard";
// import Pagination from "../pages/pagination";
import Product from "../pages/product";
import About from "../pages/about";
import Settings from "../pages/settings";
import Contacts from "../pages/contacts";
import { lazy } from "react";

const Dashboard = lazy(() => import('../pages/dashboard'));
const Pagination = lazy(() => import('../pages/pagination'));

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
    new DashboardRoute(Pagination, '/pagination','Pagination'),
    new DashboardRoute(About, '/about', 'About'),
    new DashboardRoute(Settings, '/settings', 'Settings'),
    new DashboardRoute(Contacts, '/contacts','Contacts'),
];

const routes = [...dashboardRoutes];
export { routes };