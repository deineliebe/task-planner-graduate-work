import { FC, useState } from 'react';
import { Header } from '@/widgets/header';
import styles from '../../shared/ui/styles.module.css';
import buttonStyles from '../../shared/ui/button.module.css';
import { Login } from '@/widgets/authorisation';
import { Registration } from '@/widgets/registration';

type AuthorizationProps = {
	setAuthorizedValue: (isAuthorized: boolean) => void;
};

const Authorization: FC<AuthorizationProps> = ({ setAuthorizedValue }) => {
	const [isRegistrationMode, setRegistrationMode] = useState(false);
	return (
		<>
			<button
				className={`${buttonStyles.button} ${buttonStyles.buttonLarge} ${buttonStyles.buttonCommon} ${buttonStyles.isShadowed} ${styles.isClicked} ${buttonStyles.buttonUp}`}
				onClick={() => setRegistrationMode(!isRegistrationMode)}
			>
				{isRegistrationMode ? 'Вход' : 'Регистрация'}
			</button>
			<Header setAuthorizedValue={setAuthorizedValue} isAuthorized={false} />

			{!isRegistrationMode ? (
				<Login setAuthorizedValue={setAuthorizedValue} />
			) : (
				<Registration setAuthorizedValue={setAuthorizedValue} />
			)}
		</>
	);
};

export default Authorization;
