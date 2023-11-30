import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
    const accessToken = localStorage.getItem("accessToken");
    // Check if their is a accessToken logged in
    return accessToken ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
