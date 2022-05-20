import { useState, useContext, useReducer, createContext } from "react";

const PlaylistContext = createContext();

const playlistReducerFunc = (state, action) => {
	switch (action.type) {
		case "SET_PLAYLIST":
			return action.payload;
		case "SET_SINGLE_PLAYLIST":
			return state.map((playlist) =>
				playlist._id === action.payload._id ? action.payload : playlist
			);
		default:
			return state;
	}
};

export const PlaylistProvider = ({ children }) => {
	const [playlistInputValue, setPlaylistInputValue] = useState("");
	const [playlistItems, setPlaylistItems] = useState([]);

	const [playlistState, playlistDispatch] = useReducer(playlistReducerFunc, {
		playlist: [],
	});

	return (
		<PlaylistContext.Provider
			value={{
				playlistState,
				playlistDispatch,
				playlistInputValue,
				setPlaylistInputValue,
				playlistItems,
				setPlaylistItems,
			}}
		>
			{children}
		</PlaylistContext.Provider>
	);
};

export const usePlaylist = () => useContext(PlaylistContext);
