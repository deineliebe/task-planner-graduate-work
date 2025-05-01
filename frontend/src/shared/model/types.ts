export type TTask = {
	id: number;
	name: string;
	description: string;
	deadline: Date | null;
	status: string;
	created_at: Date;
};

export type TUserInfo = {
	id: number;
	email: string;
	password: string;
};
