import React, { useState } from "react";
import { usePlaylist } from "../../context";
import {
	addToPlaylist,
	createPlaylistHandler,
	removeFromPlaylist,
} from "../../services/playlistServices";

import "./playlist-modal.css";

export const PlaylistModal = ({ closeModal, video }) => {
	const { playlistState, playlistDispatch } = usePlaylist();
	const [newCreatedPlaylist, setNewCreatedPlaylist] = useState({
		title: "",
	});

	const playlistInputhandler = (e) => {
		setNewCreatedPlaylist({
			...newCreatedPlaylist,
			title: e.target.value,
		});
	};

	return (
		<>
			<div className="playlist-modal-container">
				<div className="modal-close">
					<span>Save to...</span>
					<i
						className="fas fa-times-circle add-close-icon"
						onClick={() => closeModal(false)}
					></i>
				</div>
				<div className="playlist-items">
					{playlistState.length > 0 &&
						playlistState.map((playlist) => {
							return (
								<label key={playlist._id} htmlFor={playlist._id}>
									<input
										type="checkbox"
										id={playlist._id}
										checked={playlist.videos.some(
											(item) => item.id === video.id
										)}
										onChange={(e) => {
											e.target.checked
												? addToPlaylist(playlist._id, video, playlistDispatch)
												: removeFromPlaylist(
														playlist._id,
														video.id,
														playlistDispatch
												  );
										}}
									/>
									#{playlist.title}
								</label>
							);
						})}
				</div>

				<div className="playlist-create">
					<div className="create-playlist-input">
						<label>
							Name
							<input
								type="text"
								placeholder="Playlist One"
								required
								onChange={playlistInputhandler}
							/>
						</label>
					</div>
					<div
						className="create-new-playlist"
						onClick={(e) => {
							e.preventDefault();
							createPlaylistHandler(newCreatedPlaylist, playlistDispatch);
						}}
					>
						<span>Create new playlist</span>
						<i className="fas fa-plus-circle add-close-icon"></i>
					</div>
				</div>
			</div>
		</>
	);
};
