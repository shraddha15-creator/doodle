import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import "./navbar.css";

const Navbar = () => {
	const navigate = useNavigate();
	const { user, setUser } = useAuth();
	const [userOptions, setUserOptions] = useState(false);

	const logoutHandler = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("userDetails");
		setUser({ token: "", userDetails: "", isLoggedIn: false });
		navigate("/");
	};

	return (
		<nav className="navbar">
			<Link to="/" className="brand-name">
				DoodleTv
			</Link>
			<div className="nav-middle">
				<label>
					<i className="fas fa-search"></i>
					<input className="search-input" placeholder="Search video"></input>
				</label>
			</div>
			<div className="nav-right">
				<div className="nav-right-items">
					<Link to="/login">
						<span>Hi,{user.userDetails.firstName} </span>
					</Link>
					<div
						className="ellipsis"
						onClick={() => setUserOptions(!userOptions)}
					>
						<i className="fas fa-user-circle"></i>
						<div
							className={`ellipsis-items ${
								userOptions ? "display-true" : "display-hide"
							}`}
						>
							<Link to="/profile" className="elp-items">
								<div>
									<i className="fas fa-user-circle icon"></i>
									Profile
								</div>
							</Link>
							<Link to="/settings" className="elp-items">
								<div>
									<i className="fas fa-cog icon"></i>
									Settings
								</div>
							</Link>
							{user.isLoggedIn ? (
								<div onClick={logoutHandler}>
									<i className="fas fa-sign-in-alt icon"></i>
									Logout
								</div>
							) : (
								<Link to="/login" className="elp-items">
									<div>
										<i className="fas fa-sign-in-alt icon"></i>
										Login
									</div>
								</Link>
							)}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
