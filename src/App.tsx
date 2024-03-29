import { memo, useEffect } from "react";
import S from "./App.module.css";

import { UserEditForm } from "./components/UserEditForm/UserEditForm";
import { UsersList } from "./components/UserList/UserList";

import { useAppSelector } from "./redux/store";

export const App = memo(() => {
	const { isSelected } = useAppSelector((state) => state.currentUser);

	useEffect(() => {
		console.log("isSelected " + isSelected);
	}, [isSelected]);
	return (
		<div className={S.App}>
			<UsersList />

			{isSelected ? (
				<UserEditForm />
			) : (
				<h3 className={S.placeholder}>
					Пожалуйста, выберите пользователя из списка
				</h3>
			)}
		</div>
	);
});
App.displayName = "App";
