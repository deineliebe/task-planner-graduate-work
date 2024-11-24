import { TProject } from '../model/types';
import { TProfileResponse, TProjectsResponse, TUsersResponse } from './types';

const URL = 'http://localhost:3001';

const checkResponse = <T>(res: Response): Promise<T> =>
	res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

export const getProjectsApi = () =>
	fetch(`${URL}/projects`)
		.then((res) => checkResponse<TProjectsResponse>(res))
		.then((data) => {
			if (data?.success) return data;
			return Promise.reject(data);
		});

export const addProjectsApi = (data: TProject[]) =>
	fetch(`${URL}/projects`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		} as HeadersInit,
		body: JSON.stringify({
			data: data,
			success: true
		})
	})
		.then((res) => checkResponse<TProjectsResponse>(res))
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

export const getProfileApi = () =>
	fetch(`${URL}/profile`)
		.then((res) => checkResponse<TProfileResponse>(res))
		.then((data) => {
			if (data?.success) return data;
			return Promise.reject(data);
		});

export const api = {
	getProjectsApi,
	getUsersApi,
	getProfileApi
};
