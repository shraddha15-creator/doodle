import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth, useWatchLater, useHistory } from "../../context";
import { addToWatchLater, addToHistory } from "../../services";
import { PlaylistModal } from "../PlaylistModal/PlaylistModal";
import "./videoCard.css";

export const VideoCard = ({ video, currentPath }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const { user } = useAuth();
	const { watchLaterDispatch } = useWatchLater();
	const { historyDispatch } = useHistory();
	const [showEllipsis, setShowEllipsis] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<div className="single-video-card">
				<Link to={`/watch/${video.id}`}>
					<img
						src={video.thumbnail}
						alt={`img-${video.id}`}
						onClick={() =>
							user.token
								? addToHistory(video, historyDispatch)
								: navigate("/login")
						}
					/>
				</Link>
				<div className="video-name-and-menu">
					<Link to={`/watch/${video.id}`}>
						<h5
							className="vid-title"
							onClick={() =>
								user.token
									? addToHistory(video, historyDispatch)
									: navigate("/login")
							}
						>
							{video.title}
						</h5>
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
							<div
								onClick={() => {
									user.token
										? setIsModalOpen(!isModalOpen)
										: navigate("/login");
								}}
							>
								<i className="fas fa-photo-video icon"></i>
								{currentPath == location.pathname
									? "Remove from Playlist"
									: "Add to Playlist"}
							</div>
						</div>
					</div>
				</div>
				{isModalOpen && (
					<PlaylistModal
						modal={isModalOpen}
						closeModal={setIsModalOpen}
						video={video}
					/>
				)}
				<h6 className="video-channel">{video.channel}</h6>
				<div className="views-and-date">
					<h6>{video.views}</h6>
					<h6>{video.uploadedOn}</h6>
				</div>
			</div>
		</>
	);
};
