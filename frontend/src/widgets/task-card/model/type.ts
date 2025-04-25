import { TTask } from '@/shared/model/types';

export type TaskCardProps = {
	task: TTask;
	deleteTask: (id: number) => void;
};
