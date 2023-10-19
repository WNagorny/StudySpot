import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CoursesPage = async () => {
	return (
		<div className='p-6'>
			<Link href="/teacher/create">
				<Button>New course</Button>
			</Link>
		</div>
	);
};

export default CoursesPage;
