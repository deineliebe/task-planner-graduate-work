import { FC } from 'react';

import { ProjectsListUIProps } from './type';
import { ProjectCard } from '@/widgets/project-card/model';

export const ProjectsListUI: FC<ProjectsListUIProps> = ({ projectByDate }) => (
	<section>
		{projectByDate.map((project) => (
			// eslint-disable-next-line react/jsx-key
			<ProjectCard project={project} />
		))}
	</section>
);
