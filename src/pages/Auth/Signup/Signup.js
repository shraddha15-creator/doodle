import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/auth-context";
import "../auth.css";

const Signup = () => {
	const navigate = useNavigate();
	const { setUser } = useAuth();
	const [userSignupData, setUserSignupData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const signupHandler = async (userDetails) => {
		const { firstName, lastName, email, password } = userDetails;
		try {
			const response = await axios.post("/api/auth/signup", {
				firstName,
				lastName,
				email,
				password,
			});
			console.log(response);
			localStorage.setItem("token", response.data.encodedToken);
			localStorage.setItem(
				"userDetails",
				JSON.stringify(response.data.createdUser)
			);
			setUser({
				token: response.data.encodedToken,
				userDetails: response.data.createdUser,
				isLoggedIn: true,
			});
			navigate("/");
		} catch (error) {
			console.error("while signing up", error);
		}
	};

	const submitHandler = (e) => {
		e.preventDefault();
		userSignupData.password === userSignupData.confirmPassword
			? signupHandler(userSignupData)
			: console.log("Password doest match");
	};

	return (
		<>
			<div className="auth-container">
				<div className="auth-component">
					<h2>
						Signup to <span className="brand-name">DoodleTv 🔐</span>
					</h2>
					<form onSubmit={submitHandler}>
						<div className="auth-inputs">
							<fieldset>
								<legend>First Name</legend>
								<input
									type="text"
									id="firstname"
									placeholder="First Name"
									name="firstname"
									value={userSignupData.firstName}
									onChange={(e) =>
										setUserSignupData((prev) => ({
											...prev,
											firstName: e.target.value,
										}))
									}
								/>
							</fieldset>
							<fieldset>
								<legend>Last Name</legend>
								<input
									type="text"
									id="lastname"
									placeholder="Last Name"
									name="lastname"
									value={userSignupData.lastName}
									onChange={(e) =>
										setUserSignupData((prev) => ({
											...prev,
											lastName: e.target.value,
										}))
									}
								/>
							</fieldset>
							<fieldset>
								<legend>Email</legend>
								<input
									type="email"
									id="email"
									placeholder="test@gmail.com"
									name="email"
									value={userSignupData.email}
									onChange={(e) =>
										setUserSignupData((prev) => ({
											...prev,
											email: e.target.value,
										}))
									}
								/>
							</fieldset>
							<fieldset>
								<legend>Password</legend>
								<input
									type="password"
									id="password"
									placeholder="********"
									name="password"
									value={userSignupData.password}
									onChange={(e) =>
										setUserSignupData((prev) => ({
											...prev,
											password: e.target.value,
										}))
									}
								/>
							</fieldset>
							<fieldset>
								<legend>Confirm Password</legend>
								<input
									type="password"
									id="confirmPassword"
									placeholder="********"
									name="confirmPassword"
									value={userSignupData.confirmPassword}
									onChange={(e) =>
										setUserSignupData((prev) => ({
											...prev,
											confirmPassword: e.target.value,
										}))
									}
								/>
							</fieldset>
						</div>
						<button className="auth-btn btn-filled">Signup</button>
						<div>
							Already have an account?
							<Link to="/login" className="link-signup">
								Login
							</Link>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Signup;
