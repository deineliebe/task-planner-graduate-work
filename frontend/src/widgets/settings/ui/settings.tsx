/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable import/no-unresolved */
import { FC, SyntheticEvent, useRef } from 'react';
import addTaskStyles from './settings.module.css';
import formStyles from '../../../shared/ui/form.module.css';
import buttonStyles from '../../../shared/ui/button.module.css';
import styles from '../../../shared/ui/styles.module.css';

import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/shared/lib/store/store';
import { updateUsersPassword } from '@/shared/lib/store/slices/users';

type SettingsProps = {
	setShowModal: (showModal: boolean) => void;
	userId: number;
};

const Settings: FC<SettingsProps> = ({ setShowModal, userId }) => {
	const useAppDispatch = () => useDispatch<AppDispatch>();
	const dispatch = useAppDispatch();
	const oldPasswordRef = useRef<HTMLInputElement>(null);
	const newPasswordRef = useRef<HTMLInputElement>(null);
	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		const userData = {
			id: userId,
			oldPassword: oldPasswordRef.current?.value || '',
			newPassword: newPasswordRef.current?.value || ''
		};
		console.log(userData);
		dispatch(updateUsersPassword(userData));
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
							htmlFor='settings_tg'
						>
							Новый пароль
						</label>
						<input
							type='text'
							id='settings_new_password'
							name='settings_new_password'
							ref={newPasswordRef}
							className={`${addTaskStyles['add-task-input']}`}
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
							id='settings_old_password'
							name='settings_old_password'
							className={`${addTaskStyles['add-task-input']}`}
							ref={oldPasswordRef}
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
