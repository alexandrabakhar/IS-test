import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: {
	changedUserIndex: string;
	isLoading: boolean;
	isRefetching: boolean;
} = {
	changedUserIndex: "",
	isLoading: false,
	isRefetching: false,
};

const loadSlice = createSlice({
	name: "load",
	initialState,
	reducers: {
		startRefetchUsers: (
			state,
			{ payload }: PayloadAction<{ changedUserIndex: string }>
		) => {
			state.isRefetching = true;
			state.changedUserIndex = payload.changedUserIndex;
		},
		endRefetchUsers: (state) => {
			state.isRefetching = false;
			state.changedUserIndex = "";
		},
		setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
			state.isLoading = payload;
		},
	},
});

export const { startRefetchUsers, endRefetchUsers, setIsLoading } = loadSlice.actions;
export const loadReducer = loadSlice.reducer;
