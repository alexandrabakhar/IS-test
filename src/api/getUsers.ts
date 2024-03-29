import { User } from "../types";

export const getUsers = async (pageNumber: number): Promise<User[]> => {
	const query = pageNumber
		? `orderBy="$key"&startAt="${pageNumber + 1}"&limitToFirst=${20}`
		: `orderBy="$key"&limitToFirst=${20}`;
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
