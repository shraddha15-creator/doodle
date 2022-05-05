import React, { useState } from "react";
import { useVideos } from "../../context/videos-context";
import "./watchLater.css";

export const WatchLater = () => {
	const { videos } = useVideos();
	const [showEllipsis, setShowEllipsis] = useState(false);
	console.log(videos);
	return (
		<div className="watch-later-container">
			<h4>Watch Later</h4>
			<h6>( {videos.length} Videos )</h6>
			{videos &&
				videos.map((video) => {
					return (
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
					);
				})}
		</div>
	);
};
