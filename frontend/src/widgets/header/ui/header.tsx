import './header.css';
import styles from '../../../shared/ui/styles.module.css';
import buttonStyles from '../../../shared/ui/button.module.css';

import { FC } from 'react';
import { TProject } from '@/shared/model/types';

export type HeaderProps = {
	projects: TProject[];
};

const Header: FC<HeaderProps> = () => (
	<div className='header'>
		<div className='header-block'>
		</div>
		<div className='header-block'>
			<button
				className={`${buttonStyles.button} ${buttonStyles.buttonTransparent} ${buttonStyles.isShadowed} ${styles.isClicked}`}
			>
				Настройки
			</button>
			<button
				className={`${buttonStyles.button} ${buttonStyles.buttonTransparent} ${buttonStyles.isShadowed} ${styles.isClicked}`}
			>
				Войти
			</button>
		</div>
	</div>
);

export default Header;
