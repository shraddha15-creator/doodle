import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

const VideosContext = createContext();

const VideosProvider = ({ children }) => {
	const [videos, setVideos] = useState([]);

	const getVideos = async () => {
		try {
			const response = await axios.get("/api/videos");
			setVideos(response.data.videos);
		} catch (error) {
			console.error("ERROR: while fetching videos", error);
		}
	};

	useEffect(() => {
		getVideos();
	}, []);

	return (
		<VideosContext.Provider value={{ videos }}>
			{children}
		</VideosContext.Provider>
	);
};

const useVideos = () => useContext(VideosContext);

export { VideosProvider, useVideos };
