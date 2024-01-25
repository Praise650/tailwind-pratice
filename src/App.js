import { Routes, Route } from 'react-router-dom';

// pages
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { routes } from './route/dashboard-route';
import { Suspense, lazy } from 'react';
import Dashboard from './pages/dashboard';


// components
import Loader from './components/widgets/loader';
import ProfilePage from './pages/Profile';
// import AuthBasePage from './layout/AuthBasePage';
import useMediaQuery from './hooks/useMediaQuery';
import AuthMobileView from './components/uis/auth/AuthMobileView';

// layouts
const DashboardLayout = lazy(() => import('./layout/DashboardLayout'));

function App() {
  // const isTablet = useMediaQuery(1024);
  const isTablet = useMediaQuery((width) => width < 1024);
  return (
    <Routes>
      <Route index element={
      isTablet ? <AuthMobileView isTablet={isTablet} />
      : <SignIn />} />
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route element={<DashboardLayout />}>
      <Route path='/dashboard' element={<Dashboard />} />
        {routes.map(function (route, index) {
          const { path, page: Component } = route;
          return (<Route
            key={index}
            path={path}
            element={
              <Suspense fallback={<Loader />}>
                <Component />
              </Suspense>
            } />)
        })}
      </Route>
    </Routes>
  );
}

export default App;
