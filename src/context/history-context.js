import { useReducer, createContext, useContext } from "react";

const HistoryContext = createContext();

const historyReducerFunc = (state, action) => {
	switch (action.type) {
		case "ADD_TO_HISTORY":
			return { ...state, history: action.payload };
		case "DELETE_FROM_HISTORY":
			return { ...state, history: action.payload };
	}
};

export const HistoryProvider = ({ children }) => {
	const [historyState, historyDispatch] = useReducer(historyReducerFunc, {
		history: [],
	});
	return (
		<HistoryContext.Provider value={{ historyState, historyDispatch }}>
			{children}
		</HistoryContext.Provider>
	);
};

export const useHistory = () => useContext(HistoryContext);
