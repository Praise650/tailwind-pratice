import ImageHeader from "./image-header";
import { routes } from "../route/dashboard-route";
import { Link } from "react-router-dom";
import AppLogo from "./app-logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar() {
    // const items = ['Dashboard', 'Products', 'About', 'Settings', 'Pagination',];
    return (
        <div className="bg-[#4F1DA0] text-white h-screen w-[20.0625rem] border-r-black shadow-md max-lg:hidden">
            <div >
                <AppLogo />
                {/* <div className="my-3 mb-3">
                    <ImageHeader />
                </div> */}
                <div className="flex flex-col justify-between items-center gap-3 mt-3">
                    {routes.map((item, index) => {
                        return <Link to={item.path} className="text-white w-[100%] py-2 px-2 text-start font-[0.6875rem] hover:bg-[#A97DF3]">
                            <div >
                            <FontAwesomeIcon icon="check-square" />
                            <FontAwesomeIcon icon={['fab', 'apple']} />
                                {item.title}
                            </div>
                        </Link>
                    })}
                </div>
            </div>
            <div className="flex justify-between mx-[0.81rem] mb-2 mt-10 border-2 rounded-xl">
                <div className="bg-[#723EC8] rounded-xl py-[0.81rem] px-[1.06rem]">
                    <span>Used Space:</span><br/>
                    <span>Admin Updated @ 9:00AM</span> <br />
                    <span>MAY, 13 2022</span>
                    
                    <div className="text-right mt-2">
                        <span>12.5GB/15GB</span>
                        <div className="h-2 bg-white"></div>
                    </div>
                </div>


                 {/* sign action */}   
                {/* <div>
                <div className="rounded-2xl border-white bg-black text-white px-3 py-2 w-fit">
                    <Link to={'/auth/signin'} >
                        Sign In
                    </Link>
                </div>
                <div className="rounded-2xl border-white bg-black text-white px-3 py-2 w-fit">
                    <Link to={"/auth/signup"} >
                        Sign Out
                    </Link>
                </div> 
                </div> */}
                {/* sign action */}
            </div>
        </div>
    );
}

export default Navbar;