import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from '@/shared/lib/store/store';
import {
	addProject,
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
	const deleteProject = (id: number) => {
		const newProjects: TProject[] = [];
		projects.forEach((project) => {
			if (project.id !== id) newProjects.push(project);
			console.log(project);
		});
		dispatch(addProject(newProjects));
	};
	const [page, setPage] = useState(0);

	return (
		<>
			<Header projects={projects} />
			<ProjectSubHeader
				setShowModal={setShowAddProjectModal}
				page={page}
				setPage={setPage}
			/>
			<ProjectsListNav />
			{!areProjectsLoading && (
				<>
					<ProjectsList projects={projects} deleteProject={deleteProject} />
				</>
			)}
			{showAddProjectModal && (
				<Modal
					title={'Add new project'}
					onClose={() => setShowAddProjectModal(false)}
				>
					<AddNewForm
						projects={projects}
						setShowModal={setShowAddProjectModal}
					/>
				</Modal>
			)}
		</>
	);
};

export default Projects;
