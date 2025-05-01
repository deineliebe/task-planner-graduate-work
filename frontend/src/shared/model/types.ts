export type TTask = {
	id: number;
	name: string;
	description: string;
	deadline: Date | null;
	status: string;
	created_at: Date | string;
};

export type TNewTask = {
	name: string;
	description: string | null;
	status: string;
	deadline: string | null;
	created_at: Date;
};

export type TUserInfo = {
	id: number;
	email: string;
	password: string;
};

export type TUserTask = {
	task_id: number;
	user_id: number;
};
