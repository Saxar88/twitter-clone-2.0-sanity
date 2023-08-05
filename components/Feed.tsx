import React from 'react';
import TweetBox from './TweetBox';
import { TweetProps } from '@/typings';
import Tweet from './Tweet';

interface Props {
	tweets: TweetProps[];
}

function Feed({ tweets }: Props) {
	console.log('THIS IS IN Feed: ', tweets);

	return (
		<div className='col-span-7 border-x lg:col-span-5 text-[15px]'>
			<div>
				<h1 className='p-5 text-xl font-bold'>Home</h1>
			</div>
			<div className='px-4'>
				<TweetBox />
			</div>
			{tweets && tweets.map((tweet) => <Tweet key={tweet._id} tweet={tweet} />)}
		</div>
	);
}

export default Feed;
