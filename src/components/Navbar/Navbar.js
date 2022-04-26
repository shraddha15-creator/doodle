import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
	const [userOptions, setUserOptions] = useState(false);
	return (
		<nav className="navbar">
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
				<div className="nav-right-items">
					<span>Hi, User</span>
					{/* --------- */}
					<div
						className="ellipsis"
						onClick={() => setUserOptions(!userOptions)}
					>
						<i class="fas fa-user-circle"></i>
						<div
							className={`ellipsis-items ${
								userOptions ? "display-true" : "display-hide"
							}`}
						>
							<Link to="/profile" className="elp-items">
								<div>
									<i class="fas fa-user-circle icon"></i>
									Profile
								</div>
							</Link>
							<Link to="/settings" className="elp-items">
								<div>
									<i class="fas fa-cog icon"></i>
									Settings
								</div>
							</Link>
							<Link to="/login" className="elp-items">
								<div>
									<i class="fas fa-sign-in-alt icon"></i>
									Login
								</div>
							</Link>
						</div>
					</div>
					{/* --------- */}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
