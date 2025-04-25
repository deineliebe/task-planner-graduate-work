import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ProtectedRoute({ children, user }) {
	const router = useRouter();

	useEffect(() => {
		if (!user) {
			router.push('/login');
		}
	}, [user, router]);

	return <>{user ? children : null}</>;
}
