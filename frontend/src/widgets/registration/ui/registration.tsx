import authorizationStyles from './registration.module.css';
import { FC } from 'react';

const Registration: FC = () => {
	return (
		<div className={authorizationStyles.authorizationForm}>
			<p>
				На данный момент регистрация на сайте доступна только через чат-бота
			</p>
			<p>
				1. Перейди по ссылке{' '}
				<a href='https://t.me/small_task_planner_bot'>
					https://t.me/small_task_planner_bot
				</a>
			</p>
			<p>2. Нажми на кнопку &quot;Настройки&quot;</p>
			<p>3. Нажми на кнопку &quot;Поменять электронный адрес&quot;</p>
			<p>4. Укажи свой адрес</p>
			<p>5. На твою почту придёт письмо. Отправь полученный код боту</p>
			<p>
				6. На твою почту придёт письмо с паролем. Можешь использовать его для
				входа на сайт
			</p>
			<p>
				Если ты забудешь пароль, можешь использовать этот же алгоритм для
				генерации нового!
			</p>
		</div>
	);
};

export default Registration;
