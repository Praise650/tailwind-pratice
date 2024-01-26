import React from 'react';
import AuthMobileView from '../components/uis/auth/AuthMobileView';
import SignUp from '../pages/SignUp';

function RegisterBasePage() {
  return (
    <>
    <div className='lg:hidden'>
      <AuthMobileView />
    </div>
    <div className='max-lg:hidden'>
      <SignUp />
    </div>
  </>
  )
}

export default RegisterBasePage;
