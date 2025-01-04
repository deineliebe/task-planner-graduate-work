import { TProject } from '@/shared/model/types';

export type ProjectsListUIProps = {
	projectByDate: TProject[];
	deleteProject: (id: number) => void;
};
