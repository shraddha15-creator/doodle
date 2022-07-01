import { useReducer, createContext, useContext } from "react";
const LikesContext = createContext();

const likesReducerFunc = (state, action) => {
	switch (action.type) {
		case "ADD_TO_LIKES":
			return { ...state, likes: action.payload };
		case "DELETE_FROM_LIKE":
			return { ...state, likes: action.payload };
		default:
			return state;
	}
};

export const LikesProvider = ({ children }) => {
	const [likesState, likesDispatch] = useReducer(likesReducerFunc, {
		likes: [],
	});

	return (
		<LikesContext.Provider value={{ likesState, likesDispatch }}>
			{children}
		</LikesContext.Provider>
	);
};

export const useLikes = () => useContext(LikesContext);
