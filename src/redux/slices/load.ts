import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: {
	isFetching: boolean;
    isRefetchUser: boolean
    changedUserIndex: string
} = {
	isFetching: false,
    isRefetchUser: false,
    changedUserIndex: ''
};

const loadSlice = createSlice({
	name: "load",
	initialState,
	reducers: {
		setIsFetching: (
			state,
			{ payload }: PayloadAction<{ isFetching: boolean }>
		) => {
			state.isFetching = payload.isFetching;
		},
        setRefetchUsers: (
			state,
			{ payload }: PayloadAction<{ isRefetchUsers: boolean }>
		) => {
			state.isRefetchUser = payload.isRefetchUsers;
		},
        setChangedUser: (
			state,
			{ payload }: PayloadAction<{ changedUserIndex: string }>
		) => {
			state.isRefetchUser = true;
            state.changedUserIndex = payload.changedUserIndex
		},
	},
});

export const { setIsFetching, setRefetchUsers, setChangedUser } = loadSlice.actions;
export const loadReducer = loadSlice.reducer;
