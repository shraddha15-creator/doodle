import axios from "axios";
import React, { useState, useEffect } from "react";
import "./categoriesChips.css";

const CategoriesChips = () => {
	const [categories, setCategories] = useState();

	const getCategories = () => {
		axios
			.get("./api/categories")
			.then((res) => setCategories(res.data.categories));
	};

	useEffect(() => {
		getCategories();
	}, []);
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
