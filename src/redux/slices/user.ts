import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types";

type UserState = User & {
	userIndex: number;
};
const initialState: UserState = {
	name: "",
	department: "",
	company: "",
	jobTitle: "",
	id: "",
	userIndex: 0,
};

const currentUserSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setCurrentUserId: (
			state,
			{ payload }: PayloadAction<{ userId: User["id"] }>
		) => {
			state.id = payload.userId;
		},
		setCurrentUserIndex: (
			state,
			{ payload }: PayloadAction<{ userIndex: UserState["userIndex"] }>
		) => {
			state.userIndex = payload.userIndex;
		},
		setCurrentUserData: (
			state,
			{
				payload,
			}: PayloadAction<{
				name: string;
				department: string;
				company: string;
				jobTitle: string;
			}>
		) => {
			state.company = payload.company;
			state.department = payload.department;
			state.jobTitle = payload.jobTitle;
			state.name = payload.name;
		},
	},
});

export const { setCurrentUserData, setCurrentUserId, setCurrentUserIndex } =
	currentUserSlice.actions;
export const currentUserReducer = currentUserSlice.reducer;
