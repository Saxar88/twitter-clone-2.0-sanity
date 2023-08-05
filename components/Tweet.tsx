'use client';

import React, { useEffect, useState } from 'react';
import { CommentProps, TweetProps } from '@/typings';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BarChartIcon from '@mui/icons-material/BarChart';
import UploadIcon from '@mui/icons-material/Upload';
import VerifiedIcon from '@mui/icons-material/Verified';
import PostOption from './TweetOption';
import Moment from 'react-moment';
import { fetchComments } from '@/utils/fetchComments';

interface Props {
	tweet: TweetProps;
}

function Tweet({ tweet }: Props) {
	const [comments, setComments] = useState<CommentProps[]>([]);

	const refreshComments = async () => {
		const comments: CommentProps[] = await fetchComments(tweet._id);
		setComments(comments);
	};

	useEffect(() => {
		refreshComments();
	}, []);

	return (
		<div className='flex flex-col space-x-3 p-4 border-y border-gray-100'>
			<div className='flex space-x-3'>
				<img
					src={tweet.profileImg}
					alt={tweet.username}
					className='h-10 w-10 object-cover object-top rounded-full'
				/>
				<div>
					<div>
						<div className='flex items-center space-x-1'>
							<p className='mr-1 font-bold'>{tweet.username}</p>
							<div>
								{tweet.verified ? (
									<VerifiedIcon className='h-4 w-4 text-twitter' />
								) : null}
							</div>
							<p className='hidden text-sm text-gray-500 sm:inline'>
								{tweet.handle} ·
							</p>
							<p>{tweet._createdAt}</p>
							{/* <Moment>{tweet._createdAt}</Moment> */}
						</div>
						<p className='pt-1'>{tweet.text}</p>
						{tweet.image && (
							<img
								src={tweet.image}
								alt=''
								className='m-5 ml-0 mb-1 max-w-[510px] rounded-lg object-cover shadow-sm'
							/>
						)}
					</div>
					<div className='flex mt-2.5 gap-10 text-twitterAlt'>
						<div className='flex items-center'>
							<PostOption
								Icon={ChatBubbleOutlineIcon}
								label='Reply'
								text={tweet.replies}
							/>
						</div>
						<div className='post__footerOption' id='retweet'>
							<PostOption
								Icon={RepeatIcon}
								label='Retweet'
								text={tweet.retweets}
							/>
						</div>
						<div className='post__footerOption' id='like'>
							<PostOption
								Icon={FavoriteBorderIcon}
								label='Like'
								text={tweet.likes}
							/>
						</div>
						<div className='post__footerOption'>
							<PostOption Icon={BarChartIcon} label='View' text={tweet.views} />
						</div>
						<div className='post__footerOption'>
							<PostOption Icon={UploadIcon} label='Share' />
						</div>
					</div>
				</div>
			</div>
			{comments?.length > 0 && (
				<div>
					{comments.map((comment) => (
						<div key={comment._id}>
							<img
								src={comment.profileImg}
								alt={comment.username}
								className='h-7 w-7 object-cover rounded-full'
							/>
							<div className='flex items-center space-x-1'>
								<p>{comment.username}</p>
								<p>{comment.handle}</p>
								<p>{comment._createdAt}</p>
								{/* <Moment>{comment._createdAt}</Moment> */}
							</div>
							<p>{comment.comment}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default Tweet;
