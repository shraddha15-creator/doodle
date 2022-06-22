import React from "react";
import { useVideos } from "../../context/videos-context";
import "./categoriesChips.css";

export const CategoriesChips = ({ videos }) => {
	const { categories, activeCategoryHandler, getVideos, activeCategory } =
		useVideos();

	return (
		<>
			<div className="categories-chips">
				<h5
					className={`categories-items ${
						activeCategory === "All" ? "active-category" : ""
					} `}
					onClick={getVideos}
				>
					All
				</h5>
				{categories &&
					categories.map((category) => {
						return (
							<h5
								key={category._id}
								className={`categories-items ${
									category.categoryName === activeCategory
										? "active-category"
										: ""
								} `}
								onClick={() => activeCategoryHandler(category, videos)}
							>
								{category.categoryName}
							</h5>
						);
					})}
			</div>
		</>
	);
};
