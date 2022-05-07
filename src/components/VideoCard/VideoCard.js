import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useWatchLater } from "../../context";
import { addToWatchLater } from "../../services/addToWatchLater";
import "./videoCard.css";

export const VideoCard = ({ video }) => {
	const { user } = useAuth();
	const navigate = useNavigate();
	const { watchLaterDispatch } = useWatchLater();
	const [showEllipsis, setShowEllipsis] = useState(false);
	return (
		<>
			<div className="single-video-card">
				<Link to={`/watch/${video.id}`}>
					<img src={video.thumbnail} alt={`img-${video.id}`} />
				</Link>
				<div className="video-name-and-menu">
					<Link to={`/watch/${video.id}`}>
						<h5 className="vid-title">{video.title}</h5>
					</Link>
					<div
						className="ellipsis"
						onClick={() => setShowEllipsis(!showEllipsis)}
					>
						<i className="fa fa-ellipsis-v"></i>
						<div
							className={`ellipsis-items ${
								showEllipsis ? "display-true" : "display-hide"
							}`}
						>
							<div
								onClick={() =>
									user.token
										? addToWatchLater(video, watchLaterDispatch)
										: navigate("/login")
								}
							>
								<i className="fas fa-clock icon"></i>
								Add to Watch Later
							</div>
							<div>
								<i className="fas fa-photo-video icon"></i>
								Add to Playlist
							</div>
						</div>
					</div>
				</div>
				<h6 className="video-channel">{video.channel}</h6>
				<div className="views-and-date">
					<h6>{video.views}</h6>
					<h6>{video.uploadedOn}</h6>
				</div>
			</div>
		</>
	);
};
