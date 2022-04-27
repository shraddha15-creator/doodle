import React from "react";
import { Link } from "react-router-dom";
import "../auth.css";

const Signup = () => {
	return (
		<>
			<div className="auth-container">
				<div className="auth-component">
					<h2>
						Signup to <span className="brand-name">DoodleTv 🔐</span>
					</h2>
					<div className="auth-inputs">
						<fieldset>
							<legend>Name</legend>
							<input />
						</fieldset>
						<fieldset>
							<legend>Email</legend>
							<input />
						</fieldset>
						<fieldset>
							<legend>Password</legend>
							<input />
						</fieldset>
					</div>
					<button className="auth-btn btn-filled">Signup</button>
					<div>
						Already have an account?
						<Link to="/login" className="link-signup">
							Login
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Signup;
