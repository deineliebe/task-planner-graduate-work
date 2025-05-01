import { FC, SyntheticEvent } from 'react';
import addTaskStyles from './settings.module.css';
import formStyles from '../../../shared/ui/form.module.css';
import buttonStyles from '../../../shared/ui/button.module.css';
import inputStyles from '../../../shared/ui/input.module.css';
import styles from '../../../shared/ui/styles.module.css';

import 'react-datepicker/dist/react-datepicker.css';

type SettingsProps = {
	setShowModal: (showModal: boolean) => void;
};

const Settings: FC<SettingsProps> = ({ setShowModal }) => {
	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		const userData = {
			email: (document.getElementById('settings_email') as HTMLInputElement)
				?.value,
			tg: (document.getElementById('settings_tg') as HTMLInputElement)?.value,
			password: (
				document.getElementById('settings_password') as HTMLInputElement
			)?.value
		};
		console.log(userData);
		setShowModal(false);
	};
	return (
		<>
			<form
				id='add-task'
				name='add-task'
				className={addTaskStyles['add-task']}
				onSubmit={handleSubmit}
			>
				<p
					className={`${formStyles['form-heading']} ${addTaskStyles['add-task-heading']}`}
				>
					Настройки
				</p>
				<section
					className={`${formStyles['form-section']} ${addTaskStyles['add-task-section']}`}
				>
					<fieldset className={`${formStyles['form-field']}`}>
						<label
							className={`${formStyles['form-label']}`}
							htmlFor='settings_email'
						>
							E-mail
						</label>
						<input
							type='text'
							id='settings_email'
							name='settings_email'
							className={`${inputStyles.input} ${addTaskStyles['add-task-input']}`}
							required
						/>
					</fieldset>
					<fieldset className={`${formStyles['form-field']}`}>
						<label
							className={`${formStyles['form-label']}`}
							htmlFor='settings_tg'
						>
							Новый пароль
						</label>
						<input
							type='text'
							id='settings_tg'
							name='settings_tg'
							className={`${inputStyles.input} ${addTaskStyles['add-task-input']}`}
							required
						/>
					</fieldset>
					<fieldset className={`${formStyles['form-field']}`}>
						<label
							className={`${formStyles['form-label']}`}
							htmlFor='settings_password'
						>
							Старый пароль
						</label>
						<input
							type='text'
							id='settings_password'
							name='settings_password'
							className={`${inputStyles.input} ${addTaskStyles['add-task-input']}`}
							required
						/>
					</fieldset>
				</section>
				<div className={`${formStyles['form-footer']}`}>
					<input
						type='reset'
						className={`${buttonStyles.button} ${buttonStyles.buttonLarge} ${buttonStyles.buttonCommon} ${buttonStyles.isShadowed} ${styles.isClicked}`}
						value='Отмена'
						onClick={() => setShowModal(false)}
					/>
					<button
						type='submit'
						className={`${buttonStyles.button} ${buttonStyles.buttonLarge} ${buttonStyles.buttonCommon} ${buttonStyles.isShadowed} ${styles.isClicked}`}
					>
						Изменить
					</button>
				</div>
			</form>
		</>
	);
};

export default Settings;
