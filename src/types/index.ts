import { PayloadAction } from "@reduxjs/toolkit";

export type User = {
	name: string;
	department: string;
	company: string;
	jobTitle: string;
	id: string;
	index: string;
};

type FormFields = {
	name: HTMLInputElement;
	department: HTMLInputElement;
	company: HTMLInputElement;
	jobTitle: HTMLInputElement;
};
export type ChangeData = (
	initValues: User
) => (event: React.FormEvent<HTMLFormElement & FormFields>) => void;

export type ChangedUserData = {
	name?: User["name"];
	department?: User["department"];
	company?: User["company"];
	jobTitle?: User["jobTitle"];
};

export type OnChangedUserSuccess = (
	userIndex: User["index"],
	changedUserData: ChangedUserData
) => void;

export type ChangeUserData = (
	userIndex: User["index"],
	userData: ChangedUserData,
	onSuccess: OnChangedUserSuccess
) => Promise<void>;
export type GetUsers = (lastIndex: number, limit?: string) => Promise<User[]>;
export type UserState = User & {
	isSelected: boolean;
	isDataChanged: boolean
};

export type SetCurrentUserDataPayload = PayloadAction<User>;
export type SetChangedUserDataPayload = PayloadAction<ChangedUserData>;

export type UseInfiniteScroll = (
	callback: () => Promise<void>,
	isLoading: boolean,
	ref: React.MutableRefObject<HTMLDivElement | null>
) => void;

export type UserCardProps = {
	userId: User["id"];
	name: User["name"];
	onClick: React.MouseEventHandler<HTMLDivElement>;
};
export type CustomInputProps = {
	inputName: "name" | "department" | "company" | "jobTitle";
	labelText: string;
	defaultValue: string;
};
