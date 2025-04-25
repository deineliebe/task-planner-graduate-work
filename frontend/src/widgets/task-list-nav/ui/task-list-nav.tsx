import navigationStyles from './task-list-nav.module.css';
import { FC } from 'react';

const TasksListNav: FC = () => (
	<div className={navigationStyles['task-list-nav']}>
		<span>Бэклог</span>
		<span>В работе</span>
		<span>На проверке</span>
		<span>В блоке</span>
		<span>Готово</span>
	</div>
);

export default TasksListNav;
