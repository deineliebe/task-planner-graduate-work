import { TProject } from '@/shared/model/types';

export type ProjectCardProps = {
	project: TProject;
	deleteProject: (id: number) => void;
};
