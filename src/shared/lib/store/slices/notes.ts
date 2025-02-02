import { addNotesApi, getNotesApi } from '@/shared/api/api';
import { constantsMap } from '@/shared/model/constants';
import { TNote } from '@/shared/model/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getNotes = createAsyncThunk('/notes', getNotesApi);

export type TNoteState = {
	isLoading: boolean;
	notes: TNote[];
	error: string | null | undefined;
};

export const initialNoteState: TNoteState = {
	isLoading: true,
	notes: [],
	error: null
};

export const addNote = createAsyncThunk('/notes/add', addNotesApi);

export const noteSlice = createSlice({
	name: constantsMap.slices.notes,
	initialState: initialNoteState,
	reducers: {},
	selectors: {
		getNotesData: (state) => state.notes,
		getLoadingStatus: (state) => state.isLoading
	},
	extraReducers: (builder) => {
		builder
			.addCase(getNotes.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(getNotes.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message;
			})
			.addCase(getNotes.fulfilled, (state, action) => {
				state.isLoading = false;
				state.notes = action.payload.data;
				state.error = null;
			})
			.addCase(addNote.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(addNote.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message;
			})
			.addCase(addNote.fulfilled, (state, action) => {
				state.isLoading = false;
				state.notes = action.payload.data;
				state.error = null;
			});
	}
});

export const {} = noteSlice.actions;

export const { getNotesData, getLoadingStatus } = noteSlice.selectors;
export const projectReducer = noteSlice.reducer;
export const projectName = noteSlice.name;
