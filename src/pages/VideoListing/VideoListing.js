import React from "react";
import { HomepageVideo, CategoriesChips, VideoCard } from "../../components";
import { useVideos } from "../../context/videos-context";
import "./videoListing.css";

export const VideoListing = () => {
	const { videos } = useVideos();
	return (
		<div className="video-page">
			<HomepageVideo />
			<CategoriesChips />
			<div className="videos-container">
				{videos &&
					videos.map((video) => <VideoCard key={video.id} video={video} />)}
			</div>
		</div>
	);
};
