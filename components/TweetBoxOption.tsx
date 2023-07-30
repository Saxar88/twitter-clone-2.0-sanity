import React, { useState } from 'react';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

interface Props {
	Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
	label: string;
}

function TweetBoxOption({ Icon, label }: Props) {
	const [isHovering, setIsHovering] = useState(false);

	const handleMouseOver = () => {
		setIsHovering(true);
	};
	const handleMouseOut = () => {
		setIsHovering(false);
	};

	return (
		<div
			className='grid'
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}>
			<div className='flex items-center p-2 text-twitter rounded-full cursor-pointer hover:bg-[#e8f5fd] transition-all duration-200'>
				<Icon className='h-5 w-5' />
			</div>
			{isHovering && (
				<p className='absolute flex self-center justify-self-center mt-16 p-[3px] bg-black/60 text-xs text-[#fbfbfb] rounded-sm'>
					{label}
				</p>
			)}
		</div>
	);
}

export default TweetBoxOption;
