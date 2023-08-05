'use client';

import React, { useState } from 'react';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

interface Props {
	Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
	label: string;
	text?: string;
}

function TweetOption({ Icon, label, text }: Props) {
	const [isHovering, setIsHovering] = useState(false);

	const handleMouseOver = () => {
		setIsHovering(true);
	};
	const handleMouseOut = () => {
		setIsHovering(false);
	};

	return (
		<div
			className='flex flex-col'
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}>
			<div className='group flex items-center align-center cursor-pointer '>
				<div className='px-1.5 py-1 rounded-full group-hover:text-twitter group-hover:bg-[#e1eef6] transition-all duration-200'>
					<Icon className='h-5 w-5' />
				</div>
				<p className='px-3 text-[#536471] group-hover:text-twitter transition-all duration-200'>
					{text}
				</p>
			</div>
			{isHovering && (
				<p className='absolute flex self-center mt-8 p-1 bg-black/60 text-[#fbfbfb] text-xs rounded-sm'>
					{label}
				</p>
			)}
		</div>
	);
}

export default TweetOption;
