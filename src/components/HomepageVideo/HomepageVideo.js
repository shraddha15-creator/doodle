import React from "react";
import HeroVideo from "../../assets/hero-video.mp4";
import "./homepageVideo.css";

export const HomepageVideo = () => {
	return (
		<>
			<div className="background-video w-background-video">
				<video autoPlay loop muted className="bg-hero-video">
					<source src={HeroVideo} type="video/mp4" />
				</video>
				<div className="text-on-video">
					<h1 className="text-one">Got a Creative Idea?</h1>
					<h1 className="text-two">and Want to put it on Paper?</h1>
				</div>
			</div>
		</>
	);
};
