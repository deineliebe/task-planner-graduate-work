import { FC } from 'react';
import { Header } from '@/widgets/header';
import styles from '../../shared/ui/styles.module.css';
import buttonStyles from '../../shared/ui/button.module.css';
import './authorization.css';

type AuthorizationProps = {
	setAuthorizedValue: (isAuthorized: boolean) => void;
};

const Authorization: FC<AuthorizationProps> = ({ setAuthorizedValue }) => {
	return (
		<>
			<Header setAuthorizedValue={setAuthorizedValue} isAuthorized={false} />
			<form
				id='authorization'
				name='authorization'
				className='authorizationForm'
			>
				<label htmlFor='email'>E-mail</label>
				<input type='text' id='email' name='email' required></input>
				<label htmlFor='password'>Пароль</label>
				<input type='text' id='password' name='password' required></input>
				<button
					type='submit'
					className={`${buttonStyles.button} ${buttonStyles.buttonLarge} ${buttonStyles.buttonCommon} ${buttonStyles.isShadowed} ${styles.isClicked}`}
					onClick={() => setAuthorizedValue(true)}
				>
					Войти
				</button>
			</form>
		</>
	);
};

export default Authorization;
