import axios from "axios";
import { toast } from "react-toastify";
import { token } from "../token";

const encodedToken = token();

export const addToPlaylist = async (playlistId, video, playlistDispatch) => {
	try {
		const response = await axios.post(
			`/api/user/playlists/${playlistId}`,
			{ video },
			{
				headers: {
					authorization: encodedToken,
				},
			}
		);
		playlistDispatch({
			type: "SET_SINGLE_PLAYLIST",
			payload: response.data.playlist,
		});
		toast.success("Added to Playlist!");
	} catch (error) {
		toast.error("Error");
		console.error("ERROR WHILE ADDING TO PLAYLIST", error);
	}
};
