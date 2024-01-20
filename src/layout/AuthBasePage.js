// import logo from './logo.svg';
import React, { useState } from 'react';
import NavIconButton from './components/nav-icon-button';
import ArrowLeft from "./images/prev.svg";
import ArrowRight from "./images/next.svg";
import glass from '../css/transparent-glass.module.css';
import '../css/AuthBasePage.css';
import PersonalInfo from './pages/app-parts/personal-info';
import WorkerStatus from './pages/app-parts/worker-status';

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
      return <PersonalInfo />
    } else {
      return <WorkerStatus />
    }
  }

  const progressBar = () => {
    return (
      <div>
        {formList.map((item, index) => (
          <div key={index} className='progress-bar'>
            <div>{index +1}</div>
          </div>
        ))}
      </div>);
  }
  return (
    <div className="App">
      <div className={glass.wrapper}>
        {progressBar()}
        <div className='home-container'>
          {/* <div class="item"><SplashImage/></div> */}
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
