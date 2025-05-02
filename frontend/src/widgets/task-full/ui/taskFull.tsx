/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable import/no-unresolved */
import {
	getCurrentTaskData,
	getTaskById,
	updateTask
} from '@/shared/lib/store/slices/tasks';
import formStyles from '../../../shared/ui/form.module.css';
import buttonStyles from '../../../shared/ui/button.module.css';
import styles from '../../../shared/ui/styles.module.css';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import taskFullStyles from './taskFull.module.css';
import moment from 'moment';
import { AppDispatch } from '@/shared/lib/store/store';

const TaskFull: FC = () => {
	const useAppDispatch = () => useDispatch<AppDispatch>();
	const dispatch = useAppDispatch();
	const router = useRouter();
	const { id } = router.query;
	dispatch(getTaskById({ id: Number(id) }));
	const task = useSelector(getCurrentTaskData)[0];
	const [startDate, setStartDate] = useState<Date | null>(
		task?.deadline || null
	);
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
	const handleSubmit = () => {
		const oldTask = {
			id: task ? task.id : 0,
			name: (document.getElementById('task_name') as HTMLInputElement)?.value,
			description: (
				document.getElementById('task_description') as HTMLInputElement
			)?.value,
			deadline: startDate,
			status: (
				document.body.querySelector(
					`.${formStyles['form-button-in-bar-active']}`
				) as HTMLButtonElement
			)?.innerText,
			created_at: task?.created_at || moment().toISOString()
		};
		console.log(oldTask);
		dispatch(updateTask({ task: oldTask }));
	};
	return (
		<>
			<div className={taskFullStyles['task-header']}>
				<div></div>
				<p
					className={`${formStyles['form-heading']} ${taskFullStyles['task-header-text']}`}
				>
					Задача №{task?.id}
				</p>
				<button
					className={`${buttonStyles.button} ${buttonStyles.buttonLarge} ${buttonStyles.buttonCommon} ${buttonStyles.isShadowed} ${styles.isClicked}`}
					onClick={() => {
						router.push('/tasks');
					}}
				>
					Выйти в меню
				</button>
			</div>
			<section
				className={`${taskFullStyles['task-section']} ${formStyles['form-section']}`}
			>
				<fieldset className={`${formStyles['form-field']}`}>
					<label
						className={`${formStyles['form-label']} ${taskFullStyles['task-label']}`}
						htmlFor='task_name'
					>
						Название
					</label>
					<input
						type='text'
						id='task_name'
						name='task_name'
						className={`${taskFullStyles['task-text']}`}
						defaultValue={task?.name}
						required
					/>
				</fieldset>
				<fieldset className={`${formStyles['form-field']}`}>
					<label
						className={`${formStyles['form-label']} ${taskFullStyles['task-label']}`}
						htmlFor='task_description'
					>
						Описание
					</label>
					<textarea
						id='task_description'
						name='task_description'
						className={`${taskFullStyles['task-text']}`}
						defaultValue={task?.description}
					/>
				</fieldset>
				<fieldset
					className={`${formStyles['form-field']} ${taskFullStyles['task-deadline']}`}
				>
					<label
						className={`${formStyles['form-label']} ${taskFullStyles['task-label']}`}
						htmlFor='deadline'
					>
						Дедлайн
					</label>
					<DatePicker
						selected={startDate}
						className={`${taskFullStyles['task-text']}`}
						onChange={(date) => setStartDate(date)}
					/>
				</fieldset>
				<fieldset className={`${formStyles['form-field']}`}>
					<label
						className={`${formStyles['form-label']} ${taskFullStyles['task-label']}`}
						htmlFor='status'
					>
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
				<button
					className={`${buttonStyles.button} ${buttonStyles.buttonLarge} ${buttonStyles.buttonCommon} ${buttonStyles.isShadowed} ${styles.isClicked}`}
					onClick={handleSubmit}
				>
					Сохранить
				</button>
			</section>
		</>
	);
};

export default TaskFull;
