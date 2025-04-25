export type TTask = {
	id: number;
	name: string;
	description: string;
	deadline: Date | null;
	status: string;
	last_update: Date;
};

export type TUser = {
	name: string;
};
