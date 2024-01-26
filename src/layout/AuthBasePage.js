import AuthMobileView from '../components/uis/auth/AuthMobileView';
import SignIn from '../pages/SignIn';

function AuthBasePage() {

  return (
    <>
      <div className='lg:hidden'>
        <AuthMobileView />
      </div>
      <div className='max-lg:hidden'>
        <SignIn />
      </div>
    </>
  );
}

export default AuthBasePage;
