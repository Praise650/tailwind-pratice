// import ImageHeader from "./image-header";
import { routes } from "../route/dashboard-route";
import { Link } from "react-router-dom";
import AppLogo from "./app-logo";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuButton from "./buttons/menu-button";

function Navbar({ open, setSidebar }) {
    return (
        <div
            className={`absolute left-0 top-0 
            z-50 h-screen w-72.5 overflow-y-hidden 
            bg-[#4F1DA0] duration-300 ease-linear 
            dark:bg-boxdark lg:static lg:translate-x-0 
            ${open ? 'translate-x-0' : '-translate-x-full'}`}
        // className={`
        // bg-[#4F1DA0]
        // text-white 
        // h-screen w-[20.0625rem] 
        // border-r-black shadow-md
        // max-lg:hidden 
        // ${!open &&'absolute top-0 bottom-0'}
        // `}
        >
                <div className="flex justify-between items-center px-6">
                    <AppLogo />

                    <MenuButton open={open} setAction={setSidebar} />
                </div>
                <div className="flex flex-col justify-between items-center gap-3 mt-3">
                    {routes.map((item, index) => {
                        return <Link to={item.path} className="text-white w-[100%] py-2 px-6 text-start font-[0.6875rem] hover:bg-[#A97DF3]">
                            <div key={item.title} >
                                {/* <FontAwesomeIcon icon="check-square" />
                            <FontAwesomeIcon icon={['fab', 'apple']} /> */}
                                {item.title}
                            </div>
                        </Link>
                    })}
                </div>
            <div className="flex justify-between mx-[0.81rem] mb-2 mt-10 border-2 rounded-xl">
                <div className="bg-[#723EC8] rounded-xl py-[0.81rem] px-[1.06rem] text-white ">
                    <span>Used Space:</span><br />
                    <span>Admin Updated @ 9:00AM</span> <br />
                    <span>MAY, 13 2022</span>

                    <div className="text-right mt-2">
                        <span>12.5GB/15GB</span>
                        <div className="h-2 bg-white"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;