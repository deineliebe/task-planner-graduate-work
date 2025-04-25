import { FC } from 'react';

import { TasksListUIProps } from './type';
import { TaskCard } from '@/widgets/task-card/model';

import listStyles from './tasks-list.module.css';

export const TasksListUI: FC<TasksListUIProps> = ({
	taskByDate,
	deleteTask
}) => (
	<div className={listStyles['task-list']}>
		<section className={listStyles['section-to-do']}>
			{taskByDate
				.filter((task) => task.status === 'Бэклог')
				.map((task) => (
					<TaskCard task={task} deleteTask={deleteTask} key={task.id} />
				))}
		</section>
		<section className={listStyles['section-in-progress']}>
			{taskByDate
				.filter((task) => task.status === 'В работе')
				.map((task) => (
					<TaskCard task={task} deleteTask={deleteTask} key={task.id} />
				))}
		</section>
		<section className={listStyles['section-on-review']}>
			{taskByDate
				.filter((task) => task.status === 'На проверке')
				.map((task) => (
					<TaskCard task={task} deleteTask={deleteTask} key={task.id} />
				))}
		</section>
		<section className={listStyles['section-blocked']}>
			{taskByDate
				.filter((task) => task.status === 'В блоке')
				.map((task) => (
					<TaskCard task={task} deleteTask={deleteTask} key={task.id} />
				))}
		</section>
		<section className={listStyles['section-done']}>
			{taskByDate
				.filter((task) => task.status === 'Готово')
				.map((task) => (
					<TaskCard task={task} deleteTask={deleteTask} key={task.id} />
				))}
		</section>
	</div>
);
