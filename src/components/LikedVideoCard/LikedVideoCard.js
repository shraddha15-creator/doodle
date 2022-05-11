import React, { useState } from "react";
import { Link } from "react-router-dom";

export const LikedVideoCard = ({ video }) => {
	const [showEllipsis, setShowEllipsis] = useState(false);

	return (
		<>
			<div className="liked-video-card">
				<Link to={`/watch`}>
					<img src={video.thumbnail} alt={`img-12`} />
				</Link>
				<div className="video-name-and-menu">
					<Link to={`/watch`}>
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
							<div>
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
				<h6 className="video-channel">Artisty</h6>
				<div className="views-and-date">
					<h6>{video.subscription}</h6>
					<h6>{video.uploadedOn}</h6>
				</div>
			</div>
		</>
	);
};
