import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
	{
		_id: uuid(),
		categoryName: "All",
	},
	{
		_id: uuid(),
		categoryName: "Figma",
	},
	{
		_id: uuid(),
		categoryName: "UI/UX",
	},
	{
		_id: uuid(),
		categoryName: "Adobe XD",
	},
	{
		_id: uuid(),
		categoryName: "Doodle Art",
	},
];
