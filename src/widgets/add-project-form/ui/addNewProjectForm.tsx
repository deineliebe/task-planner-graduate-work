import { FC, SyntheticEvent } from 'react';
import './addNewProjectForm.css';
import formStyles from '../../../shared/ui/form.module.css';
import buttonStyles from '../../../shared/ui/button.module.css';
import inputStyles from '../../../shared/ui/input.module.css';
import styles from '../../../shared/ui/styles.module.css';
import { useDispatch } from '@/shared/lib/store/store';
import { addProject } from '@/shared/lib/store/slices/projects';
import { TProject } from '@/shared/model/types';

import 'react-datepicker/dist/react-datepicker.css';

type AddNewFormProps = {
	projects: TProject[];
};

const AddNewFormUI: FC<AddNewFormProps> = ({ projects }) => {
	const onStatusClick = (evt: React.MouseEvent) => {
		document.body
			.querySelector(`.${formStyles['form-button-in-bar-active']}`)
			?.classList.remove(`${formStyles['form-button-in-bar-active']}`);
		(evt?.target as HTMLElement)?.classList?.add(
			`${formStyles['form-button-in-bar-active']}`
		);
	};
	const dispatch = useDispatch();
	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		const newProject: TProject = {
			id: projects.length + 1,
			name: (document.getElementById('project_name') as HTMLInputElement)
				?.value,
			status: (
				document.body.querySelector(
					`.${formStyles['form-button-in-bar-active']}`
				) as HTMLButtonElement
			)?.innerText,
			last_update: new Date()
		};
		const newProjects: TProject[] = [];
		projects.forEach((project) => {
			newProjects.push(project);
		});
		newProjects.push(newProject);
		dispatch(addProject(newProjects));
	};
	return (
		<>
			<form
				id='add-project'
				name='add-project'
				className='add-project'
				onSubmit={handleSubmit}
			>
				<p className={`${formStyles['form-heading']} add-project-heading`}>
					Add new project
				</p>
				<section
					className={`${formStyles['form-section']} add-project-section`}
				>
					<fieldset className={`${formStyles['form-field']}`}>
						<label
							className={`${formStyles['form-label']} add-project-label-required`}
							htmlFor='project_name'
						>
							Project name{' '}
						</label>
						<input
							type='text'
							id='project_name'
							name='project_name'
							className={`${inputStyles.input} add-project-input`}
							required
						/>
					</fieldset>
					<fieldset className={`${formStyles['form-field']}`}>
						<label className={`${formStyles['form-label']}`} htmlFor='pms'>
							Status
						</label>
						<div id='status' className={`${formStyles['form-buttons-bar']}`}>
							<button
								type='button'
								className={`${formStyles['form-button-in-bar']} ${formStyles['form-button-in-bar-active']} ${styles.isShadowed} ${styles.isClicked}`}
								onClick={onStatusClick}
							>
								To Do
							</button>
							<button
								type='button'
								className={`${formStyles['form-button-in-bar']} ${styles.isShadowed} ${styles.isClicked}`}
								onClick={onStatusClick}
							>
								In Progress
							</button>
							<button
								type='button'
								className={`${formStyles['form-button-in-bar']} ${styles.isShadowed} ${styles.isClicked}`}
								onClick={onStatusClick}
							>
								On Review
							</button>
							<button
								type='button'
								className={`${formStyles['form-button-in-bar']} ${styles.isShadowed} ${styles.isClicked}`}
								onClick={onStatusClick}
							>
								Done
							</button>
							<button
								type='button'
								className={`${formStyles['form-button-in-bar']} ${styles.isShadowed} ${styles.isClicked}`}
								onClick={onStatusClick}
							>
								Backlog
							</button>
						</div>
					</fieldset>
				</section>
				<div className={`${formStyles['form-footer']}`}>
					<button
						type='reset'
						className={`${buttonStyles.button} ${buttonStyles['button-large']} ${styles.white}`}
					>
						Cancel
					</button>
					<button
						type='submit'
						className={`${buttonStyles.button} ${buttonStyles['button-large']} ${styles.blue}`}
					>
						Add project
					</button>
				</div>
			</form>
		</>
	);
};

export default AddNewFormUI;
