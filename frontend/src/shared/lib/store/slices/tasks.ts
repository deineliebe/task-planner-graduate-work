// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/no-unresolved */
import {
	addNewTask,
	getUserTasksInfo,
	getLastTaskInfo,
	addNewUserTask
} from '@/shared/api/api';
import { constantsMap } from '@/shared/model/constants';
import { TNewTask, TTask, TUserTask } from '@/shared/model/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export type TTaskState = {
	tasks: TTask[];
	lastTask: TTask[];
	error: string | null | undefined;
};

export const initialTaskState: TTaskState = {
	tasks: [],
	lastTask: [],
	error: null
};

export const getTasks = createAsyncThunk(
	'/tasks/get',
	async (credentials: { userId: number }) => {
		return await getUserTasksInfo(credentials.userId);
	}
);

export const getLastTask = createAsyncThunk(
	'/tasks/getLast',
	async (credentials: { name: string }) => {
		return await getLastTaskInfo(credentials.name);
	}
);

export const addTask = createAsyncThunk(
	'/tasks/add',
	async (credentials: { newTask: TNewTask }) => {
		console.log(credentials.newTask);
		return await addNewTask(credentials.newTask);
	}
);

export const addUserTask = createAsyncThunk(
	'/usersTasks/add',
	async (userTask: TUserTask) => {
		console.log(userTask);
		return await addNewUserTask(userTask);
	}
);

export const taskSlice = createSlice({
	name: constantsMap.slices.tasks,
	initialState: initialTaskState,
	reducers: {},
	selectors: {
		getTaskData: (state) => state.tasks,
		getLastTaskData: (state) => state.lastTask
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
				state.tasks = action.payload;
				state.error = null;
			})
			.addCase(getLastTask.pending, (state) => {
				state.lastTask = [];
				state.error = null;
			})
			.addCase(getLastTask.rejected, (state, action) => {
				state.error = action.error.message;
			})
			.addCase(getLastTask.fulfilled, (state, action) => {
				state.lastTask = action.payload;
				state.error = null;
			})
			.addCase(addTask.pending, (state) => {
				state.error = null;
			})
			.addCase(addTask.rejected, (state, action) => {
				console.log(state);
				state.error = action.error.message;
			})
			.addCase(addTask.fulfilled, (state) => {
				state.error = null;
			})
			.addCase(addUserTask.pending, (state) => {
				state.error = null;
			})
			.addCase(addUserTask.rejected, (state, action) => {
				console.log(state);
				state.error = action.error.message;
			})
			.addCase(addUserTask.fulfilled, (state) => {
				state.error = null;
			});
	}
});

export const {} = taskSlice.actions;

export const { getTaskData, getLastTaskData } = taskSlice.selectors;
export const taskReducer = taskSlice.reducer;
export const taskName = taskSlice.name;
