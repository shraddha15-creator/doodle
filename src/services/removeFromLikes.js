import axios from "axios";
import { token } from "./token";

const encodedToken = token();
export const removeFromLikes = async (video, likesDispatch) => {
	try {
		const response = await axios.delete(`/api/user/likes/${video.id}`, {
			headers: { authorization: encodedToken },
		});
		likesDispatch({
			type: "DELETE_FROM_LIKE",
			payload: response.data.likes,
		});
	} catch (error) {
		console.log("ERROR WHILE REMOVING LIKES", error);
	}
};
