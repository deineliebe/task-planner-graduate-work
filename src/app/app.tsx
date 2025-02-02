'use client';

import React from 'react';
import Projects from '@/page/projects/page';
import Authorization from '@/page/authorization/page';

export default function App() {
	const [isAuthorized, setAuthorizedValue] = React.useState(false);
	return (
		<>
			{isAuthorized ? (
				<Projects />
			) : (
				<Authorization setAuthorizedValue={setAuthorizedValue} />
			)}
		</>
	);
}
