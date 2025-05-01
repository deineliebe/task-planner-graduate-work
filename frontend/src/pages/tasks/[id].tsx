import TaskFull from '@/widgets/task-full/ui/taskFull';
import { FC } from 'react';
import { TasksProps } from '.';

const Task: FC<TasksProps> = ({ userId }) => {
	return <TaskFull userId={userId} />;
};

export default Task;
