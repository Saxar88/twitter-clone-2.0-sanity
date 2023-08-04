// import React from 'react';
// import TweetBox from './TweetBox';
// import Tweet from './Tweet';
// import { getTweets } from '@/sanity/sanity-utils';

// async function Feed() {
// 	const tweets = await getTweets();

// 	return (
// 		<div className='col-span-7 border-x lg:col-span-5'>
// 			<div>
// 				<h1 className='p-5 text-xl font-bold'>Home</h1>
// 			</div>
// 			<div className='px-4'>
// 				<TweetBox />
// 			</div>
// 			<div>
// 				{tweets.map((tweet) => (
// 					<Tweet key={tweet._id} tweet={tweet} />
// 				))}
// 			</div>
// 		</div>
// 	);
// }

// export default Feed;

import React from 'react';
import TweetBox from './TweetBox';
import { TweetProps } from '@/typings';
import Tweet from './Tweet';

interface Props {
	tweets: TweetProps[];
}

async function Feed({ tweets }: Props) {
	return (
		<div className='col-span-7 border-x lg:col-span-5'>
			<div>
				<h1 className='p-5 text-xl font-bold'>Home</h1>
			</div>
			<div className='px-4'>
				<TweetBox />
			</div>
			<div className=''>
				{tweets.map((tweet: TweetProps) => (
					<Tweet key={tweet._id} tweet={tweet} />
				))}
			</div>
		</div>
	);
}

export default Feed;
