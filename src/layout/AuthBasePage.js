// import logo from './logo.svg';
import React, { useState } from 'react';
import NavIconButton from '../components/buttons/NavIconButton';
import ArrowLeft from "../assets/svgs/prev.svg";
import ArrowRight from "../assets/svgs/next.svg";
import glass from '../css/transparent-glass.module.css';
import '../css/AuthBasePage.css';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import AuthLeftSide from '../components/uis/auth/AuthLeftSide';

function AuthBasePage() {
  const [page, setPage] = useState(0);
  const formList = [1, 2];
  const handlePrevAction = () => {
    if (page === 0) {
      return
    } else {
      setPage((currentPage) => currentPage - 1);
    }
  }
  const handleNexAction = () => {
    if (page === formList.length - 1) {
      return;
    } else {
      setPage((currentPage) => currentPage + 1)
    }
  }
  const pageDisplay = () => {
    if (page === 0) {
      return <div className='flex justify-center'>
        <div className='bg-blue-700 px-11 py-10 w-[45%] max-md:hidden flex flex-col justify-between'>
          <AuthLeftSide />
        </div>
      </div>
    } else {
      return <SignUp />
    }
  }

  const progressBar = () => {
    return (
      <div>
        {formList.map((item, index) => (
          <div key={index} className='progress-bar'>
            <div>{index + 1}</div>
          </div>
        ))}
      </div>);
  }
  return (
    <div className="bg-slate-400 h-screen flex justify-center">
      <div className={glass.wrapper}>
        {/* {progressBar()} */}
        <div className=''>
          {pageDisplay()}
          <div className='body'></div>
          <div className='footer'>
            <NavIconButton icon={ArrowLeft} onClick={handlePrevAction} />
            <NavIconButton icon={ArrowRight} onClick={handleNexAction} />
          </div>
        </div>
      </div>
    </div>
  );
}

// function SplashImage(){
//   return (
//     <div className="SplashImage">
//         <img src={logo} className="App-logo" alt="logo" />
//       </div>
//   );
// }


export default AuthBasePage;
