import React, { useState, useRef, useEffect, useCallback } from "react";
import { User } from "../../types";
import { UserCard } from "../UserCard/UserCard";
import { useAppDispatch } from "../../redux/store";
import { setCurrentUserData } from "../../redux/slices/user";
import S from "./styles.module.css";

interface VirtualizedListProps {
	loadPage: (pageNumber: number) => Promise<User[]>;
}

const VirtualizedList: React.FC<VirtualizedListProps> = ({ loadPage }) => {
	const [users, setUsers] = useState<User[]>([]);
	const [lastIndex, setLastIndex] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const loaderRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		setLastIndex(users.length);
	}, [users.length]);

	//   const usersCount = users.length

	const fetchItems = useCallback(async () => {
		setIsLoading(true);
		try {
			const newItems = await loadPage(lastIndex);
			if (newItems.length > 0) {
				setUsers((prevItems) => [...prevItems, ...newItems]);
			}
		} finally {
			setIsLoading(false);
		}
	}, [lastIndex, loadPage]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				if (entry.isIntersecting && !isLoading) {
					fetchItems();
				}
			},
			{ root: null, rootMargin: "20px", threshold: 0.5 }
		);

		if (loaderRef.current) {
			observer.observe(loaderRef.current);
		}

		return () => observer.disconnect();
	}, [isLoading, fetchItems]);

	const dispatch = useAppDispatch();

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
			<div ref={loaderRef} className={S.loader}>
				{isLoading && "Загрузка..."}
			</div>
		</div>
	);
};

export default VirtualizedList;
