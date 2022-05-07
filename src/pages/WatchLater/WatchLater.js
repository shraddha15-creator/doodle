import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { WatchLaterCard } from "../../components";
import { useAuth, useWatchLater } from "../../context";
import "./watchLater.css";

export const WatchLater = () => {
	const location = useLocation();
	const { watchLaterState } = useWatchLater();
	const { watchLater } = watchLaterState;

	const { user } = useAuth();

	return user.token ? (
		<div className="watch-later-container">
			<h4>Watch Later</h4>
			{/* <h6>( {watchLater.length} Videos )</h6> */}

			{watchLater &&
				watchLater.map((video) => {
					return <WatchLaterCard video={video} key={video.id} />;
				})}
		</div>
	) : (
		<Navigate to="/login" state={{ from: location?.pathname }} replace />
	);
};
