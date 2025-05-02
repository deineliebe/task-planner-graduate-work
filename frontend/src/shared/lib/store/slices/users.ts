/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable import/no-unresolved */
import { getUserInfo, updateUsersPasswordById } from '@/shared/api/api';
import { constantsMap } from '@/shared/model/constants';
import { TUserInfo, TUserPasswordData } from '@/shared/model/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getUser = createAsyncThunk(
	'/user/get',
	async (credentials: { email: string; password: string }) => {
		return await getUserInfo(credentials.email, credentials.password);
	}
);

export const updateUsersPassword = createAsyncThunk(
	'/user/updatePassword',
	async (data: TUserPasswordData) => {
		return await updateUsersPasswordById(data);
	}
);

export type TUserState = {
	data: TUserInfo | null;
	error: string | null | undefined;
};

export const initialUserState: TUserState = {
	data: null,
	error: null
};

export const userSlice = createSlice({
	name: constantsMap.slices.user,
	initialState: initialUserState,
	reducers: {},
	selectors: {
		getData: (state) => state.data
	},
	extraReducers: (builder) => {
		builder
			.addCase(getUser.pending, (state) => {
				state.data = null;
				state.error = null;
			})
			.addCase(getUser.rejected, (state, action) => {
				state.error = action.error.message;
			})
			.addCase(getUser.fulfilled, (state, action) => {
				state.data = action.payload;
				state.error = null;
			})
			.addCase(updateUsersPassword.pending, (state) => {
				state.error = null;
			})
			.addCase(updateUsersPassword.rejected, (state, action) => {
				state.error = action.error.message;
			})
			.addCase(updateUsersPassword.fulfilled, (state) => {
				state.error = null;
			});
	}
});

export const {} = userSlice.actions;

export const { getData } = userSlice.selectors;
export const taskReducer = userSlice.reducer;
export const taskName = userSlice.name;
