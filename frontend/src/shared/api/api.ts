import {
	TNewTask,
	TTask,
	TUpdateTask,
	TUserInfo,
	TUserPasswordData,
	TUserTask
} from '../model/types';
import { TTasksResponse } from './types';

const URL = 'http://app.smalltaskplanner.ru/api';

const checkResponse = <T>(res: Response): Promise<T> =>
	res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

export const getUserTasksInfo = (id: number) =>
	fetch(`${URL}/tasks/new?id=${id}`)
		.then((res) => checkResponse<TTask[]>(res))
		.then((data) => {
			if (data) return data;
			return Promise.reject(data);
		});

export const getUserTaskByIdInfo = (id: number) =>
	fetch(`${URL}/tasks/one?id=${id}`)
		.then((res) => checkResponse<TTask>(res))
		.then((data) => {
			if (data) return data;
			return Promise.reject(data);
		});

export const getLastTaskInfo = (name: string) =>
	fetch(`${URL}/tasks/last?name=${name}`)
		.then((res) => checkResponse<TTask[]>(res))
		.then((data) => {
			if (data) return data;
			return Promise.reject(data);
		});

export const addNewTask = (data: TNewTask) =>
	fetch(`${URL}/tasks/add`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		} as HeadersInit,
		body: JSON.stringify(data)
	})
		.then((res) => checkResponse<TTasksResponse>(res))
		.then((data) => {
			if (data) return data;
			return Promise.reject(data);
		});

export const updateOldTask = (data: TUpdateTask) =>
	fetch(`${URL}/tasks/update`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		} as HeadersInit,
		body: JSON.stringify(data)
	})
		.then((res) => checkResponse<TTasksResponse>(res))
		.then((data) => {
			if (data) return data;
			return Promise.reject(data);
		});

export const deleteOldTask = (id: number) =>
	fetch(`${URL}/tasks/remove?id=${id}`, {
		method: 'DELETE'
	}).then((res) => checkResponse<TTasksResponse>(res));

export const addNewUserTask = (data: TUserTask) =>
	fetch(`${URL}/usersTasks/add`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		} as HeadersInit,
		body: JSON.stringify(data)
	})
		.then((res) => checkResponse<TUserTask>(res))
		.then((data) => {
			if (data) return data;
			return Promise.reject(data);
		});

export const deleteUserOldTask = (id: number) =>
	fetch(`${URL}/userTasks/delete?id=${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		} as HeadersInit,
		body: JSON.stringify(id)
	})
		.then((res) => checkResponse<TTasksResponse>(res))
		.then((data) => {
			if (data) return data;
			return Promise.reject(data);
		});

export const getUserInfo = (email: string, password: string) =>
	fetch(`${URL}/user/getDataByEmail?email=${email}&password=${password}`)
		.then((res) => checkResponse<TUserInfo>(res))
		.then((data) => {
			if (data) return data;
			return Promise.reject(data);
		});

export const updateUsersPasswordById = (data: TUserPasswordData) =>
	fetch(`${URL}/user/getDataByEmail`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		} as HeadersInit,
		body: JSON.stringify(data)
	})
		.then((res) => checkResponse<TTasksResponse>(res))
		.then((data) => {
			if (data) return data;
			return Promise.reject(data);
		});

export const api = {
	getUserTasksInfo,
	getLastTaskInfo,
	getUserTaskByIdInfo,
	updateOldTask,
	deleteOldTask,
	addNewTask,
	deleteUserOldTask,
	getUserInfo,
	updateUsersPasswordById
};
