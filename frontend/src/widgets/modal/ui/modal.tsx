import { FC } from 'react';

import styles from './modal.module.css';

import { TModalUIProps } from './type';
import { ModalOverlayUI } from '../../modal-overlay';

export const ModalUI: FC<TModalUIProps> = ({ onClose, children }) => (
	<>
		<div className={styles.modal}>
			<div className={styles.header}></div>
			<div className={styles.content}>{children}</div>
		</div>
		<ModalOverlayUI onClick={onClose} />
	</>
);
