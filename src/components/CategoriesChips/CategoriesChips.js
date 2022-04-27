import React from "react";
import { useVideos } from "../../context/videos-context";
import "./categoriesChips.css";

const CategoriesChips = () => {
	const { categories } = useVideos();

	return (
		<>
			<div className="categories-chips">
				{categories &&
					categories.map((category) => {
						return (
							<h5 key={category.id} className="categories-items">
								{category.categoryName}
							</h5>
						);
					})}
			</div>
		</>
	);
};

export default CategoriesChips;
