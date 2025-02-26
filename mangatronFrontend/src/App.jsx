import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/private/ProtectedRoute.jsx";

const Login = lazy(() => import("./components/public/Login.jsx"));
const Registration = lazy(() => import("./components/public/Registration.jsx"));
const Admin = lazy(()=> import("./components/private/Admin.jsx"))
const Home = lazy(() => import("./components/public/Home.jsx"));
const Store = lazy(() => import("./components/public/Store.jsx"));
const LatestReleases = lazy(() => import("./components/public/LatestReleases.jsx"));


function App() {
  return (
    <Router>
      <ToastContainer />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />

          {/* Protected Routes - Require Login */}
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/store" element={<Store />} />
            <Route path="/latest" element={<LatestReleases />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
