import './project-list-nav.css';
import { FC } from 'react';

const ProjectsListNav: FC = () => (
	<div className='project-list-nav'>
		<span>To do</span>
		<span>In progress</span>
		<span>On Review</span>
		<span>Done</span>
		<span>Blocked</span>
		<span>Backlog</span>
	</div>
);

export default ProjectsListNav;
