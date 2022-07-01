import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GoToHomeBtn from "../../components/GoToHomeBtn/GoToHomeBtn";
import { token } from "../../services";
import "./playlist.css";

const encodedToken = token();

export const Playlist = () => {
	const [playlistData, setPlaylistData] = useState([]);

	const getPlaylistData = async () => {
		try {
			const response = await axios.get("/api/user/playlists", {
				headers: {
					authorization: encodedToken,
				},
			});
			setPlaylistData(response.data.playlists);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getPlaylistData();
	}, []);

	return (
		<>
			<div className="playlist-container">
				{playlistData && playlistData.length === 0 ? (
					<div className="no-data">
						<p>No Playlist available</p>
						<GoToHomeBtn />
					</div>
				) : (
					playlistData &&
					playlistData?.map((playlist) => {
						return (
							<div key={playlist?._id} className="playlist-page-card">
								<img
									src={playlist?.videos[0]?.thumbnail}
									alt={playlist?.videos[0]?.thumbnail}
									className="playlist-card-thumbnail"
								/>
								<div>
									#{playlist?.title}
									<span className="playlist-vid-count">
										{" "}
										({playlist?.videos?.length})
									</span>
								</div>
								<Link
									to={`/playlist/${playlist?._id}`}
									className="view-playlist-btn"
								>
									View full playlist{" "}
									<i className="fas fa-external-link-alt"></i>
								</Link>
							</div>
						);
					})
				)}
			</div>
		</>
	);
};
