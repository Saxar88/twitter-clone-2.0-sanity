import Feed from '@/components/Feed';
import Sidebar from '@/components/Sidebar';
import Widgets from '@/components/Widgets';
import Head from 'next/head';

export default function Home() {
	return (
		<div className='mx-auto max-h-screen overflow-hidden lg:max-w-7xl '>
			<Head>
				<title>Twitter clone 2.0</title>
			</Head>
			<main className='grid grid-cols-9'>
				<Sidebar />
				<Feed />
				<Widgets />
			</main>
		</div>
	);
}
