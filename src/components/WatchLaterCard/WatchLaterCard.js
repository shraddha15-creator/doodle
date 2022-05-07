import React, { useState } from "react";
import { useWatchLater } from "../../context/watchlater-context";
import { deleteFromWatchLater } from "../../services/deleteFromWatchLater";

export const WatchLaterCard = ({ video }) => {
	const [showEllipsis, setShowEllipsis] = useState(false);
	const { watchLaterDispatch } = useWatchLater();

	return (
		<>
			<div className="watch-later-video" key={video.id}>
				<div className="video-and-details">
					<img src={video.thumbnail} alt="wL-video" />
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
							onClick={() => deleteFromWatchLater(video.id, watchLaterDispatch)}
						>
							<i className="fas fa-clock icon"></i>
							Remove from Watch Later
						</div>
						<div>
							<i className="fas fa-photo-video icon"></i>
							Add to Playlist
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
