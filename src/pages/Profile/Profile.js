import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useLikes, usePlaylist, useWatchLater } from "../../context";
import "./profile.css";

export const Profile = () => {
	const navigate = useNavigate();

	const { user, setUser } = useAuth();
	console.log(user);
	const { likesState } = useLikes();
	const { watchLaterState } = useWatchLater();
	const { playlistState } = usePlaylist();
	console.log(playlistState);

	const logoutHandler = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("userDetails");
		setUser({ token: "", userDetails: "", isLoggedIn: false });
		navigate("/");
	};

	return (
		<>
			<div className="profile-container">
				<div className="profile-logout-btn">
					<h2>My Profile</h2>
					{user && user.isLoggedIn ? (
						<button onClick={logoutHandler} className="logout-btn">
							<i className="fas fa-sign-in-alt icon"></i>
							Logout
						</button>
					) : (
						<Link to="/login" className="elp-items">
							<div>
								<i className="fas fa-sign-in-alt icon"></i>
								Login
							</div>
						</Link>
					)}
				</div>
				<div className="profile-user-details">
					<span className="profile-user-name">
						{user
							? user.userDetails.firstName + " " + user.userDetails.lastName
							: "user"}
					</span>
					<span className="profile-user-joined">
						Joined DoodleTv On:{" "}
						{user ? user.userDetails.createdAt.slice(0, 10) : "user"}
					</span>
					<span className="profile-user-email">
						{user ? user.userDetails.email : "user"}
					</span>
				</div>
				<div className="profile-lists">
					<p className="profile-lists-item">Liked: {likesState.likes.length}</p>
					<p className="profile-lists-item">
						Watch later: {watchLaterState.watchLater.length}
					</p>
					<p className="profile-lists-item">Playlist: {playlistState.length}</p>
				</div>
			</div>
		</>
	);
};
