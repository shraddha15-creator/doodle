import React, { useState } from "react";
import "./videoCard.css";

const VideoCard = ({ id, title, thumbnail, channel, views, uploadedOn }) => {
	const [showEllipsis, setShowEllipsis] = useState(false);
	return (
		<>
			<div className="single-video-card" key={id}>
				<img src={thumbnail} alt={`img-${id}`} />
				<div className="video-name-and-menu">
					<h5>{title}</h5>
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

export default VideoCard;
