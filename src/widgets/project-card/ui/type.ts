export type ProjectCardUIProps = {
	projectInfo: TProjectInfo;
	deleteProject: (id: number) => void;
};

type TProjectInfo = {
	id: number;
	name: string;
	status: string;
	last_update: Date;
};
