import axios from "axios";
import { toast } from "react-toastify";
import { token } from "./token";

const encodedToken = token();

export const addToWatchLater = async (video, watchLaterDispatch) => {
	try {
		const { data } = await axios.post(
			"/api/user/watchlater",
			{ video: video },
			{ headers: { authorization: encodedToken } }
		);
		watchLaterDispatch({
			type: "ADD_TO_WATCH_LATER",
			payload: data.watchlater,
		});
		toast.success("Added to Watchlater!");
	} catch (error) {
		toast.error("Already in Watchlater");
		console.error("WHILE WATCH LATER POST", error);
	}
};
