import React from "react";
import { useVideos } from "../../context/videos-context";
import { HomepageVideo, CategoriesChips, VideoCard } from "../../components";
import "./videoListing.css";

export const VideoListing = () => {
	const { videos } = useVideos();
	return (
		<div className="video-page">
			<HomepageVideo />
			<CategoriesChips videos={videos} />
			<div className="videos-container">
				{videos &&
					videos.map((video) => <VideoCard key={video.id} video={video} />)}
			</div>
		</div>
	);
};
