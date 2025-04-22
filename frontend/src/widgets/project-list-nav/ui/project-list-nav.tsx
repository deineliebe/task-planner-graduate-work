import './project-list-nav.css';
import { FC } from 'react';

const ProjectsListNav: FC = () => (
	<div className='project-list-nav'>
		<span>Бэклог</span>
		<span>В работе</span>
		<span>На проверке</span>
		<span>В блоке</span>
		<span>Готово</span>
	</div>
);

export default ProjectsListNav;
