import React from "react";
import { HomepageVideo, CategoriesChips, VideoCard } from "../../components";
import { useVideos } from "../../context/videos-context";
import "./videoListing.css";

const VideoListing = () => {
	const { videos } = useVideos();
	return (
		<div className="video-page">
			<HomepageVideo />
			<CategoriesChips />
			<div className="videos-container">
				{videos &&
					videos.map(
						({
							id,
							title,
							thumbnail,
							channel,
							views,
							uploadedOn,
							channelAvatar,
						}) => (
							<VideoCard
								key={id}
								id={id}
								title={title}
								thumbnail={thumbnail}
								channel={channel}
								views={views}
								uploadedOn={uploadedOn}
								channelAvatar={channelAvatar}
							/>
						)
					)}
			</div>
		</div>
	);
};

export default VideoListing;
