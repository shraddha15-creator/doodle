import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/auth-context";
import "../auth.css";

const Login = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const from = location?.state?.from?.pathname || "/";
	const { setUser } = useAuth();
	const [userLoginData, setUserLoginData] = useState({
		email: "",
		password: "",
	});

	const loginHandler = async (e, email, password) => {
		e.preventDefault();
		setUserLoginData({
			email: email,
			password: password,
		});

		try {
			const response = await axios.post("/api/auth/login", { email, password });
			localStorage.setItem(
				"userDetails",
				JSON.stringify(response.data.foundUser)
			);
			localStorage.setItem("token", response.data.encodedToken);
			setUser({
				userDetails: response.data.foundUser,
				token: response.data.encodedToken,
				isLoggedIn: true,
			});
			navigate(from, { replace: true });
		} catch (error) {
			console.error("Error while Login", error);
		}
	};

	return (
		<>
			<div className="auth-container">
				<div className="auth-component">
					<h2>
						Log In to <span className="brand-name">DoodleTv 🔐</span>
					</h2>
					<form
						onSubmit={(e) =>
							loginHandler(e, userLoginData.email, userLoginData.password)
						}
					>
						<div className="auth-inputs">
							<fieldset>
								<legend>Email</legend>
								<input
									type="email"
									id="email"
									name="email"
									placeholder="test@gmail.com"
									required
									value={userLoginData.email}
									onChange={(e) => {
										setUserLoginData((prev) => ({
											...prev,
											email: e.target.value,
										}));
									}}
								/>
							</fieldset>
							<fieldset>
								<legend>Password</legend>
								<input
									type="password"
									id="password"
									name="password"
									placeholder="********"
									required
									value={userLoginData.password}
									onChange={(e) => {
										setUserLoginData((prev) => ({
											...prev,
											password: e.target.value,
										}));
									}}
								/>
							</fieldset>
						</div>
						<button className="auth-btn btn-outlined" disabled>
							Login
						</button>
						<button
							className="auth-btn btn-filled"
							onClick={(e) =>
								loginHandler(e, "adarshbalika@gmail.com", "adarshBalika123")
							}
						>
							Login with Test Account
						</button>
						<div>
							Don't have an account?
							<Link to="/signup" className="link-signup">
								Signup
							</Link>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;
