import header from './header.module.css';
import styles from '../../../shared/ui/styles.module.css';
import buttonStyles from '../../../shared/ui/button.module.css';

import { FC } from 'react';

export type HeaderProps = {
	userId: number | null;
	setUserId: (id: number | null) => void;
	setShowAddSettingsModal: (isShown: boolean) => void;
};

const Header: FC<HeaderProps> = ({
	userId,
	setUserId,
	setShowAddSettingsModal
}) => {
	return (
		<div className={header.header}>
			<div className={header['header-block']}>
				{userId && (
					<>
						<button
							className={`${buttonStyles.button} ${buttonStyles.buttonTransparent} ${buttonStyles.isShadowed} ${styles.isClicked}`}
							onClick={() => {
								setShowAddSettingsModal(true);
							}}
						>
							Настройки
						</button>
						<button
							className={`${buttonStyles.button} ${buttonStyles.buttonTransparent} ${buttonStyles.isShadowed} ${styles.isClicked}`}
							onClick={(evt) => {
								evt.preventDefault();
								setUserId(null);
								console.log(userId);
							}}
						>
							Выйти
						</button>
					</>
				)}
			</div>
		</div>
	);
};

export default Header;
