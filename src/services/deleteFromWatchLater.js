import axios from "axios";
import { token } from "./token";

const encodedToken = token();

export const deleteFromWatchLater = async (id, watchLaterDispatch) => {
	try {
		const data = await axios.delete(`/api/user/watchlater/${id}`, {
			headers: { authorization: encodedToken },
		});
		watchLaterDispatch({
			type: "DELETE_FROM_WATCH_LATER",
			payload: data.watchlater,
		});
	} catch (error) {
		console.error("ERROR WHILE DELETING FROM WATCH LATER", error);
	}
};
