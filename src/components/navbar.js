import ImageHeader from "./image-header";
import { routes } from "../route/dashboard-route";
import { Link } from "react-router-dom";
import AppLogo from "./app-logo";

function Navbar() {
    // const items = ['Dashboard', 'Products', 'About', 'Settings', 'Pagination',];
    return (<div className="bg-white h-screen w-1/5 px-2 border-r-black shadow-md sm: hidden lg:hidden">
        <div >
            <AppLogo />
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
        <div className="flex justify-between">
            <div className="rounded-2xl border-white bg-black text-white px-3 py-2 w-fit">
                <Link to={'/auth/signin'} >
                    Sign In
                </Link>
            </div>  
        </div>
    </div>
    );
}

export default Navbar;