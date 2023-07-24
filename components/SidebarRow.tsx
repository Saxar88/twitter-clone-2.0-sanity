import React from 'react';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

interface Props {
	Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
	title: string;
}

function SidebarRow({ Icon, title }: Props) {
	return (
		<div className='flex items-center max-w-fit px-1 hover:bg-gray-100 rounded-full cursor-pointer transition-all duration-200'>
			<Icon className='h-8 w-8'/>
			<p className='p-3 text-xl text-twitterText'>{title}</p>
		</div>
	);
}

export default SidebarRow;
