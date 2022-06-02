import axios from "axios";
import { toast } from "react-toastify";
import { token } from "../token";

const encodedToken = token();

export const createPlaylistHandler = async (
	setPlaylistInput,
	newCreatedPlaylist,
	playlistDispatch
) => {
	try {
		const response = await axios.post(
			"/api/user/playlists",
			{ playlist: { ...newCreatedPlaylist } },
			{
				headers: {
					authorization: encodedToken,
				},
			}
		);
		setPlaylistInput("");
		playlistDispatch({
			type: "SET_PLAYLIST",
			payload: response.data.playlists,
		});
		toast.success("Playlist Created!");
	} catch (error) {
		console.error(error);
	}
};
