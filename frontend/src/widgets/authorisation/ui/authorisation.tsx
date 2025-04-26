import authorisationStyles from './authorisation.module.css';
import styles from '../../../shared/ui/styles.module.css';
import buttonStyles from '../../../shared/ui/button.module.css';
import { FC, SyntheticEvent } from 'react';

type AuthorizationProps = {
	setAuthorizedValue: (isAuthorized: boolean) => void;
};

const Login: FC<AuthorizationProps> = ({ setAuthorizedValue }) => {
	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		const userData = {
			email: (document.getElementById('email') as HTMLInputElement)?.value,
			password: (document.getElementById('password') as HTMLInputElement)?.value
		};
		console.log(userData);
		setAuthorizedValue(true);
	};
	return (
		<>
			<form
				id='authorization'
				name='authorization'
				className={authorisationStyles.authorizationForm}
			>
				<label htmlFor='email'>E-mail</label>
				<input type='text' id='email' name='email' required></input>
				<label htmlFor='password'>Пароль</label>
				<input type='text' id='password' name='password' required></input>
				<button
					type='submit'
					className={`${buttonStyles.button} ${buttonStyles.buttonLarge} ${buttonStyles.buttonCommon} ${buttonStyles.isShadowed} ${styles.isClicked}`}
					onClick={handleSubmit}
				>
					Войти
				</button>
			</form>
		</>
	);
};

export default Login;
