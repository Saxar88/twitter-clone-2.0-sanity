import Feed from '@/components/Feed';
import Sidebar from '@/components/Sidebar';
import Widgets from '@/components/Widgets';
import { TweetProps } from '@/typings';
import Head from 'next/head';

async function getData() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTweets`);

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	console.log('THIS IS IN getData: ', res);
	return res.json();
}

async function Home() {
	let tweets: TweetProps[] = await getData();

	console.log('THIS IS IN Home: ', tweets);

	return (
		<div className='mx-auto text-twitterText overflow-y-scroll no-scrollbar lg:max-w-7xl'>
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
