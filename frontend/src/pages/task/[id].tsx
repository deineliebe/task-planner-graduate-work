import { getTaskData, getTasks } from '@/shared/lib/store/slices/tasks';
import { TTask } from '@/shared/model/types';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Task: FC = () => {
	const router = useRouter();
	const { id } = router.query;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getTasks());
	}, []);
	const tasks: TTask[] = useSelector(getTaskData);
	const task = tasks.findLast(function (elem) {
		return elem.id == Number(id);
	});
	console.log(tasks);
	return <>{task?.name}</>;
};

export default Task;
