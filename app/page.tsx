import Feed from '@/components/Feed';
import Sidebar from '@/components/Sidebar';
import Widgets from '@/components/Widgets';
import { getTweets } from '@/sanity/sanity-utils';
import Head from 'next/head';

async function Home() {
	const tweets = await getTweets();

	return (
		<div className='mx-auto max-h-screen overflow-hidden lg:max-w-7xl '>
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
