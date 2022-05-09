import axios from "axios";
import { token } from "./token";

const encodedToken = token();

export const addToHistory = async (video, historyDispatch) => {
	try {
		const response = await axios.post(
			"/api/user/history",
			{ video: video },
			{ headers: { authorization: encodedToken } }
		);
		historyDispatch({
			type: "ADD_TO_HISTORY",
			payload: response.data,
		});
		console.log(response);
	} catch (error) {
		console.error("Error while adding to history", error);
	}
};
