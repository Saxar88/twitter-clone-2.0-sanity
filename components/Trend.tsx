import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

interface Props {
	category: string;
	title: string;
	tweets: string;
}

function Trend({ category, title, tweets }: Props) {
	return (
		<div className='flex justify-between items-start cursor-pointer hover:bg-[#eff1f1] transition-all duration-200'>
			<div className='px-4 py-3'>
				<p className='text-[13px] text-twitterAlt'>{category}</p>
				<h4 className='my-0.5 text-[15px] font-bold'>{title}</h4>
				<p className='text-[13px] text-twitterAlt'>{tweets} Tweets</p>
			</div>
			<MoreHorizIcon
				className='mt-[5px] mr-[7px] p-[5px] text-twitterAlt rounded-full hover:bg-[#dae8f0] hover:text-twitter'
				fontSize='large'
			/>
		</div>
	);
}

export default Trend;
