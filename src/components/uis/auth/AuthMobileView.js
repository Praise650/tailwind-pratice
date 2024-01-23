// import logo from './logo.svg';
import React, { useState } from 'react';
import '../../../css/AuthBasePage.css';
import AuthLeftSide from '../../../components/uis/auth/AuthLeftSide';
import LoginFormField from './LoginFormField';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../../service/auth-service';
import Loader from '../../widgets/loader';
import RegisterFormField from './RegisterFormField';

function AuthMobileView() {

  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(0);
  const formList = [1, 2, 3];
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

  const goto = () => {
    navigate('/dashboard');
  }

  const handleSignIn = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    setLoading(true);
    setError(null);
    const resVal = await authService.sigin(email, password);
    console.log(resVal);
    if (resVal.isSuccess === true) {
      setLoading(false);
      goto();
    } else {
      setError(resVal.failed);
      setLoading(false);
    }
  }

  const handleSignUp = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const firstname = event.target.firstname.value;
    const lastname = event.target.lastname.value;
    const country = event.target.country.value;
    const state = event.target.state.value;
    const phoneNumber = event.target.phone.value;

    const userDataProps = {
      'fullName': firstname + ' ' + lastname,
      'country': country,
      'state': state,
      'phoneNumber': phoneNumber,
    };

    // const newData = JSON.stringify(userDataProps);

    setLoading(true);
    // setSuccess(false);
    setError(null);

    const resVal = await authService.signup(email, password, userDataProps);
    console.log(resVal);
    if (resVal.isSuccess === true) {
      setLoading(false);
      goto();
    } else {
      setError(resVal.failed);
      setLoading(false);
    }
  }

  const pageDisplay = () => {
    if (page === 0) {
      return <div className='bg-blue-700 h-screen px-11 py-10 w-full flex flex-col justify-between'>
        <AuthLeftSide navRight={handleNexAction} />
      </div>
    } else if (page === 1) {
      return <div className='h-screen p-6'>
        <LoginFormField navLeft={handlePrevAction} handleSignUp={handleSignIn} nextPage={handleNexAction} />
      </div>
    } else {
      return <div className='h-screen p-6'>
        <RegisterFormField back={handlePrevAction} handleSignUp={handleSignUp} />
      </div>
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
      </div>
    );
  }

  if (loading === true) return <Loader />

  return (
    <div className=''>
      {/* {progressBar()} */}
      {pageDisplay()}
    </div>
  );
}

export default AuthMobileView;