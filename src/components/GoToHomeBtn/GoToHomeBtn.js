import React from "react";
import { Link } from "react-router-dom";
import "./goHomeBtn.css";

const GoToHomeBtn = () => {
	return (
		<button className="go-home-container">
			<Link to="/" className="go-home-btn">
				Go to Home
			</Link>
		</button>
	);
};

export default GoToHomeBtn;
