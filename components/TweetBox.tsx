import React, { useState } from 'react';
import TweetBoxOption from './TweetBoxOption';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import GifBoxIcon from '@mui/icons-material/GifBox';
import BallotIcon from '@mui/icons-material/Ballot';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PlaceIcon from '@mui/icons-material/Place';

function TweetBox() {
	const [input, setInput] = useState<string>('');

	return (
		<div className='flex px-4'>
			<div className='flex align-start mr-3 pt-3'>
				<img
					src='images/elonmusk-pfp.jpg'
					alt=''
					className='h-10 w-10 object-cover object-top rounded-full'
				/>
			</div>

			<div className='flex flex-1 items-center pt-1'>
				<form className='flex flex-1 flex-col'>
					<div className='flex py-4'>
						<input
							type='text'
							placeholder='What is happening?!'
							value={input}
							onChange={(e) => setInput(e.target.value)}
							className='flex flex-1 h-7 text-lg text-twitterText focus:outline-none'
						/>
					</div>
					<div className='flex items-center justify-between -ml-1.5'>
						<div className='flex space-x-2'>
							<TweetBoxOption Icon={InsertPhotoIcon} label='Media' />
							<TweetBoxOption Icon={GifBoxIcon} label='GIF' />
							<TweetBoxOption Icon={BallotIcon} label='Poll' />
							<TweetBoxOption Icon={SentimentSatisfiedIcon} label='Emoji' />
							<TweetBoxOption Icon={CalendarTodayIcon} label='Schedule' />
							<TweetBoxOption Icon={PlaceIcon} label='Location' />
						</div>
						<button
							disabled={!input}
							className='flex items-center justify-center ml-3 px-4 py-1 bg-twitter  text-white text-[17px] font-semibold rounded-full enabled:cursor-pointer enabled:hover:bg-[#1a8cd8] transition-all duration-200 disabled:opacity-40'>
							Tweet
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default TweetBox;
