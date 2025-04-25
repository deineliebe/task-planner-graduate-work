import { useRouter } from 'next/router';

const Tasks = () => {
	const router = useRouter();
	router.push('/tasks');
};

export default Tasks;
