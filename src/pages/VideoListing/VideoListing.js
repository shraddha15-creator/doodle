import React from "react";
import "./videoListing.css";
import HomepageVideo from "../../components/HomepageVideo/HomepageVideo";
import CategoriesChips from "../../components/CategoriesChips/CategoriesChips";
import VideoCard from "../../components/VideoCard/VideoCard";
import { useVideos } from "../../context/videos-context";

const VideoListing = () => {
	const { videos } = useVideos();
	return (
		<div className="video-page">
			<HomepageVideo />
			<CategoriesChips />
			<div className="videos-container">
				{videos &&
					videos.map(({ id, title, thumbnail, channel, views, uploadedOn }) => {
						return (
							<VideoCard
								key={id}
								id={id}
								title={title}
								thumbnail={thumbnail}
								channel={channel}
								views={views}
								uploadedOn={uploadedOn}
							/>
						);
					})}
			</div>
		</div>
	);
};

export default VideoListing;
