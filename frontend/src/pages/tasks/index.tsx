// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/no-unresolved */
import { FC, useEffect, useState } from 'react';
import {
	addUserTask,
	getTaskData,
	getTasks,
	removeTask,
	removeUserTask
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

export type TasksProps = {
	userId: number | null;
};

const Tasks: FC<TasksProps> = ({ userId }) => {
	const [showAddTaskModal, setShowAddTaskModal] = useState(false);
	const useAppDispatch = () => useDispatch<AppDispatch>();
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (userId) dispatch(getTasks({ userId }));
		else router.push('/');
	});
	const tasks: TTask[] = useSelector(getTaskData);
	const tasksIds: number[] = [];
	const deleteTask = (id: number) => {
		dispatch(removeTask({ id }));
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
					onClose={() => {
						setShowAddTaskModal(false);
					}}
				>
					<AddNewForm setShowModal={setShowAddTaskModal} userId={userId} />
				</Modal>
			)}
		</>
	);
};

export default Tasks;
