import React from "react";

const VideoCard = ({ id, title, thumbnail, channel, views, uploadedOn }) => {
	return (
		<>
			<div className="single-video-card" key={id}>
				<img src={thumbnail} alt={`img-${id}`} />
				<div className="video-name-and-menu">
					<h5>{title}</h5>
					<i class="fas fa-ellipsis-v"></i>
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
