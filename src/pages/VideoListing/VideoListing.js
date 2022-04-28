import React from "react";
import "./videoListing.css";
import { HomepageVideo, CategoriesChips, VideoCard } from "../../components";
import { useVideos } from "../../context/videos-context";

const VideoListing = () => {
	const { videos } = useVideos();
	return (
		<div className="video-page">
			<HomepageVideo />
			<CategoriesChips />
			<div className="videos-container">
				{videos &&
					videos.map(
						({ _id, title, thumbnail, channel, views, uploadedOn }) => (
							<VideoCard
								key={_id}
								id={_id}
								title={title}
								thumbnail={thumbnail}
								channel={channel}
								views={views}
								uploadedOn={uploadedOn}
							/>
						)
					)}
			</div>
		</div>
	);
};

export default VideoListing;
