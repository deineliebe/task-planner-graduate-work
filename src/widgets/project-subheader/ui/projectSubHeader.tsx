import './projectSubHeader.css';
import styles from '../../../shared/ui/styles.module.css';
import buttonStyles from '../../../shared/ui/button.module.css';
import { FC } from 'react';

export type ProjectSubHeaderProps = {
	setShowModal: (showModal: boolean) => void;
	page: number;
	setPage: (page: number) => void;
};

const ProjectSubHeader: FC<ProjectSubHeaderProps> = ({
	setShowModal,
	page,
	setPage
}) => {
	return (
		<section className='subheader'>
			<div className='subheader-upper-part'>
				<div className='subheader-selected'>
					<button
						className={
							page == 0
								? `${buttonStyles.button} ${buttonStyles.buttonDisabled}`
								: `${buttonStyles.button} ${buttonStyles.buttonCommon} ${buttonStyles.isShadowed} ${styles.isClicked}`
						}
						onClick={() => setPage(0)}
					>
						<p>Tasks</p>
					</button>
					<button
						className={
							page == 1
								? `${buttonStyles.button} ${buttonStyles.buttonDisabled}`
								: `${buttonStyles.button} ${buttonStyles.buttonCommon} ${buttonStyles.isShadowed} ${styles.isClicked}`
						}
						onClick={() => setPage(1)}
					>
						<p>Notes</p>
					</button>
				</div>
				<button
					className={`${buttonStyles.button} ${buttonStyles.buttonCommon} ${buttonStyles.isShadowed} ${buttonStyles.buttonLargePlus} ${styles.isClicked}`}
					onClick={() => setShowModal(true)}
				>
					<span>New project</span>
				</button>
			</div>
		</section>
	);
};

export default ProjectSubHeader;
