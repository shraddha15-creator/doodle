import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useHistory, useWatchLater } from "../../context";
import { addToWatchLater } from "../../services/addToWatchLater";
import { deleteFromHistory } from "../../services/deleteFromHistory";

const HistoryCard = ({ video }) => {
	const navigate = useNavigate();
	const { user } = useAuth();
	const { watchLaterDispatch } = useWatchLater();
	const { historyDispatch } = useHistory();

	const [showEllipsis, setShowEllipsis] = useState(false);
	return (
		<>
			<div className="history-video" key={video.id}>
				<div className="video-and-details">
					<img src={video.thumbnail} alt="history-video" />
					<div>
						<p className="history-title">{video.title}</p>
						<p className="history-channel">{video.channel}</p>
						<p className="history-description">
							{video.description.slice(0, 200)} ...
						</p>
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
						<div onClick={() => deleteFromHistory(video.id, historyDispatch)}>
							<i className="fas fa-times icon"></i>
							Remove from History
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HistoryCard;
