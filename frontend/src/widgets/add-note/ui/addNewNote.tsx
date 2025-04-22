import { FC, SyntheticEvent } from 'react';
import './addNewNote.css';
import formStyles from '../../../shared/ui/form.module.css';
import buttonStyles from '../../../shared/ui/button.module.css';
import inputStyles from '../../../shared/ui/input.module.css';
import styles from '../../../shared/ui/styles.module.css';
import { useDispatch } from '@/shared/lib/store/store';
import { TNote } from '@/shared/model/types';

import 'react-datepicker/dist/react-datepicker.css';
import { addNote } from '@/shared/lib/store/slices/notes';

type AddNewNoteProps = {
	notes: TNote[];
	setShowModal: (showModal: boolean) => void;
};

const AddNewFormUI: FC<AddNewNoteProps> = ({ notes, setShowModal }) => {
	const dispatch = useDispatch();
	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		const newNote: TNote = {
			id: notes.length + 1,
			title: (document.getElementById('note_title') as HTMLInputElement)?.value,
			content: (document.getElementById('note_content') as HTMLInputElement)
				?.value,
			last_update: new Date()
		};
		const newNotes: TNote[] = [];
		notes.forEach((note) => {
			newNotes.push(note);
		});
		newNotes.push(newNote);
		dispatch(addNote(newNotes));
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
					Add new note
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
						<label
							className={`${formStyles['form-label']} add-project-label-required`}
							htmlFor='note_content'
						>
							Content
						</label>
						<input
							type='text'
							id='note_content'
							name='note_content'
							className={`${inputStyles.input} add-project-input`}
						/>
					</fieldset>
				</section>
				<div className={`${formStyles['form-footer']}`}>
					<button
						type='reset'
						className={`${buttonStyles.button} ${buttonStyles.buttonLarge} ${buttonStyles.buttonCommon} ${buttonStyles.isShadowed} ${styles.isClicked}`}
					>
						Отмена
					</button>
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
