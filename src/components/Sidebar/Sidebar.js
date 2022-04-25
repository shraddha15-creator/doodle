import React from "react";
import "./sidebar.css";

const Sidebar = () => {
	return (
		<div className="sidebar-container">
			<div className="sidebar-items">
				<i class="fas fa-home"></i>
				<span>Home</span>
			</div>
			<div className="sidebar-items">
				<i class="fas fa-heart"></i>
				<span>Liked</span>
			</div>
			<div className="sidebar-items">
				<i class="fas fa-photo-video"></i>
				<span>Playlist</span>
			</div>
			<div className="sidebar-items">
				<i class="fas fa-clock"></i>
				<span>Watch Later</span>
			</div>
			<div className="sidebar-items">
				<i class="fas fa-history"></i>
				<span>History</span>
			</div>
		</div>
	);
};

export default Sidebar;
