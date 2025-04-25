import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from '@/shared/lib/store/store';
import {
	addTask,
	getLoadingStatus,
	getTaskData,
	getTasks
} from '@/shared/lib/store/slices/tasks';
import { TasksList } from '@/widgets/task-list';
import { TaskSubHeader } from '@/widgets/task-subheader';
import { TasksListNav } from '@/widgets/task-list-nav';
import { TTask } from '@/shared/model/types';
import { Modal } from '@/widgets/modal/model';
import { AddNewForm } from '@/widgets/add-task-form';

const Tasks: FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getTasks());
	}, []);
	const areTasksLoading: boolean = useSelector(getLoadingStatus);
	const tasks: TTask[] = useSelector(getTaskData);
	const tasksIds: number[] = [];
	tasks.map((task) => tasksIds.push(task.id));
	const [showAddTaskModal, setShowAddTaskModal] = useState(false);
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
			{!areTasksLoading && (
				<>
					<TasksList tasks={tasks} deleteTask={deleteTask} />
				</>
			)}
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
