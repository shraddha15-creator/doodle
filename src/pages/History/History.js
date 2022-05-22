import axios from "axios";
import React, { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import GoToHomeBtn from "../../components/GoToHomeBtn/GoToHomeBtn";
import HistoryCard from "../../components/HistoryCard/HistoryCard";
import { useAuth, useHistory } from "../../context";
import { token } from "../../services";
import "./history.css";

const encodedToken = token();

export const History = () => {
	const location = useLocation();
	const { user } = useAuth();
	const { historyState } = useHistory();
	const { history } = historyState;

	const [historyVideos, setHistoryVideos] = useState([]);

	const getHistoryData = async (history) => {
		try {
			const res = await axios.get("/api/user/history", {
				headers: { authorization: encodedToken },
			});
			setHistoryVideos(res.data.history.reverse());
		} catch (error) {
			console.error("error while getting history", error);
		}
	};

	useEffect(() => {
		getHistoryData(history);
	}, []);

	const clearHistoryHandler = async () => {
		try {
			const response = await axios.delete("/api/user/history/all", {
				headers: { authorization: encodedToken },
			});
			setHistoryVideos(response.data.history);
		} catch (error) {
			console.error("error while getting history", error);
		}
	};

	return user.token ? (
		<div className="history-container">
			<div className="title-button">
				<div>Watch history</div>
				<button onClick={clearHistoryHandler} className="clear-button">
					Clear History
				</button>
			</div>
			<div>
				{history && history.length === 0 ? (
					<div className="no-data">
						<p>No Playlist available</p>
						<GoToHomeBtn />
					</div>
				) : (
					historyVideos &&
					historyVideos.map((video) => {
						return <HistoryCard video={video} key={video.id} />;
					})
				)}
			</div>
		</div>
	) : (
		<Navigate to="/login" state={{ from: location?.pathname }} replace />
	);
};
