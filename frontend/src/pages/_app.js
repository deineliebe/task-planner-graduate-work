/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable import/no-unresolved */
import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux';
import { Rubik } from 'next/font/google';
import store from '@/shared/lib/store/store';
import styles from '../shared/ui/styles.css';
import layout from '../shared/ui/layout.css';
import { Footer } from '@/widgets/footer';
import { Settings } from '@/widgets/settings';
import React from 'react';
import Authorization from './login/index';
import Head from 'next/head';
import { Header } from '@/widgets/header';
import { Modal } from '@/widgets/modal/model';

const rubik = Rubik({
	weight: ['400', '500', '700'],
	subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
	variable: '--font-rubik'
});

export default function MyApp({ Component, pageProps }) {
	const [userId, setUserId] = React.useState(null);
	const [showAddSettingsModal, setShowAddSettingsModal] = React.useState(false);
	const [isMounted, setIsMounted] = React.useState(false);
	React.useEffect(() => {
		setIsMounted(true);
		if (typeof window !== 'undefined') {
			const savedUserId = localStorage.getItem('userId');
			if (savedUserId) setUserId(savedUserId);
		}
	}, []);
	React.useEffect(() => {
		if (typeof window !== 'undefined' && isMounted) {
			if (userId) {
				localStorage.setItem('userId', userId);
			} else {
				localStorage.removeItem('userId');
			}
		}
	}, [userId, isMounted]);
	return (
		<div className={`${rubik.variable} ${styles.body} ${layout}`}>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<title>Таск планер</title>
				<meta name='description' content='Выпускная работа за 2025 год' />
			</Head>
			<ThemeProvider attribute='class' defaultTheme='system'>
				<Provider store={store}>
					<div className={styles.page}>
						<main className={styles.main}>
							<Header
								setUserId={setUserId}
								userId={userId}
								setShowAddSettingsModal={setShowAddSettingsModal}
							/>
							{userId ? (
								<Component
									{...pageProps}
									setUserId={setUserId}
									userId={userId}
								/>
							) : (
								<Authorization setUserId={setUserId} />
							)}
						</main>
						{showAddSettingsModal && (
							<Modal
								title={'Настройки'}
								onClose={() => setShowAddSettingsModal(false)}
							>
								<Settings
									setShowModal={setShowAddSettingsModal}
									userId={userId}
								/>
							</Modal>
						)}
						<Footer />
					</div>
				</Provider>
			</ThemeProvider>
		</div>
	);
}
