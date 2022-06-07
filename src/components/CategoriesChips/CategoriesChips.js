import React from "react";
import { useVideos } from "../../context/videos-context";
import "./categoriesChips.css";

export const CategoriesChips = ({ videos }) => {
	const { categories, activeCategoryHandler, getVideos } = useVideos();

	return (
		<>
			<div className="categories-chips">
				<h5 className={`categories-items `} onClick={getVideos}>
					All
				</h5>
				{categories &&
					categories.map((category) => {
						return (
							<h5
								key={category._id}
								className="categories-items"
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
