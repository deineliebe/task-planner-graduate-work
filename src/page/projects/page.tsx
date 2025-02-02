import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from '@/shared/lib/store/store';
import {
	addProject,
	getLoadingStatus,
	getProjectData,
	getProjects
} from '@/shared/lib/store/slices/projects';
import { getNotesData } from '@/shared/lib/store/slices/notes';
import { ProjectsList } from '@/widgets/project-list';
import { Header } from '@/widgets/header';
import { ProjectSubHeader } from '@/widgets/project-subheader';
import { ProjectsListNav } from '@/widgets/project-list-nav';
import { TNote, TProject } from '@/shared/model/types';
import { Modal } from '@/widgets/modal/model';
import { AddNewForm } from '@/widgets/add-project-form';
import AddNewNote from '@/widgets/add-note/ui/addNewNote';

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

	const notes: TNote[] = useSelector(getNotesData);
	projects.map((project) => projectsIds.push(project.id));
	const [showAddNoteModal, setShowAddNoteModal] = useState(false);

	const [page, setPage] = useState(0);

	return (
		<>
			<Header projects={projects} />
			<ProjectSubHeader
				setShowModal={page == 0 ? setShowAddProjectModal : setShowAddNoteModal}
				page={page}
				setPage={setPage}
				phrase={page == 0 ? 'Add new project' : 'Add new note'}
			/>
			{page == 0 && <ProjectsListNav />}
			{page == 0 && !areProjectsLoading && (
				<>
					<ProjectsList projects={projects} deleteProject={deleteProject} />
				</>
			)}
			{page == 0
				? showAddProjectModal && (
						<Modal
							title={'Add new project'}
							onClose={() => setShowAddProjectModal(false)}
						>
							<AddNewForm
								projects={projects}
								setShowModal={setShowAddProjectModal}
							/>
						</Modal>
					)
				: showAddNoteModal && (
						<Modal
							title={'Add new note'}
							onClose={() => setShowAddProjectModal(false)}
						>
							<AddNewNote notes={notes} setShowModal={setShowAddNoteModal} />
						</Modal>
					)}
		</>
	);
};

export default Projects;
