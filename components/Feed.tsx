import React from 'react';
import TweetBox from './TweetBox';

function Feed() {
	return (
		<div className='col-span-7 border-x lg:col-span-5'>
			<div>
				<h1 className='p-5 text-xl font-bold'>Home</h1>
			</div>
			<div className='px-4'>
				<TweetBox />
			</div>
		</div>
	);
}

export default Feed;
