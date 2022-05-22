import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { WatchLaterCard } from "../../components";
import GoToHomeBtn from "../../components/GoToHomeBtn/GoToHomeBtn";
import { useAuth, useWatchLater } from "../../context";
import "./watchLater.css";

export const WatchLater = () => {
	const location = useLocation();
	const { watchLaterState } = useWatchLater();
	const { watchLater } = watchLaterState;

	const { user } = useAuth();

	return user.token ? (
		<div className="watch-later-container">
			{watchLater && watchLater.length === 0 ? (
				<div className="no-data">
					<p>No watch later available</p>
					<GoToHomeBtn />
				</div>
			) : (
				watchLater &&
				watchLater.map((video) => {
					return <WatchLaterCard video={video} key={video.id} />;
				})
			)}
		</div>
	) : (
		<Navigate to="/login" state={{ from: location?.pathname }} replace />
	);
};
