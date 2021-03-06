import React, { useState } from "react";
import { toast } from "react-toastify";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import "./navbar.css";
// import { useVideos } from "../../context";

export const Navbar = () => {
	const navigate = useNavigate();
	// const { searchHandler } = useVideos();
	const { user, setUser } = useAuth();
	const [userOptions, setUserOptions] = useState(false);
	// const [searchInput, setSearchInput] = useState("");

	const logoutHandler = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("userDetails");
		setUser({ token: "", userDetails: "", isLoggedIn: false });
		toast.success("Logged Out Successfully!");
		navigate("/");
	};

	return (
		<nav className="navbar">
			<Link to="/" className="brand-name">
				DoodleTv
			</Link>

			{/* TODO: will add this later  */}
			{/* <div className="nav-middle">
				<label>
					<i className="fas fa-search"></i>
					<input
						className="search-input"
						placeholder="Search video"
						value={searchInput}
						onChange={(e) => searchHandler(searchInput, setSearchInput, e)}
					></input>
				</label>
			</div> */}
			<div className="nav-right">
				<div className="nav-right-items">
					<Link to="/profile">
						<span className="greetUser">
							{user && user.userDetails.firstName}
						</span>
					</Link>
					<div
						className="ellipsis"
						onClick={() => setUserOptions(!userOptions)}
					>
						<i className="fas fa-user-circle icon-user"></i>
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
							{user && user.isLoggedIn ? (
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
