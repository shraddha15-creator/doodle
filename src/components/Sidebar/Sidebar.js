import React from "react";
import { NavLink } from "react-router-dom";
import { Toast } from "../Toast";
import "./sidebar.css";

export const Sidebar = () => {
	return (
		<div className="sidebar-container sidebar-hidden">
			<NavLink
				to="/"
				className={({ isActive }) =>
					isActive ? "sidebar-items active" : "sidebar-items"
				}
			>
				<div className="sidebar-items">
					<i className="fas fa-home"></i>
					<span>Home</span>
				</div>
			</NavLink>
			<NavLink
				to="/likedVideos"
				className={({ isActive }) =>
					isActive ? "sidebar-items active" : "sidebar-items"
				}
			>
				<div className="sidebar-items">
					<i className="fas fa-heart"></i>
					<span>Liked</span>
				</div>
			</NavLink>
			<NavLink
				to="/playlist"
				className={({ isActive }) =>
					isActive ? "sidebar-items active" : "sidebar-items"
				}
			>
				<div className="sidebar-items">
					<i className="fas fa-photo-video"></i>
					<span>Playlist</span>
				</div>
			</NavLink>
			<NavLink
				to="/watchLater"
				className={({ isActive }) =>
					isActive ? "sidebar-items active" : "sidebar-items"
				}
			>
				<div className="sidebar-items">
					<i className="fas fa-clock"></i>
					<span>Watch Later</span>
				</div>
			</NavLink>
			<NavLink
				to="/history"
				className={({ isActive }) =>
					isActive ? "sidebar-items active" : "sidebar-items"
				}
			>
				<div className="sidebar-items">
					<i className="fas fa-history"></i>
					<span>History</span>
				</div>
			</NavLink>
			<Toast />
		</div>
	);
};
