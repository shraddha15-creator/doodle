import React from "react";
import { useParams } from "react-router-dom";
import { useVideos } from "../../context/videos-context";
import "./singleVid.css";

const SingleVideo = () => {
	const { videoId } = useParams();
	const { videos } = useVideos();
	const getSingleVideo = (videos, videoId) => {
		return videos.find((video) => video.id === videoId);
	};
	const video = getSingleVideo(videos, videoId);

	return (
		<>
			<div className="single-vid-card">
				<div className="video-frame">
					<iframe
						width="100%"
						height="100%"
						src={`https://www.youtube.com/embed/${video.id} `}
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen=""
					></iframe>
				</div>
				<div className="video-detail">
					<p className="single-video-title">{video.title}</p>
					<div className="views-like-dislike">
						<p>56 views || Oct 12 2021</p>
						<div className="like-save-dislike">
							<i class="far fa-thumbs-up"></i>
							<i class="far fa-thumbs-down"></i>
							<i class="far fa-bookmark"></i>
						</div>
					</div>
				</div>
				<div className="single-vid-disc">
					<div className="channel-detail">
						<img
							src={video.channelAvatar}
							className="channel-avatar"
							alt={`img-${video.channel}`}
						/>
						<div>
							<p>{video.channel}</p>
							<p>{video.subscription} Subscribers</p>
						</div>
					</div>
					<p className="video-disc">{video.description}</p>
				</div>
			</div>
		</>
	);
};

export default SingleVideo;
