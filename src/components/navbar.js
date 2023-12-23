import ImageHeader from "./image-header";
import logo from '../logo.svg';
import { routes } from "../route/dashboard-route";
import { Link } from "react-router-dom";

function Navbar() {
    // const items = ['Dashboard', 'Products', 'About', 'Settings', 'Pagination',];
    return (<div className="bg-white h-screen w-1/5 px-2">
        <div >
            <div className="border-b-2 border-yellow-500 text-start font-bold text-4xl mb-8">
                <span className="inline-flex flex-row">
                    <img className="h-[40px]" src={logo} alt='Logo' />
                    Home
                </span>
            </div>
            <div className="my-3">
                <ImageHeader />
            </div>
            <div className="flex flex-col justify-between items-center gap-3 mt-10">
                {routes.map((item, index) => {
                    return <div className="text-black w-[100%] py-3 mb-3 text-start uppercase">
                        <Link to={item.path}>{item.title}</Link>
                    </div>
                })}
            </div>
        </div>
        <div className="rounded-2xl border-white bg-black px-3 py-2 w-15">
            Sign In
        </div>
        <br />
        <div className="rounded-2xl border-white bg-black px-3 py-2 w-15">
            Sign Out
        </div>
    </div>
    );
}

export default Navbar;