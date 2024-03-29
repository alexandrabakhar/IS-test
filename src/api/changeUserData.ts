export type ChangedUserData = {
	name?: string;
	department?: string;
	company?: string;
	jobTitle?: string;
};

export const changeUserData = async (
	userIndex: string,
	userData: ChangedUserData,
	onSuccess: (userIndex: string, changedUserData: ChangedUserData) => void
): Promise<void> => {
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
