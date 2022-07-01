import axios from "axios";
import { toast } from "react-toastify";
import { token } from "./token";

const encodedToken = token();

export const addToLikes = async (video, likesDispatch) => {
	try {
		const response = await axios.post(
			"/api/user/likes",
			{ video },
			{ headers: { authorization: encodedToken } }
		);
		likesDispatch({
			type: "ADD_TO_LIKES",
			payload: response.data.likes,
		});
		toast.success("Liked!");
	} catch (error) {
		console.error("ERROR WHILE ADDING  TO LIKES", error);
	}
	// setIsLiked(!isLiked === true);
};
