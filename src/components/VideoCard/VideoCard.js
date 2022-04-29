import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./videoCard.css";

export const VideoCard = ({
	id,
	title,
	thumbnail,
	channel,
	views,
	uploadedOn,
}) => {
	const [showEllipsis, setShowEllipsis] = useState(false);
	return (
		<>
			<div className="single-video-card">
				<Link to={`/watch/${id}`}>
					<img src={thumbnail} alt={`img-${id}`} />
				</Link>
				<div className="video-name-and-menu">
					<Link to={`/watch/${id}`}>
						<h5 className="vid-title">{title}</h5>
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
				<h6 className="video-channel">{channel}</h6>
				<div className="views-and-date">
					<h6>{views}</h6>
					<h6>{uploadedOn}</h6>
				</div>
			</div>
		</>
	);
};
