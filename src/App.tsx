import { memo } from "react";
import S from "./App.module.css";

import { UserEditForm } from "./components/UserEditForm/UserEditForm";
import { UsersList } from "./components/UserList/UserList";

import { useAppSelector } from "./redux/store";
import { Loader } from "./components/Loader/Loader";

export const App = memo(() => {
	const { isSelected } = useAppSelector((state) => state.currentUser);

	return (
		<div className={S.App}>
			<Loader />
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
