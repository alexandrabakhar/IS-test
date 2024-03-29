import { memo } from "react";
import { UserIcon } from "../UserIcon/UserIcon";
import S from "./styles.module.css";

export const UserCard = memo(
	({
		name,
		userId,
		onClick,
	}: {
		name: string;
		userId: string;
		onClick: React.MouseEventHandler<HTMLDivElement>;
	}) => {
		return (
			<div id={userId} onClick={onClick} className={S.user_card}>
				<UserIcon />

				<h3>{name}</h3>
			</div>
		);
	}
);

UserCard.displayName = "UserCard";
