import axios from "axios";
import { token } from "./token";

const encodedToken = token();

export const deleteFromHistory = async (videoId, historyDispatch) => {
	try {
		const response = await axios.delete(`/api/user/history/${videoId}`, {
			headers: { authorization: encodedToken },
		});
		historyDispatch({
			type: "DELETE_FROM_HISTORY",
			payload: response.data.history,
		});
	} catch (error) {
		console.error("ERROR WHILE deleting from history", error);
	}
};
