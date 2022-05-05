import React, { useState } from "react";
import { WatchLaterCard } from "../../components";
import { useVideos } from "../../context/videos-context";
import "./watchLater.css";

export const WatchLater = () => {
	const { videos } = useVideos();

	return (
		<div className="watch-later-container">
			<h4>Watch Later</h4>
			<h6>( {videos.length} Videos )</h6>

			{videos &&
				videos.map((video) => {
					return <WatchLaterCard video={video} key={video.id} />;
				})}
		</div>
	);
};
