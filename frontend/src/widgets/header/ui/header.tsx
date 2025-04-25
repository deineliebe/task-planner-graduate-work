import header from './header.module.css';
import styles from '../../../shared/ui/styles.module.css';
import buttonStyles from '../../../shared/ui/button.module.css';
import { useRouter } from 'next/navigation';

import { FC } from 'react';

export type HeaderProps = {
	isAuthorized: boolean;
	setAuthorizedValue: (isAuthorized: boolean) => void;
};

const Header: FC<HeaderProps> = ({ isAuthorized, setAuthorizedValue }) => {
	const router = useRouter();
	return (
		<div className={header.header}>
			<div className={header['header-block']}>
				{isAuthorized && (
					<>
						<button
							className={`${buttonStyles.button} ${buttonStyles.buttonTransparent} ${buttonStyles.isShadowed} ${styles.isClicked}`}
						>
							Настройки
						</button>
						<button
							className={`${buttonStyles.button} ${buttonStyles.buttonTransparent} ${buttonStyles.isShadowed} ${styles.isClicked}`}
							onClick={() => {
								setAuthorizedValue(false);
								router.push('/');
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
