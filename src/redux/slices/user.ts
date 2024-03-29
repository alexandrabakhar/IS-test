import { createSlice } from "@reduxjs/toolkit";
import {
	SetChangedUserDataPayload,
	SetCurrentUserDataPayload,
	UserState,
} from "../../types";

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
		setCurrentUserData: (state, { payload }: SetCurrentUserDataPayload) => {
			state.company = payload.company;
			state.department = payload.department;
			state.jobTitle = payload.jobTitle;
			state.name = payload.name;
			state.id = payload.id;
			state.index = payload.index;
			state.isSelected = true;
		},

		// метод, меняющий только измененные данные
		setChangedUserData: (state, { payload }: SetChangedUserDataPayload) => {
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
