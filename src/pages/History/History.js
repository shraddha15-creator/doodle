import axios from "axios";
import React, { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import HistoryCard from "../../components/HistoryCard/HistoryCard";
import { useAuth, useHistory } from "../../context";
import { token } from "../../services/token";
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
			setHistoryVideos(res.data.history);
		} catch (error) {
			console.error("error while getting history", error);
		}
	};

	useEffect(() => {
		getHistoryData(history);
	}, []);

	return user.token ? (
		<div className="history-container">
			<h4>Watch history</h4>
			<div>
				{history && history.length == 0 ? (
					<h4 className="no-history">No history available</h4>
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
