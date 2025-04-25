import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux';
import { Rubik } from 'next/font/google';
import store from '@/shared/lib/store/store';
import styles from '../shared/ui/styles.css';
import layout from '../shared/ui/layout.css';
import { Footer } from '@/widgets/footer';
import React from 'react';
import Authorization from './authorization/page';
import Head from 'next/head';
import favicon from '../app/favicon.ico';
import { Header } from '@/widgets/header';

const rubik = Rubik({
	weight: ['400', '500', '700'],
	subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
	variable: '--font-rubik'
});

export default function MyApp({ Component, pageProps }) {
	const [isAuthorized, setAuthorizedValue] = React.useState(false);
	const [showAddSettingsModal, setShowAddSettingsModal] = React.useState(false);
	return (
		<div className={`${rubik.variable} ${styles.body}`}>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<title>Таск планер</title>
				<meta name='description' content='Выпускная работа за 2025 год' />
				<link rel='icon' href={favicon} />
			</Head>
			<ThemeProvider attribute='class' defaultTheme='system'>
				<Provider store={store}>
					<div className={styles.page}>
						<main className={styles.main}>
							<Header
								setAuthorizedValue={setAuthorizedValue}
								isAuthorized={isAuthorized}
							/>
							{isAuthorized ? (
								<Component
									{...pageProps}
									setAuthorizedValue={setAuthorizedValue}
									isAuthorized={isAuthorized}
								/>
							) : (
								<Authorization setAuthorizedValue={setAuthorizedValue} />
							)}
						</main>
						{showAddSettingsModal && (
							<Modal
								title={'Настройки'}
								onClose={() => setShowAddTaskModal(false)}
							></Modal>
						)}
						<Footer />
					</div>
				</Provider>
			</ThemeProvider>
		</div>
	);
}
