import { Routes, Route } from 'react-router-dom';

// pages
import SignIn from './pages/signin';
import SignUp from './pages/sign-up';
import { routes } from './route/dashboard-route';
import { Suspense, lazy } from 'react';
import Dashboard from './pages/dashboard';


// components
import Loader from './components/widgets/loader';

// layouts
const DashboardLayout = lazy(() => import('./layout/dashboard-layout'));

function App() {
  return (
    <Routes>
      <Route index element={<SignIn />} />
      <Route path="/auth/signup" element={<SignUp />} />
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
