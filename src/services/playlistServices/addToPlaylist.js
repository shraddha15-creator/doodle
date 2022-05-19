import axios from "axios";
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
	} catch (error) {
		console.error("ERROR WHILE ADDING TO PLAYLIST", error);
	}
};
