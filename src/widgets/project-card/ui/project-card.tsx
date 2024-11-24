import React, { FC } from 'react';

import styles from '../../../shared/ui/styles.module.css';
import './project-card.css';
import { ProjectCardUIProps } from './type';
import Link from 'next/link';

export const ProjectCardUI: FC<ProjectCardUIProps> = ({ projectInfo }) => {
	return (
		<div className='project'>
			<p className='project-id'>{projectInfo.id}</p>
			<Link
				className={`project-name ${styles.isClicked}`}
				href={`/project:${projectInfo.id}`}
			>
				{projectInfo.name}
			</Link>
		</div>
	);
};
