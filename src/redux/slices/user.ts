import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types";

type UserState = User;
const initialState: UserState = {
	name: "",
	department: "",
	company: "",
	jobTitle: "",
	id: "",
	index: "",
};

const currentUserSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setCurrentUserData: (
			state,
			{
				payload,
			}: PayloadAction<{
				name: string;
				department: string;
				company: string;
				jobTitle: string;
				id: string;
				index: string
			}>
		) => {
			state.company = payload.company;
			state.department = payload.department;
			state.jobTitle = payload.jobTitle;
			state.name = payload.name;
			state.id = payload.id;
			state.index = payload.index
		},
	},
});

export const { setCurrentUserData } = currentUserSlice.actions;
export const currentUserReducer = currentUserSlice.reducer;
