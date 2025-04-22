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
				.filter((project) => project.status === 'Бэклог')
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
				.filter((project) => project.status === 'В работе')
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
				.filter((project) => project.status === 'На проверке')
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
				.filter((project) => project.status === 'В блоке')
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
				.filter((project) => project.status === 'Готово')
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
