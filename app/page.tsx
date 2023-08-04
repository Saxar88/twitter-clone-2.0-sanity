import Feed from '@/components/Feed';
import Sidebar from '@/components/Sidebar';
import Widgets from '@/components/Widgets';
import Head from 'next/head';

async function getData() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTweets`);

	if (!res.ok) {
		throw new Error('Failed to fetch data.');
	}

	return res.json();
}

async function Home() {
	let tweets = await getData();

	return (
		<div className='mx-auto max-h-screen overflow-hidden lg:max-w-7xl'>
			<Head>
				<title>Twitter clone 2.0</title>
			</Head>
			<main className='grid grid-cols-9'>
				<Sidebar />
				<Feed tweets={tweets} />
				<Widgets />
			</main>
		</div>
	);
}

export default Home;
