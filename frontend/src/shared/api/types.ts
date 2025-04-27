import { TTask, TUser } from '../model/types';

type TServerResponse<T> = {
	success: boolean;
} & T;

export type TTasksResponse = TServerResponse<{
	data: TTask[];
}>;

export type TUsersResponse = TServerResponse<{
	data: TUser[];
}>;

export type TProfileResponse = TServerResponse<{
	data: TUser;
}>;
