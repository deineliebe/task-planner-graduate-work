import { TTask, TUserInfo } from '../model/types';

type TServerResponse<T> = {
	success: boolean;
} & T;

export type TTasksResponse = TServerResponse<{
	data: TTask;
}>;

export type TUsersResponse = TServerResponse<{
	data: TUserInfo[];
}>;

export type TUserInfoResponse = TServerResponse<{
	data: TUserInfo[];
}>;

export type TProfileResponse = TServerResponse<{
	data: TUserInfo;
}>;
