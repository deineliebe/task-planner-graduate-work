import { addNewTask, getUserTasksInfo } from '@/shared/api/api';
import { constantsMap } from '@/shared/model/constants';
import { TNewTask, TTask } from '@/shared/model/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export type TTaskState = {
	tasks: TTask[];
	error: string | null | undefined;
};

export const initialTaskState: TTaskState = {
	tasks: [],
	error: null
};

export const getTasks = createAsyncThunk(
	'/tasks/get',
	async (credentials: { userId: number }) => {
		return await getUserTasksInfo(credentials.userId);
	}
);

export const addTask = createAsyncThunk(
	'/tasks/add',
	async (credentials: { newTask: TNewTask }) => {
		console.log(credentials.newTask);
		return await addNewTask(credentials.newTask);
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
				state.tasks = action.payload;
				state.error = null;
			})
			.addCase(addTask.pending, (state) => {
				state.error = null;
			})
			.addCase(addTask.rejected, (state, action) => {
				console.log(state);
				state.error = action.error.message;
			})
			.addCase(addTask.fulfilled, (state, action) => {
				console.log(action);
				state.error = null;
			});
	}
});

export const {} = taskSlice.actions;

export const { getTaskData } = taskSlice.selectors;
export const taskReducer = taskSlice.reducer;
export const taskName = taskSlice.name;
