import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Liked = () => {
	const [showEllipsis, setShowEllipsis] = useState(false);

	return (
		<>
			<div className="single-video-card">
				<Link to={`/watch`}>
					<img
						src="https://i.ytimg.com/vi/EGLXOVhxLco/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwIHbKYPuFIWwsFvTiCawjRGIKRA"
						alt={`img-12`}
					/>
				</Link>
				<div className="video-name-and-menu">
					<Link to={`/watch`}>
						<h5 className="vid-title">
							Doodle for Beginners | Draw step by step With Me
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
					<h6>12K</h6>
					<h6>1 Years ago</h6>
				</div>
			</div>
		</>
	);
};
