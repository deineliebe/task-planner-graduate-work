import './projectSubHeader.css';
import styles from '../../../shared/ui/styles.module.css';
import buttonStyles from '../../../shared/ui/button.module.css';
import { FC } from 'react';

export type ProjectSubHeaderProps = {
	setShowModal: (showModal: boolean) => void;
	page: number;
	setPage: (page: number) => void;
	phrase: string;
};

const ProjectSubHeader: FC<ProjectSubHeaderProps> = ({
	setShowModal,
	page,
	setPage,
	phrase
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
				</div>
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

export default ProjectSubHeader;
