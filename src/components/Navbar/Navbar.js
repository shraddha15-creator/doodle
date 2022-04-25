import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
	return (
		<div className="navbar">
			<Link to="/" className="brand-name">
				DoodleTv
			</Link>
			<div className="nav-middle">
				<label>
					<i class="fas fa-search"></i>
					<input className="search-input" placeholder="Search video"></input>
				</label>
			</div>
			<div className="nav-right">
				<Link to="/profile" className="nav-right-items">
					<span>Hi, User</span>
					<i class="fas fa-user-circle"></i>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
