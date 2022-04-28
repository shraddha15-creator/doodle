import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

const VideosContext = createContext();

const VideosProvider = ({ children }) => {
	const [categories, setCategories] = useState();
	const [videos, setVideos] = useState([]);
	const [isActive, setIsActive] = useState(false);

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

	// Category filter
	const activeCategoryHandler = (category) => {
		setIsActive(true);
		const filteredCategory = videos.filter((vdo) => {
			return category.categoryName == vdo.category;
		});
		setVideos(filteredCategory);
		setIsActive(!isActive === true);
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
			}}
		>
			{children}
		</VideosContext.Provider>
	);
};

const useVideos = () => useContext(VideosContext);

export { VideosProvider, useVideos };
