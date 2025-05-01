import { FC, useState } from 'react';
import styles from '../../shared/ui/styles.module.css';
import buttonStyles from '../../shared/ui/button.module.css';
import { Login } from '@/widgets/authorization';
import { Registration } from '@/widgets/registration';

type AuthorizationProps = {
	setUserId: (id: number | null) => void;
};

const Authorization: FC<AuthorizationProps> = ({ setUserId }) => {
	const [isRegistrationMode, setRegistrationMode] = useState(false);
	return (
		<>
			<button
				className={`${buttonStyles.button} ${buttonStyles.buttonLarge} ${buttonStyles.buttonCommon} ${buttonStyles.isShadowed} ${styles.isClicked} ${buttonStyles.buttonUp}`}
				onClick={() => setRegistrationMode(!isRegistrationMode)}
			>
				{isRegistrationMode ? 'Вход' : 'Регистрация'}
			</button>

			{!isRegistrationMode ? <Login setUserId={setUserId} /> : <Registration />}
		</>
	);
};

export default Authorization;
