export type TaskCardUIProps = {
	taskInfo: TTaskInfo;
	deleteTask: (id: number) => void;
};

type TTaskInfo = {
	id: number;
	name: string;
	status: string;
	created_at: Date;
};
