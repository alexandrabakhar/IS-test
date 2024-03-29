import { User } from "../types";

export const updateStartIndex = (
	setStartIndex: React.Dispatch<React.SetStateAction<number>>,
	newItems: User[]
) => {
	const newStartIndex = Number(newItems[newItems.length - 1].index) + 1;

	setStartIndex(newStartIndex);
};
