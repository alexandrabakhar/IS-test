import { configureStore } from "@reduxjs/toolkit";

import {
	type TypedUseSelectorHook,
	useDispatch,
	useSelector,
} from "react-redux";
import { currentUserReducer } from "./slices/user";

export const appStore = configureStore({
	reducer: {
		currentUser: currentUserReducer,
	},
});

export type RootState = ReturnType<typeof appStore.getState>;

export type AppDispatch = typeof appStore.dispatch;

export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
