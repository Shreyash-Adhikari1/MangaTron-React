import { Navigate, Outlet } from "react-router-dom";

//This makes it such that if a user isnt logged in , theyre taken back to login 
const ProtectedRoute = () => {
    const token = localStorage.getItem("token");

    return token ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;