// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/no-unresolved */
import authorizationStyles from './authorization.module.css';
import styles from '../../../shared/ui/styles.module.css';
import buttonStyles from '../../../shared/ui/button.module.css';
import { FC, SyntheticEvent, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData, getUser } from '@/shared/lib/store/slices/users';
import { AppDispatch } from '@/shared/lib/store/store';

type AuthorizationProps = {
	setUserId: (id: number | null) => void;
};

const Login: FC<AuthorizationProps> = ({ setUserId }) => {
	const useAppDispatch = () => useDispatch<AppDispatch>();
	const dispatch = useAppDispatch();
	const userInfo = useSelector(getData);
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	dispatch(
		getUser({
			email: '',
			password: ''
		})
	);
	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		const userData = {
			email: emailRef.current?.value || '',
			password: passwordRef.current?.value || ''
		};
		if (emailRef.current) emailRef.current.value = '';
		if (passwordRef.current) passwordRef.current.value = '';
		dispatch(getUser(userData));
	};
	useEffect(() => {
		if (userInfo?.id) {
			setUserId(userInfo.id);
		}
	}, [userInfo]);
	return (
		<>
			<form
				id='authorization'
				name='authorization'
				className={authorizationStyles.authorizationForm}
			>
				<label htmlFor='email'>E-mail</label>
				<input
					type='text'
					id='email'
					name='email'
					ref={emailRef}
					required
				></input>
				<label htmlFor='password'>Пароль</label>
				<input
					type='text'
					id='password'
					name='password'
					ref={passwordRef}
					required
				></input>
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
