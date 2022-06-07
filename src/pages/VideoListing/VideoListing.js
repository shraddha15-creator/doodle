import React from "react";
import { useVideos } from "../../context/videos-context";
import { HomepageVideo, CategoriesChips, VideoCard } from "../../components";
import "./videoListing.css";

export const VideoListing = () => {
	const { videos, filteredVideos } = useVideos();
	return (
		<div className="video-page">
			<HomepageVideo />
			<CategoriesChips videos={videos} />
			<div className="videos-container">
				{filteredVideos &&
					filteredVideos.map((video) => (
						<VideoCard key={video.id} video={video} />
					))}
			</div>
		</div>
	);
};
