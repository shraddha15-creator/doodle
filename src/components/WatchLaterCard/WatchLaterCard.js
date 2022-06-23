import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useHistory, useWatchLater } from "../../context";
import { addToHistory, deleteFromWatchLater } from "../../services";
import { PlaylistModal } from "../PlaylistModal/PlaylistModal";

export const WatchLaterCard = ({ video }) => {
	const navigate = useNavigate();
	const { user } = useAuth();
	const { historyDispatch } = useHistory();
	const { watchLaterDispatch } = useWatchLater();
	const [showEllipsis, setShowEllipsis] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<Link to={`/watch/${video.id}`}>
				<div
					className="watch-later-card"
					key={video.id}
					onClick={() =>
						user.token
							? addToHistory(video, historyDispatch)
							: navigate("/login")
					}
				>
					<div className="video-and-details">
						<img
							src={video.thumbnail}
							alt="wL-video"
							className="wL-thumbnail"
						/>
						<div>
							<p className="watch-later-title">{video.title}</p>
							<p className="watch-later-channel">{video.channel}</p>
						</div>
					</div>
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
									deleteFromWatchLater(video.id, watchLaterDispatch)
								}
							>
								<i className="fas fa-clock icon"></i>
								Remove from Watch Later
							</div>
							<div
								onClick={() => {
									console.log("open modal to add to pl from wl card");
									setIsModalOpen(!isModalOpen);
								}}
							>
								<i className="fas fa-photo-video icon"></i>
								Add to Playlist
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
			</Link>
		</>
	);
};
