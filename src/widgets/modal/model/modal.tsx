import { FC, useEffect } from 'react';
import { TModalProps } from './type';
import { ModalUI } from '../ui';

export const Modal: FC<TModalProps> = ({ onClose, children }) => {
	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose();
			}
		};

		document.addEventListener('keydown', handleEsc);
		return () => {
			document.removeEventListener('keydown', handleEsc);
		};
	}, [onClose]);

	return <ModalUI onClose={onClose}>{children}</ModalUI>;
};
