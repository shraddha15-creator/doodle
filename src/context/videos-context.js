import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

const VideosContext = createContext();

const VideosProvider = ({ children }) => {
	const [categories, setCategories] = useState();
	const [videos, setVideos] = useState([]);

	// Fetch categories function
	const getCategories = () => {
		axios
			.get("./api/categories")
			.then((res) => setCategories(res.data.categories));
	};

	// Fetch videos function
	const getVideos = async () => {
		try {
			const response = await axios.get("/api/videos");
			setVideos(response.data.videos);
		} catch (error) {
			console.error("ERROR: while fetching videos", error);
		}
	};

	useEffect(() => {
		getCategories();
	}, []);

	useEffect(() => {
		getVideos();
	}, []);

	return (
		<VideosContext.Provider value={{ categories, videos }}>
			{children}
		</VideosContext.Provider>
	);
};

const useVideos = () => useContext(VideosContext);

export { VideosProvider, useVideos };
