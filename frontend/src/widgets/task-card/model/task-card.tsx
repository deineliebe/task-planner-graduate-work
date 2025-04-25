import { FC } from 'react';
import { TaskCardUI } from '../ui';
import { TaskCardProps } from './type';

export const TaskCard: FC<TaskCardProps> = ({ task, deleteTask }) => {
	return <TaskCardUI taskInfo={task} deleteTask={deleteTask} />;
};
