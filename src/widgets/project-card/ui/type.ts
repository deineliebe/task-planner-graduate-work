export type ProjectCardUIProps = {
	projectInfo: TProjectInfo;
};

type TProjectInfo = {
	id: number;
	name: string;
	status: string;
	last_update: Date;
};
