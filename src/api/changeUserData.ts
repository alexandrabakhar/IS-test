import { ChangeUserData } from "../types";

export const changeUserData: ChangeUserData = async (
	userIndex,
	userData,
	onSuccess
) => {
	try {
		const response = await fetch(
			`https://testforinfinitesynergy-default-rtdb.europe-west1.firebasedatabase.app/${userIndex}.json`,
			{
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(userData),
			}
		);

		if (!response.ok) {
			throw new Error("Network response was not ok");
		}

		onSuccess(userIndex, userData);
	} catch (error) {
		console.error("Error updating user data:", error);
	}
};
