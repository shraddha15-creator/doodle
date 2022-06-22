import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth, useLikes, useVideos } from "../../context";
import { addToLikes, removeFromLikes } from "../../services";
import "./singleVid.css";

export const SingleVideo = () => {
	const { videoId } = useParams();
	const navigate = useNavigate();
	const { user } = useAuth();
	const { videos } = useVideos();
	const getSingleVideo = (videos, videoId) => {
		return videos.find((video) => video.id === videoId);
	};
	const video = getSingleVideo(videos, videoId);

	const { likesState, likesDispatch } = useLikes();
	const [isLiked, setIsLiked] = useState(false);

	return (
		<>
			<div className="single-vid-card">
				<div className="player-wrapper">
					<ReactPlayer
						className="react-player"
						url={`https://www.youtube.com/embed/${video.id} `}
						width="100%"
						height="100%"
						controls={true}
					/>
				</div>

				<div className="video-detail">
					<p className="single-video-title">{video.title}</p>
					<div className="views-like-dislike">
						<p>56 views || Oct 12 2021</p>
						<div className="like-save-dislike">
							{isLiked ? (
								<i
									className="fas fa-thumbs-up liked-icon"
									onClick={() =>
										removeFromLikes(
											video,
											likesState,
											isLiked,
											setIsLiked,
											likesDispatch
										)
									}
								></i>
							) : (
								<i
									className="far fa-thumbs-up "
									onClick={() =>
										user.token
											? addToLikes(video, isLiked, setIsLiked, likesDispatch)
											: navigate("/login")
									}
								></i>
							)}

							{/* <i className="far fa-thumbs-down"></i> */}
							<i className="far fa-bookmark"></i>
						</div>
					</div>
				</div>
				<div className="single-vid-disc">
					<div className="channel-detail">
						<img
							src={video.channelAvatar}
							className="channel-avatar"
							alt={`img-${video.channel}`}
						/>
						<div>
							<p>{video.channel}</p>
							<p>{video.subscription} Subscribers</p>
						</div>
					</div>
					<p className="video-disc">{video.description}</p>
				</div>
			</div>
		</>
	);
};
