import { TweetProps } from '@/typings';
import React from 'react';
import TimeAgo from 'react-timeago';

interface Props {
	tweet: TweetProps;
}

function Tweet({ tweet }: Props) {
	return (
		<div>
			<div>
				<img src={tweet.profileImg} alt='' />
				<div>
					<div>
						<p>{tweet.username}</p>
						<p>{tweet.handle}</p>
						<TimeAgo
							date={tweet._createdAt}
							className='text-sm text-gray-500'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Tweet;
