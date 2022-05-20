import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { VideoCard } from "../../components";
import { usePlaylist } from "../../context";
import { token } from "../../services";
import "./singlePlaylist.css";

const encodedToken = token();

const SinglePlaylist = () => {
	const { playlistId } = useParams();
	const navigate = useNavigate();
	const { playlistState, playlistDispatch } = usePlaylist();

	const getSinglePlaylist = (playlistState, playlistId) =>
		playlistState.find((playlist) => playlist._id === playlistId);

	const singlePlaylist = getSinglePlaylist(playlistState, playlistId);

	const removePlaylistHandler = async (playlistId, playlistDispatch) => {
		try {
			const response = await axios.delete(`/api/user/playlists/${playlistId}`, {
				headers: {
					authorization: encodedToken,
				},
			});
			playlistDispatch({
				type: "SET_PLAYLIST",
				payload: response.data.playlists,
			});
			navigate("/playlist");
		} catch (error) {
			console.error("ERROR WHILE DELETE PLAYLIST", error);
		}
	};

	return (
		<div className="single-pl-page">
			<div className="pl-title-n-delete">
				<p className="playlist-title">{singlePlaylist?.title}</p>
				<i
					className="fas fa-trash-alt"
					onClick={() => removePlaylistHandler(playlistId, playlistDispatch)}
				></i>
			</div>
			<div className="single-pl-videos">
				{singlePlaylist?.videos?.length > 0 &&
					singlePlaylist?.videos?.map((video, index) => {
						return <VideoCard key={index} video={video} />;
					})}
			</div>
		</div>
	);
};

export default SinglePlaylist;
