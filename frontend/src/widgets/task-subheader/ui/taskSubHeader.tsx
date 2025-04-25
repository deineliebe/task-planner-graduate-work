import subheaderStyles from './taskSubHeader.module.css';
import styles from '../../../shared/ui/styles.module.css';
import buttonStyles from '../../../shared/ui/button.module.css';
import { FC } from 'react';

export type TaskSubHeaderProps = {
	setShowModal: (showModal: boolean) => void;
	phrase: string;
};

const TaskSubHeader: FC<TaskSubHeaderProps> = ({ setShowModal, phrase }) => {
	return (
		<section className={subheaderStyles.subheader}>
			<div className={subheaderStyles['subheader-upper-part']}>
				<button
					className={`${buttonStyles.button} ${buttonStyles.buttonCommon} ${buttonStyles.isShadowed} ${buttonStyles.buttonLargePlus} ${styles.isClicked}`}
					onClick={() => setShowModal(true)}
				>
					<span>{phrase}</span>
				</button>
			</div>
		</section>
	);
};

export default TaskSubHeader;
