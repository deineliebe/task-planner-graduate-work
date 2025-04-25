import React, { FC } from 'react';

import styles from '../../../shared/ui/styles.module.css';
import buttonStyles from '../../../shared/ui/button.module.css';
import cardStyles from './task-card.module.css';
import { TaskCardUIProps } from './type';
import Link from 'next/link';

export const TaskCardUI: FC<TaskCardUIProps> = ({ taskInfo, deleteTask }) => {
	return (
		<div className={cardStyles['task']}>
			<Link
				className={`${cardStyles['task-name']} ${styles.isClicked}`}
				href={`/tasks/${taskInfo.id}`}
			>
				{taskInfo.name}
			</Link>
			<button
				className={`${buttonStyles.button} ${buttonStyles.buttonTransparent} ${buttonStyles.isShadowed} ${styles.isClicked}`}
				onClick={() => deleteTask(taskInfo.id)}
			>
				x
			</button>
		</div>
	);
};
