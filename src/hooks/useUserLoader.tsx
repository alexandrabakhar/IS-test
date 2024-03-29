import { useState, useCallback } from "react";
import { getUsers } from "../api/getUsers";
import { User } from "../types";
import { useAppDispatch } from "../redux/store";
import { endRefetchUsers, setIsLoading } from "../redux/slices/load";
import { updateStartIndex } from "../utils/updateStartIndex";

export const useUsersLoader = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [startIndex, setStartIndex] = useState(0);
	const dispatch = useAppDispatch();

	const fetchUsers = useCallback(async () => {
		dispatch(setIsLoading(true));

		try {
			const newItems = await getUsers(startIndex);
			if (newItems.length > 0) {
				setUsers((prevItems) => [...prevItems, ...newItems]);
				updateStartIndex(setStartIndex, newItems);
			}
		} finally {
			dispatch(setIsLoading(false));
		}
	}, [startIndex, dispatch]);

	const refetchUsers = useCallback(
		async (changedIndex: string) => {
			dispatch(setIsLoading(true));

			const limit =
				Number(changedIndex) <= 20 ? "20" : Number(changedIndex) + 20;

			try {
				const newItems = await getUsers(0, String(limit));

				setUsers(newItems);
			} finally {
				dispatch(setIsLoading(false));
				dispatch(endRefetchUsers());
			}
		},
		[dispatch]
	);

	return { users, fetchUsers, refetchUsers };
};
