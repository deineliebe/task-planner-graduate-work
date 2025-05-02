import { FC } from 'react';
import { TasksListUI } from '../ui';
// eslint-disable-next-line import/no-unresolved
import { TTask } from '@/shared/model/types';

export type ListTaskProps = {
	tasks: TTask[];
	deleteTask: (id: number) => void;
};

export const TasksList: FC<ListTaskProps> = ({ tasks, deleteTask }) => {
	const taskByDate = [...tasks].sort(
		(a, b) =>
			new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
	);
	return <TasksListUI taskByDate={taskByDate} deleteTask={deleteTask} />;
};

export default TasksList;
