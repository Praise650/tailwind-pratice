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
import AuthBasePage from './layout/AuthBasePage';
import RegisterBasePage from './layout/RegisterBasePage';

// layouts
const DashboardLayout = lazy(() => import('./layout/DashboardLayout'));

function App() {
  const isLargeScreen = window.innerWidth > 1024; // You can adjust the breakpoint as needed

  return (
    <Routes>
      <Route index element={<AuthBasePage />} />
      <Route path="/auth/signup" element={<RegisterBasePage />} />
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
