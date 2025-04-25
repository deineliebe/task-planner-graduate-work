export type TTask = {
	id: number;
	name: string;
	last_update: Date;
	status: string;
};

export type TNote = {
	id: number;
	title: string;
	content: string;
	last_update: Date;
};

export type TUser = {
	name: string;
};
