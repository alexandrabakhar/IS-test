import { User } from "../types";

export const getUsers = async (lastIndex: number, limit = '20'): Promise<User[]> => {
	const query = lastIndex
		? `orderBy="$key"&startAt="${lastIndex + 1}"&limitToFirst=${limit}`
		: `orderBy="$key"&limitToFirst=${limit}`;

    
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

	console.log(itemsArray);

	return itemsArray;
};
