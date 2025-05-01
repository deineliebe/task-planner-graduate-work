import { addTasksApi, getUserTasksInfo } from '@/shared/api/api';
import { constantsMap } from '@/shared/model/constants';
import { TTask } from '@/shared/model/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export type TTaskState = {
	tasks: TTask[];
	error: string | null | undefined;
};

export const initialTaskState: TTaskState = {
	tasks: [],
	error: null
};

export const addTask = createAsyncThunk('/tasks/add', addTasksApi);

export const getTasks = createAsyncThunk(
	'/tasks/get',
	async (credentials: { userId: number }) => {
		return await getUserTasksInfo(credentials.userId);
	}
);

export const taskSlice = createSlice({
	name: constantsMap.slices.tasks,
	initialState: initialTaskState,
	reducers: {},
	selectors: {
		getTaskData: (state) => state.tasks
	},
	extraReducers: (builder) => {
		builder
			.addCase(getTasks.pending, (state) => {
				state.error = null;
			})
			.addCase(getTasks.rejected, (state, action) => {
				state.error = action.error.message;
			})
			.addCase(getTasks.fulfilled, (state, action) => {
				console.log(action.payload);
				state.tasks = action.payload;
				state.error = null;
			})
			.addCase(addTask.pending, (state) => {
				state.error = null;
			})
			.addCase(addTask.rejected, (state, action) => {
				state.error = action.error.message;
			})
			.addCase(addTask.fulfilled, (state, action) => {
				state.tasks = action.payload.data;
				state.error = null;
			});
	}
});

export const {} = taskSlice.actions;

export const { getTaskData } = taskSlice.selectors;
export const taskReducer = taskSlice.reducer;
export const taskName = taskSlice.name;
