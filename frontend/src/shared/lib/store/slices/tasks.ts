import { addTasksApi, getTaskApi, getTasksApi } from '@/shared/api/api';
import { constantsMap } from '@/shared/model/constants';
import { TTask } from '@/shared/model/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getTasks = createAsyncThunk('/tasks', getTasksApi);

export type TTaskState = {
	isLoading: boolean;
	tasks: TTask[];
	error: string | null | undefined;
};

export const initialTaskState: TTaskState = {
	isLoading: true,
	tasks: [],
	error: null
};

export const addTask = createAsyncThunk('/tasks/add', addTasksApi);

export const taskSlice = createSlice({
	name: constantsMap.slices.tasks,
	initialState: initialTaskState,
	reducers: {},
	selectors: {
		getTaskData: (state) => state.tasks,
		getLoadingStatus: (state) => state.isLoading
	},
	extraReducers: (builder) => {
		builder
			.addCase(getTasks.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(getTasks.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message;
			})
			.addCase(getTasks.fulfilled, (state, action) => {
				state.isLoading = false;
				state.tasks = action.payload.data;
				state.error = null;
			})
			.addCase(addTask.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(addTask.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message;
			})
			.addCase(addTask.fulfilled, (state, action) => {
				state.isLoading = false;
				state.tasks = action.payload.data;
				state.error = null;
			});
	}
});

export const {} = taskSlice.actions;

export const { getTaskData, getLoadingStatus } = taskSlice.selectors;
export const taskReducer = taskSlice.reducer;
export const taskName = taskSlice.name;
