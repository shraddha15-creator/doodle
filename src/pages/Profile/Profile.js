import React from "react";
import { useAuth, useLikes, usePlaylist, useWatchLater } from "../../context";
import "./profile.css";

export const Profile = () => {
	const { user } = useAuth();
	console.log(user);
	const { likesState } = useLikes();
	const { watchLaterState } = useWatchLater();
	const { playlistState } = usePlaylist();
	console.log(playlistState);
	return (
		<>
			<div className="profile-container">
				<div className="profile-logout-btn">
					<h2>My Profile</h2>
					<button className="logout-btn">Logout</button>
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
