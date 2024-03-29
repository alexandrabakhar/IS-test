import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types";

type UserState = User & {
	isSelected?: boolean;
};
const initialState: UserState = {
	name: "",
	department: "",
	company: "",
	jobTitle: "",
	id: "",
	index: "",
	isSelected: false,
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
				index: string;
			}>
		) => {
			state.company = payload.company;
			state.department = payload.department;
			state.jobTitle = payload.jobTitle;
			state.name = payload.name;
			state.id = payload.id;
			state.index = payload.index;
			state.isSelected = true;
		},

		setChangedUserData: (
			state,
			{
				payload,
			}: PayloadAction<{
				name?: string;
				department?: string;
				company?: string;
				jobTitle?: string;
			}>
		) => {
			state.company = payload.company ? payload.company : state.company;
			state.department = payload.department
				? payload.department
				: state.department;
			state.jobTitle = payload.jobTitle
				? payload.jobTitle
				: state.jobTitle;
			state.name = payload.name ? payload.name : state.name;
		},
	},
});

export const { setCurrentUserData, setChangedUserData } =
	currentUserSlice.actions;
export const currentUserReducer = currentUserSlice.reducer;
