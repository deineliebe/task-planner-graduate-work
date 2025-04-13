import { combineReducers, configureStore } from '@reduxjs/toolkit';

import {
	TypedUseSelectorHook,
	useDispatch as dispatchHook,
	useSelector as selectorHook
} from 'react-redux';
import { projectSlice } from './slices/projects';
import { noteSlice } from './slices/notes';

export const rootReducer = combineReducers({
	projects: projectSlice.reducer,
	notes: noteSlice.reducer
});

const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
