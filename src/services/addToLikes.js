import axios from "axios";
import { token } from "./token";

const encodedToken = token();

export const addToLikes = async (video, isLiked, setIsLiked, likesDispatch) => {
	try {
		const response = await axios.post(
			"/api/user/likes",
			{ video },
			{ headers: { authorization: encodedToken } }
		);
		console.log("adding to likes", response);
		likesDispatch({
			type: "ADD_TO_LIKES",
			payload: response.data.likes,
		});
	} catch (error) {
		console.error("ERROR WHILE ADDING  TO LIKES", error);
	}
	setIsLiked(!isLiked === true);
};
