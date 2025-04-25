import { TTask } from '@/shared/model/types';

export type TasksListUIProps = {
	taskByDate: TTask[];
	deleteTask: (id: number) => void;
};
