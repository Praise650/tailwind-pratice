import AuthMobileView from '../components/uis/auth/AuthMobileView';
import useMediaQuery from '../hooks/useMediaQuery';
import SignIn from '../pages/SignIn';

function AuthBasePage() {
  const isMobile = useMediaQuery(768);
  // const isTablet = useMediaQuery('min-width:1024');
  const isTablet = useMediaQuery(1024);

  return (
    <>
      {
        isTablet ? <AuthMobileView isTablet={isTablet} />
            : <SignIn />
      }
    </>
  );
}

export default AuthBasePage;
