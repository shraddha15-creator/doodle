import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth-context";

const PrivateRoute = ({ children }) => {
	const location = useLocation();
	const { user } = useAuth();
	console.log(user);
	return user.token ? (
		children
	) : (
		<Navigate to="/login" state={{ from: location?.pathname }} replace />
	);
};

export default PrivateRoute;
