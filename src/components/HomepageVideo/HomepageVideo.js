import React from "react";
import { Link } from "react-router-dom";
import HeroVideo from "../../assets/hero-video.mp4";
import "./homepageVideo.css";

const HomepageVideo = () => {
	return (
		<>
			<div className="background-video w-background-video">
				<video autoPlay loop muted className="bg-hero-video">
					<source
						// src="https://prodcdn.kidoodle.tv/kidoodle-2019-update/videos/video-banner-update2.mp4"
						src={HeroVideo}
						type="video/mp4"
					/>
				</video>
				<div className="text-on-video">
					<h1 className="text-one">Got a Creative Idea?</h1>
					<h1 className="text-two">and Want to put it on Paper?</h1>
					<Link to="/">
						<button className="explore-btn">Explore Now</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default HomepageVideo;
