import { FC } from 'react';
import { TasksListUI } from '../ui';
import { TTask } from '@/shared/model/types';

export type ListTaskProps = {
	tasks: TTask[];
	deleteTask: (id: number) => void;
};

export const TasksList: FC<ListTaskProps> = ({ tasks, deleteTask }) => {
	const taskByDate = [...tasks].sort(
		(a, b) =>
			new Date(b.last_update).getTime() - new Date(a.last_update).getTime()
	);
	return <TasksListUI taskByDate={taskByDate} deleteTask={deleteTask} />;
};

export default TasksList;
