import axios from "axios";
import { token } from "../token";

const encodedToken = token();

export const removeFromPlaylist = async (
	playlistId,
	videoId,
	playlistDispatch
) => {
	try {
		const response = await axios.delete(
			`/api/user/playlists/${playlistId}/${videoId}`,
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
		console.error("ERROR WHILE REMOVING FROM PLAYLIST", error);
	}
};
