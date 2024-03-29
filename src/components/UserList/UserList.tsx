import React, { useRef, useEffect, useCallback, memo } from "react";

import { UserCard } from "../UserCard/UserCard";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setCurrentUserData } from "../../redux/slices/user";
import S from "./styles.module.css";

import { useUsersLoader } from "../../hooks/useUserLoader";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";

export const UsersList = memo(() => {
	const loaderRef = useRef<HTMLDivElement | null>(null);
	const dispatch = useAppDispatch();
	const { fetchUsers, refetchUsers, users } = useUsersLoader();
	const { isRefetching, changedUserIndex, isLoading } = useAppSelector(
		(state) => state.load
	);
	useInfiniteScroll(fetchUsers, isLoading, loaderRef);

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
			{users.map((user) => (
				<UserCard
					key={user.id}
					userId={user.id}
					name={user.name}
					onClick={handleSelectUser}
				/>
			))}
			<h3 ref={loaderRef} className={S.loader}>
				{isLoading && "Загрузка..."}
			</h3>
		</div>
	);
});

UsersList.displayName = "UsersList";
