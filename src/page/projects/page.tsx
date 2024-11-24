import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from '@/shared/lib/store/store';
import {
	getLoadingStatus,
	getProjectData,
	getProjects
} from '@/shared/lib/store/slices/projects';
import { ProjectsList } from '@/widgets/project-list';
import { Header } from '@/widgets/header';
import { ProjectSubHeader } from '@/widgets/project-subheader';
import { ProjectsListNav } from '@/widgets/project-list-nav';
import { TProject } from '@/shared/model/types';
import { Modal } from '@/widgets/modal/model';
import { AddNewForm } from '@/widgets/add-project-form';

const Projects: FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProjects());
	}, []);
	const areProjectsLoading: boolean = useSelector(getLoadingStatus);
	const projects: TProject[] = useSelector(getProjectData);
	const projectsIds: number[] = [];
	projects.map((project) => projectsIds.push(project.id));
	const [showAddProjectModal, setShowAddProjectModal] = useState(false);

	return (
		<>
			<Header projects={projects} />
			<ProjectSubHeader setShowModal={setShowAddProjectModal} />
			<ProjectsListNav />
			{!areProjectsLoading && (
				<>
					<ProjectsList projects={projects} />
				</>
			)}
			{showAddProjectModal && (
				<Modal
					title={'Add new project'}
					onClose={() => setShowAddProjectModal(false)}
				>
					<AddNewForm projects={projects} />
				</Modal>
			)}
		</>
	);
};

export default Projects;
