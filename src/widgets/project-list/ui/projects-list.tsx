import { FC } from 'react';

import { ProjectsListUIProps } from './type';
import { ProjectCard } from '@/widgets/project-card/model';

import './projects-list.css';

export const ProjectsListUI: FC<ProjectsListUIProps> = ({
	projectByDate,
	deleteProject
}) => (
	<div className='project-list'>
		<section className='section-to-do'>
			{projectByDate
				.filter((project) => project.status === 'To Do')
				.map((project) => (
					<ProjectCard
						project={project}
						deleteProject={deleteProject}
						key={project.id}
					/>
				))}
		</section>
		<section className='section-in-progress'>
			{projectByDate
				.filter((project) => project.status === 'In Progress')
				.map((project) => (
					<ProjectCard
						project={project}
						deleteProject={deleteProject}
						key={project.id}
					/>
				))}
		</section>
		<section className='section-on-review'>
			{projectByDate
				.filter((project) => project.status === 'On Review')
				.map((project) => (
					<ProjectCard
						project={project}
						deleteProject={deleteProject}
						key={project.id}
					/>
				))}
		</section>
		<section className='section-done'>
			{projectByDate
				.filter((project) => project.status === 'Done')
				.map((project) => (
					<ProjectCard
						project={project}
						deleteProject={deleteProject}
						key={project.id}
					/>
				))}
		</section>
		<section className='section-blocked'>
			{projectByDate
				.filter((project) => project.status === 'Blocked')
				.map((project) => (
					<ProjectCard
						project={project}
						deleteProject={deleteProject}
						key={project.id}
					/>
				))}
		</section>
		<section className='section-backlog'>
			{projectByDate
				.filter((project) => project.status === 'Backlog')
				.map((project) => (
					<ProjectCard
						project={project}
						deleteProject={deleteProject}
						key={project.id}
					/>
				))}
		</section>
	</div>
);
