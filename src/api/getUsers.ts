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

	const usersMap = new Map();

	for (const [key, userInfo] of Object.entries(data)) {
		usersMap.set(key, userInfo);
	}

	return usersMap;
};
