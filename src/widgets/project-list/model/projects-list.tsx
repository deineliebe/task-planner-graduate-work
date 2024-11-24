import { FC } from 'react';
import { ProjectsListUI } from '../ui';
import { TProject } from '@/shared/model/types';

export type ListProjectProps = {
	projects: TProject[];
};

export const ProjectsList: FC<ListProjectProps> = ({ projects }) => {
	const projectByDate = [...projects].sort(
		(a, b) => b.last_update.getTime() - a.last_update.getTime()
	);
	return <ProjectsListUI projectByDate={projectByDate} />;
};

export default ProjectsList;
