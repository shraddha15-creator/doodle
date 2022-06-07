import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

const VideosContext = createContext();

export const VideosProvider = ({ children }) => {
	const [categories, setCategories] = useState([]);
	const [videos, setVideos] = useState([]);
	const [isActive, setIsActive] = useState(false);
	const [filteredVideos, setFilteredVideos] = useState([]);

	// Fetch categories function
	const getCategories = () => {
		axios
			.get("/api/categories")
			.then((res) => setCategories(res.data.categories));
	};

	// Fetch videos function
	const getVideos = async () => {
		try {
			const response = await axios.get("/api/videos");
			setVideos(response.data.videos);
			setFilteredVideos(response.data.videos);
		} catch (error) {
			console.error("ERROR: while fetching videos", error);
		}
	};

	// Category filter
	const activeCategoryHandler = (category, myvideos) => {
		const filteredCategory = myvideos.filter((vdo) => {
			return category.categoryName === vdo.category;
		});
		setFilteredVideos(filteredCategory);
	};

	useEffect(() => {
		getCategories();
	}, []);

	useEffect(() => {
		getVideos();
	}, []);

	return (
		<VideosContext.Provider
			value={{
				categories,
				videos,
				activeCategoryHandler,
				isActive,
				setIsActive,
				filteredVideos,
				getVideos,
			}}
		>
			{children}
		</VideosContext.Provider>
	);
};

export const useVideos = () => useContext(VideosContext);
