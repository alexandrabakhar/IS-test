import { PayloadAction, createSlice } from "@reduxjs/toolkit";
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
	isDataChanged: false,
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
			state.id = payload.key;
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
		setIsDataChanged: (state, { payload }: PayloadAction<boolean>) => {
			state.isDataChanged = payload;
		},
	},
});

export const { setCurrentUserData, setChangedUserData, setIsDataChanged } =
	currentUserSlice.actions;
export const currentUserReducer = currentUserSlice.reducer;
