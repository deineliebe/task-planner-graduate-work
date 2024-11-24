'use client';

import React from 'react';
import App from '../src/app/app';
import { Provider } from 'react-redux';
import store from '@/shared/lib/store/store';

export default function Home() {
	return (
		<React.StrictMode>
			<Provider store={store}>
				<link rel='icon' href='/favicon.ico' sizes='any' />
				<App />
			</Provider>
		</React.StrictMode>
	);
}
