import React, { useRef, useEffect, useCallback, memo } from "react";

import { UserCard } from "../UserCard/UserCard";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setCurrentUserData } from "../../redux/slices/user";
import S from "./styles.module.css";

import { useUsersLoader } from "../../hooks/useUserLoader";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";

export const UsersList = memo(() => {
	const refetchTrigger = useRef<HTMLDivElement | null>(null);
	const dispatch = useAppDispatch();
	const { fetchUsers, refetchUsers, users } = useUsersLoader();
	const { isRefetching, changedUserIndex, isLoading } = useAppSelector(
		(state) => state.load
	);
	useInfiniteScroll(fetchUsers, isLoading, refetchTrigger);

	useEffect(() => {
		if (isRefetching) {
			refetchUsers(changedUserIndex);
		}
	}, [isRefetching, changedUserIndex, refetchUsers]);

	const handleSelectUser: React.MouseEventHandler<HTMLDivElement> =
		useCallback(
			(event) => {
				const selectedUserId = event.currentTarget.id;
				const selectedUserData = users.find(
					(user) => user.id === selectedUserId
				);

				if (selectedUserData) {
					dispatch(setCurrentUserData(selectedUserData));
				}
			},
			[dispatch, users]
		);

	return (
		<div className={S.user_list}>
			{users.map((user) => {
				if (!user.name) return; // из-за особенностей апи, нулевой элемент не существует

				return (
					<UserCard
						key={user.id}
						userId={user.id}
						name={user.name}
						onClick={handleSelectUser}
					/>
				);
			})}
			<div ref={refetchTrigger} className={S.refetch_trigger}></div>
		</div>
	);
});

UsersList.displayName = "UsersList";
