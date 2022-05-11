import axios from "axios";
import React, { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { LikedVideoCard } from "../../components";
import { useAuth, useLikes } from "../../context";
import { token } from "../../services/token";
import "./liked.css";

const encodedToken = token();

export const Liked = () => {
	const location = useLocation();
	const { user } = useAuth();
	const { likesState } = useLikes();

	const [likedVideos, setLikedVideos] = useState([]);

	const getLikesData = async () => {
		try {
			const response = await axios.get("/api/user/likes", {
				headers: { authorization: encodedToken },
			});
			setLikedVideos(response.data.likes);
		} catch (error) {
			console.error("ERROR WHILE GETTNG LIKED VIDEOS");
		}
	};

	useEffect(() => {
		getLikesData();
	}, []);

	return user.token ? (
		<div className="liked-container">
			<h4>Liked videos</h4>
			<div className="liked-videos">
				{likesState.likes && likesState.likes.length === 0 ? (
					<h4 className="no-history">You havn't liked any video yet!</h4>
				) : (
					likedVideos &&
					likedVideos.map((video) => {
						return <LikedVideoCard key={video.id} video={video} />;
					})
				)}
			</div>
		</div>
	) : (
		<Navigate to="/login" state={{ from: location?.pathname }} replace />
	);
};
