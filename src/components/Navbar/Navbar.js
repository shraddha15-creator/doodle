import React from "react";
import "./navbar.css";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="brand-name">DoodleTv</div>
			<div className="nav-middle">
				<label>
					<i class="fas fa-search"></i>
					<input className="search-input" placeholder="Search video"></input>
				</label>
			</div>
			<div className="nav-right">
				<span>Login</span>
				<span>User</span>
			</div>
		</div>
	);
};

export default Navbar;
