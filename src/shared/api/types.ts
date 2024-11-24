import { TProject, TUser } from '../model/types';

type TServerResponse<T> = {
	success: boolean;
} & T;

export type TProjectsResponse = TServerResponse<{
	data: TProject[];
}>;

export type TUsersResponse = TServerResponse<{
	data: TUser[];
}>;

export type TProfileResponse = TServerResponse<{
	data: TUser;
}>;
