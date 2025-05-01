import { FC, useEffect, useState } from 'react';
import {
	addTask,
	getTaskData,
	getTasks
} from '@/shared/lib/store/slices/tasks';
import { TasksList } from '@/widgets/task-list';
import { TaskSubHeader } from '@/widgets/task-subheader';
import { TasksListNav } from '@/widgets/task-list-nav';
import { TTask } from '@/shared/model/types';
import { Modal } from '@/widgets/modal/model';
import { AddNewForm } from '@/widgets/add-task-form';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/shared/lib/store/store';
import router from 'next/router';

type TasksProps = {
	userId: number | null;
};

const Tasks: FC<TasksProps> = ({ userId }) => {
	const [showAddTaskModal, setShowAddTaskModal] = useState(false);
	const useAppDispatch = () => useDispatch<AppDispatch>();
	const dispatch = useAppDispatch();
	useEffect(() => {
		console.log(userId);
		if (userId) dispatch(getTasks({ userId }));
		else router.push('/');
	}, [showAddTaskModal]);
	const tasks: TTask[] = useSelector(getTaskData);
	const tasksIds: number[] = [];
	const deleteTask = (id: number) => {
		const newTasks: TTask[] = [];
		tasks.forEach((task) => {
			if (task.id !== id) newTasks.push(task);
			console.log(task);
		});
		dispatch(addTask(newTasks));
	};
	tasks.map((task) => tasksIds.push(task.id));

	return (
		<>
			<TaskSubHeader
				setShowModal={setShowAddTaskModal}
				phrase={'Добавить задачу'}
			/>
			<TasksListNav />
			<>
				<TasksList tasks={tasks} deleteTask={deleteTask} />
			</>
			{showAddTaskModal && (
				<Modal
					title={'Добавить задачу'}
					onClose={() => setShowAddTaskModal(false)}
				>
					<AddNewForm tasks={tasks} setShowModal={setShowAddTaskModal} />
				</Modal>
			)}
		</>
	);
};

export default Tasks;
