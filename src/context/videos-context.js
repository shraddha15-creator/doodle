import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

const VideosContext = createContext();

export const VideosProvider = ({ children }) => {
	const [categories, setCategories] = useState([]);
	const [activeCategory, setActiveCategory] = useState("All");
	const [videos, setVideos] = useState([]);
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
			setActiveCategory("All");
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
		setActiveCategory(filteredCategory[0].category);
	};

	useEffect(() => {
		getCategories();
	}, []);

	useEffect(() => {
		getVideos();
	}, []);

	// ==== search function
	const searchHandler = (searchInput, setSearchInput, e) => {
		setSearchInput(e.target.value);
		const searchedData = videos.filter((val) => {
			if (searchInput == "") {
				return val;
			} else if (val.title.toLowerCase().includes(searchInput.toLowerCase())) {
				return val;
			}
		});
		setFilteredVideos(searchedData);
	};

	return (
		<VideosContext.Provider
			value={{
				categories,
				videos,
				setVideos,
				activeCategoryHandler,
				filteredVideos,
				setFilteredVideos,
				getVideos,
				searchHandler,
				activeCategory,
			}}
		>
			{children}
		</VideosContext.Provider>
	);
};

export const useVideos = () => useContext(VideosContext);
