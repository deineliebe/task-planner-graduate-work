export type TTask = {
	id: number;
	name: string;
	description: string;
	deadline: Date | null;
	status: string;
	created_at: Date;
};

export type TNewTask = {
	name: string;
	description: string;
	status: string;
	deadline: string | null;
	created_at: Date;
};

export type TUserInfo = {
	id: number;
	email: string;
	password: string;
};
