import './projectSubHeader.css';
import styles from '../../../shared/ui/styles.module.css';
import buttonStyles from '../../../shared/ui/button.module.css';
import { FC } from 'react';

export type ProjectSubHeaderProps = {
	setShowModal: (showModal: boolean) => void;
};

const ProjectSubHeader: FC<ProjectSubHeaderProps> = ({ setShowModal }) => {
	return (
		<section className='subheader'>
			<div className='subheader-upper-part'>
				<div className='subheader-selected'>
					<button
						className={`${buttonStyles.button} ${styles.blue} ${styles.isShadowed} ${styles.isClicked}`}
					>
						<p>Tasks</p>
					</button>
					<button
						className={`${buttonStyles.button} ${styles.blue} ${styles.isShadowed} ${styles.isClicked}`}
					>
						<p>Notes</p>
					</button>
				</div>
				<button
					className={`${buttonStyles.button} ${styles.blue} ${styles.isShadowed} ${buttonStyles['button-large-plus']} ${styles.isClicked}`}
					onClick={() => setShowModal(true)}
				>
					<span>New project</span>
				</button>
			</div>
		</section>
	);
};

export default ProjectSubHeader;
