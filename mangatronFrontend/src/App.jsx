import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Login = lazy(() => import("./components/public/Login.jsx"));
const Registration = lazy(() => import("./components/public/Registration.jsx"));
const Home = lazy(()=> import('./components/public/Home.jsx'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/home" element={<Home/>} />
          
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
