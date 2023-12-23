import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import SignIn from './pages/signin';
import SignUp from './pages/sign-up';
import { routes } from './route/dashboard-route';
import { lazy } from 'react';
import Home from './pages/home';

// layouts
const DashboardLayout = lazy(() => import('./layout/dashboard-layout'));

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" Component={<Home />} />
      <Route path="/auth/signin" element={<SignIn />} />
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path='/' element={<DashboardLayout />}>
        {routes.map(function (route, index) {
          const { path, page: Component } = route;
          return <Route key={index} path={route.path} element={route.page} />
        })}
      </Route>
      {/* <div className="App bg-black h-screen w-screen text-center text-xl text-[#61dafb]">
      <header className="App-header"> */}
      {/* </header> */}
      {/* </div> */}
      </Routes>
    </Router>
  );
}

export default App;
