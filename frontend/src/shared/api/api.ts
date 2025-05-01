import { TTask, TUserInfo } from '../model/types';
import { TTasksResponse, TUsersResponse } from './types';

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

export const getTaskApi = (id: number) =>
	fetch(`${URL}/tasks/${id}`)
		.then((res) => checkResponse<TTasksResponse>(res))
		.then((data) => {
			if (data?.success) return data;
			return Promise.reject(data);
		});

export const addTasksApi = (data: TTask[]) =>
	fetch(`${URL}/tasks`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		} as HeadersInit,
		body: JSON.stringify({
			data: data,
			success: true
		})
	})
		.then((res) => checkResponse<TTasksResponse>(res))
		.then((data) => {
			if (data?.success) return data;
			return Promise.reject(data);
		});

export const getUsersApi = () =>
	fetch(`${URL}/users`)
		.then((res) => checkResponse<TUsersResponse>(res))
		.then((data) => {
			if (data?.success) return data;
			return Promise.reject(data);
		});

export const getUserInfo = (email: string, password: string) =>
	fetch(`${URL}/user/getDataByEmail?email=${email}&password=${password}`)
		.then((res) => checkResponse<TUserInfo>(res))
		.then((data) => {
			if (data) return data;
			return Promise.reject(data);
		});

export const api = {
	getUserTasksInfo,
	getUsersApi,
	getUserInfo
};
