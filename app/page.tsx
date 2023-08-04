// import Feed from '@/components/Feed';
// import Sidebar from '@/components/Sidebar';
// import Widgets from '@/components/Widgets';
// import Head from 'next/head';

// async function Home() {
// 	return (
// 		<div className='mx-auto max-h-screen overflow-hidden lg:max-w-7xl '>
// 			<Head>
// 				<title>Twitter clone 2.0</title>
// 			</Head>
// 			<main className='grid grid-cols-9'>
// 				<Sidebar />
// 				<Feed />
// 				<Widgets />
// 			</main>
// 		</div>
// 	);
// }

// export default Home;

'use client';

import React, { useEffect, useState } from 'react';
import Feed from '@/components/Feed';
import Sidebar from '@/components/Sidebar';
import Widgets from '@/components/Widgets';
import { TweetProps } from '@/typings';
import { fetchTweets } from '@/utils/fetchTweets';
import Head from 'next/head';

function Home() {
	const [tweets, setTweets] = useState<TweetProps[]>([]);

	useEffect(() => {
		async function fetchTweetsData() {
			const tweetsData = await fetchTweets();
			setTweets(tweetsData);
		}

		fetchTweetsData();
	}, []);

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
