import { useReducer, createContext, useContext } from "react";

const WacthLaterContext = createContext();

const watchLaterReducerFunc = (state, action) => {
	switch (action.type) {
		case "ADD_TO_WATCH_LATER":
			return { ...state, watchLater: action.payload };
		case "DELETE_FROM_WATCH_LATER":
			return { ...state, watchLater: action.payload };
		default:
			return state;
	}
};

export const WatchLaterProvider = ({ children }) => {
	const [watchLaterState, watchLaterDispatch] = useReducer(
		watchLaterReducerFunc,
		{
			watchLater: [],
		}
	);

	return (
		<WacthLaterContext.Provider
			value={{
				watchLaterState,
				watchLaterDispatch,
			}}
		>
			{children}
		</WacthLaterContext.Provider>
	);
};

export const useWatchLater = () => useContext(WacthLaterContext);
