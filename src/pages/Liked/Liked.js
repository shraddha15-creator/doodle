import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { VideoCard } from "../../components";
import GoToHomeBtn from "../../components/GoToHomeBtn/GoToHomeBtn";
import { useAuth, useLikes } from "../../context";
import { token } from "../../services";
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
			<div className="liked-videos">
				{likesState.likes && likesState.likes.length === 0 ? (
					<div className="no-data">
						<p>No Playlist available</p>
						<GoToHomeBtn />
					</div>
				) : (
					likedVideos &&
					likedVideos.map((video) => {
						return <VideoCard key={video.id} video={video} />;
					})
				)}
			</div>
		</div>
	) : (
		<Navigate to="/login" state={{ from: location?.pathname }} replace />
	);
};
