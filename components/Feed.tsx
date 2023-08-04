'use client';

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
				{tweets.length > 0 &&
					tweets.map((tweet: TweetProps) => (
						<Tweet key={tweet._id} tweet={tweet} />
					))}
			</div>
		</div>
	);
}

export default Feed;
