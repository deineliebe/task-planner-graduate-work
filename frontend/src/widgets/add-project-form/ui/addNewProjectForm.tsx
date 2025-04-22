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
	setShowModal: (showModal: boolean) => void;
};

const AddNewFormUI: FC<AddNewFormProps> = ({ projects, setShowModal }) => {
	const onStatusClick = (evt: React.MouseEvent) => {
		document.body
			.querySelector(`.${formStyles['form-button-in-bar-active']}`)
			?.classList.add(`${buttonStyles.buttonCommon}`);
		document.body
			.querySelector(`.${formStyles['form-button-in-bar-active']}`)
			?.classList.add(`${styles.isClicked}`);
		document.body
			.querySelector(`.${formStyles['form-button-in-bar-active']}`)
			?.classList.remove(`${formStyles['form-button-in-bar-active']}`);
		(evt?.target as HTMLElement)?.classList?.add(
			`${formStyles['form-button-in-bar-active']}`
		);
		(evt?.target as HTMLElement)?.classList?.remove(
			`${buttonStyles.buttonCommon}`
		);
		(evt?.target as HTMLElement)?.classList?.remove(`${styles.isClicked}`);
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
		setShowModal(false);
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
					Добавление задачи
				</p>
				<section
					className={`${formStyles['form-section']} add-project-section`}
				>
					<fieldset className={`${formStyles['form-field']}`}>
						<label
							className={`${formStyles['form-label']} add-project-label-required`}
							htmlFor='project_name'
						>
							Название{' '}
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
							Статус
						</label>
						<div id='status' className={`${formStyles['form-buttons-bar']}`}>
							<button
								type='button'
								className={`${formStyles['form-button-in-bar']} ${formStyles['form-button-in-bar-active']} ${buttonStyles.isShadowed}`}
								onClick={onStatusClick}
							>
								Бэклог
							</button>
							<button
								type='button'
								className={`${formStyles['form-button-in-bar']} ${buttonStyles.buttonCommon} ${buttonStyles.isShadowed} ${styles.isClicked}`}
								onClick={onStatusClick}
							>
								В работе
							</button>
							<button
								type='button'
								className={`${formStyles['form-button-in-bar']} ${buttonStyles.buttonCommon} ${buttonStyles.isShadowed} ${styles.isClicked}`}
								onClick={onStatusClick}
							>
								На проверке
							</button>
							<button
								type='button'
								className={`${formStyles['form-button-in-bar']} ${buttonStyles.buttonCommon} ${buttonStyles.isShadowed} ${styles.isClicked}`}
								onClick={onStatusClick}
							>
								В блоке
							</button>
							<button
								type='button'
								className={`${formStyles['form-button-in-bar']} ${buttonStyles.buttonCommon} ${buttonStyles.isShadowed} ${styles.isClicked}`}
								onClick={onStatusClick}
							>
								Готово
							</button>
						</div>
					</fieldset>
				</section>
				<div className={`${formStyles['form-footer']}`}>
					<input
						type='reset'
						className={`${buttonStyles.button} ${buttonStyles.buttonLarge} ${buttonStyles.buttonCommon} ${buttonStyles.isShadowed} ${styles.isClicked}`}
						value="Отмена"
					/>
					<button
						type='submit'
						className={`${buttonStyles.button} ${buttonStyles.buttonLarge} ${buttonStyles.buttonCommon} ${buttonStyles.isShadowed} ${styles.isClicked}`}
					>
						Добавить
					</button>
				</div>
			</form>
		</>
	);
};

export default AddNewFormUI;
