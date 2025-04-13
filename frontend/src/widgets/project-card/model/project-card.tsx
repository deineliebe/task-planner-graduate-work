import { FC } from 'react';
import { ProjectCardUI } from '../ui';
import { ProjectCardProps } from './type';

export const ProjectCard: FC<ProjectCardProps> = ({
	project,
	deleteProject
}) => {
	return <ProjectCardUI projectInfo={project} deleteProject={deleteProject} />;
};
