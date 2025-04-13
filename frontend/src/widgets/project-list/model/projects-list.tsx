import { FC } from 'react';
import { ProjectsListUI } from '../ui';
import { TProject } from '@/shared/model/types';

export type ListProjectProps = {
	projects: TProject[];
	deleteProject: (id: number) => void;
};

export const ProjectsList: FC<ListProjectProps> = ({
	projects,
	deleteProject
}) => {
	const projectByDate = [...projects].sort(
		(a, b) =>
			new Date(b.last_update).getTime() - new Date(a.last_update).getTime()
	);
	return (
		<ProjectsListUI
			projectByDate={projectByDate}
			deleteProject={deleteProject}
		/>
	);
};

export default ProjectsList;
