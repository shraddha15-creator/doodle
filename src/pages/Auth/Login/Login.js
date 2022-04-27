import React from "react";
import { Link } from "react-router-dom";
import "../auth.css";

const Login = () => {
	return (
		<>
			<div className="auth-container">
				<div className="auth-component">
					<h2>
						Log In to <span className="brand-name">DoodleTv 🔐</span>
					</h2>
					<div className="auth-inputs">
						<fieldset>
							<legend>Email</legend>
							<input />
						</fieldset>
						<fieldset>
							<legend>Password</legend>
							<input />
						</fieldset>
					</div>
					<button className="auth-btn btn-outlined">Login</button>
					<button className="auth-btn btn-filled">
						Login with Test Account
					</button>
					<div>
						Don't have an account?
						<Link to="/signup" className="link-signup">
							Signup
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
