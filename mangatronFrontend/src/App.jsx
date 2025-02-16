import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Login = lazy(() => import("./components/public/Login.jsx"));
const Registration = lazy(() => import("./components/public/Registration.jsx"));
const Home = lazy(()=> import('./components/public/Home.jsx'));
const Store = lazy(()=> import('./components/public/Store.jsx'));
const LatestReleases = lazy(()=> import('./components/public/LatestReleases.jsx'));
const Genres = lazy(()=> import('./components/public/Genres.jsx'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/store" element={<Store/>}/>
          <Route path="/latest" element={<LatestReleases/>}/>
          <Route path="/genre" element={<Genres/>}/>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
