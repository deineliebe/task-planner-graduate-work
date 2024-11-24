import { addProjectsApi, getProjectsApi } from '@/shared/api/api';
import { constantsMap } from '@/shared/model/constants';
import { TProject } from '@/shared/model/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getProjects = createAsyncThunk('/projects', getProjectsApi);

export type TProjectState = {
	isLoading: boolean;
	projects: TProject[];
	error: string | null | undefined;
};

export const initialProjectState: TProjectState = {
	isLoading: true,
	projects: [],
	error: null
};

export const addProject = createAsyncThunk('/projects/add', addProjectsApi);

export const projectSlice = createSlice({
	name: constantsMap.slices.projects,
	initialState: initialProjectState,
	reducers: {},
	selectors: {
		getProjectData: (state) => state.projects,
		getLoadingStatus: (state) => state.isLoading
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProjects.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(getProjects.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message;
			})
			.addCase(getProjects.fulfilled, (state, action) => {
				state.isLoading = false;
				state.projects = action.payload.data;
				state.error = null;
			})
			.addCase(addProject.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(addProject.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message;
			})
			.addCase(addProject.fulfilled, (state, action) => {
				state.isLoading = false;
				state.projects = action.payload.data;
				state.error = null;
			});
	}
});

export const {} = projectSlice.actions;

export const { getProjectData, getLoadingStatus } = projectSlice.selectors;
export const projectReducer = projectSlice.reducer;
export const projectName = projectSlice.name;
