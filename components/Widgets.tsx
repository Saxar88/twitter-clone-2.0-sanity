import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Trend from './Trend';

function Widgets() {
	return (
		<div className='hidden lg:inline col-span-3 mt-2 px-2'>
			<div className='flex items-center mt-2 p-3 space-x-2 bg-twitterBg rounded-full'>
				<SearchIcon className='h-5 w-5 text-twitterAlt' />
				<input
					type='text'
					placeholder='Search Twitter'
					className='flex-1 bg-twitterBg text-twitterAlt outline-none'
				/>
			</div>
			<div className='mt-4 bg-[#f7f9f9] rounded-[20px]'>
				<h2 className='px-4 py-3 text-lg font-extrabold'>Trends for you</h2>
				<Trend
					category='Business & finance · Trending'
					title='Telegram'
					tweets='488k'
				/>
				<Trend category='Trending in Romania' title='Germany' tweets='68.8k' />
				<Trend
					category='Politics · Trending'
					title='#ClimateScam'
					tweets='28.8k'
				/>
				<Trend category='Politics · Trending' title='Crimea' tweets='14.6k' />
				<Trend category='Trending' title='Epstein Island' tweets='10.1k' />
				<p className='p-4 text-[15px] text-twitter hover:bg-[#eff1f1] rounded-b-[20px] cursor-pointer transition-all duration-200'>
					Show more
				</p>
			</div>
		</div>
	);
}

export default Widgets;
