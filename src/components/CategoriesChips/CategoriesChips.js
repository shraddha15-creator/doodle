import React from "react";
import { useVideos } from "../../context/videos-context";
import "./categoriesChips.css";

export const CategoriesChips = () => {
	const { categories, activeCategoryHandler, isActive } = useVideos();
	return (
		<>
			<div className="categories-chips">
				{categories &&
					categories.map((category) => {
						return (
							<h5
								key={category._id}
								className={`categories-items ${isActive && "active-category"}`}
								onClick={() => activeCategoryHandler(category)}
							>
								{category.categoryName}
							</h5>
						);
					})}
			</div>
		</>
	);
};
