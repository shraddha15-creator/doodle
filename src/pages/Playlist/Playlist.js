import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
				{playlistData &&
					playlistData?.map((playlist) => {
						return (
							<div key={playlist._id} className="playlist-page-card">
								<div className="playlist-thumbnail-wrapper ">
									<span className="playlist-vid-count">
										{playlist.videos.length}
									</span>
									<i className="fas fa-photo-video playlist-vid-count"></i>
								</div>
								<img
									src={playlist.videos[0].thumbnail}
									alt={playlist.videos[0].thumbnail}
									className="playlist-card-thumbnail"
								/>
								<div>{playlist.title}</div>
								<Link
									to={`/playlist/${playlist._id}`}
									className="view-playlist-btn"
								>
									View full playlist
								</Link>
							</div>
						);
					})}
			</div>
		</>
	);
};
