import { memo } from "react";
import { UserIcon } from "../UserIcon/UserIcon";
import S from "./styles.module.css";
import { useAppSelector } from "../../redux/store";
import { UserCardProps } from "../../types";

export const UserCard = memo(({ name, userId, onClick }: UserCardProps) => {
	const { id } = useAppSelector((state) => state.currentUser);

	const classNames =
		id === userId
			? `${S.user_card_selected} ${S.user_card}`
			: `${S.user_card}`;
	return (
		<div id={userId} onClick={onClick} className={classNames}>
			<UserIcon />

			<h3>{name}</h3>
		</div>
	);
});

UserCard.displayName = "UserCard";
