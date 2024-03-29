import { GetUsers } from "../types";

export const getUsers: GetUsers = async (startIndex, limit) => {
	const lastIndex = limit ? startIndex + limit : startIndex + 20;
	const query = `orderBy="$key"&startAt="${startIndex}"&endAt="${lastIndex}"`;

	const response = await fetch(
		`https://testforinfinitesynergy-default-rtdb.europe-west1.firebasedatabase.app/.json/?${query}`
	);

	if (!response.ok) {
		throw new Error("Network response was not ok");
	}
	const data = await response.json();

	const itemsArray = Object.keys(data).map((key) => {
		const item = data[key];

		return {
			...item,
			index: key,
		};
	});

	return itemsArray;
};
