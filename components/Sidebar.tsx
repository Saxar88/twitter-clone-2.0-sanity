'use client';

import React from 'react';
import SidebarRow from './SidebarRow';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import VerifiedIcon from '@mui/icons-material/Verified';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CreateIcon from '@mui/icons-material/Create';

function Sidebar() {
	return (
		<div className='sticky top-0 col-span-2 flex flex-col items-center md:items-start'>
			<TwitterIcon className='my-3 ml-1 text-twitter' fontSize='large' />
			<SidebarRow Icon={HomeIcon} title='Home' />
			<SidebarRow Icon={SearchIcon} title='Explore' />
			<SidebarRow Icon={NotificationsNoneIcon} title='Notifications' />
			<SidebarRow Icon={MailOutlineIcon} title='Messages' />
			<SidebarRow Icon={ListAltIcon} title='Lists' />
			<SidebarRow Icon={BookmarkBorderIcon} title='Bookmarks' />
			<SidebarRow Icon={VerifiedIcon} title='Verified' />
			<SidebarRow Icon={PermIdentityIcon} title='Profile' />
			<SidebarRow Icon={MoreHorizIcon} title='More' />
			<button className='md:hidden h-12 mt-4 px-3 bg-twitter hover:bg-[#1a8cd8] text-white text-[17px] font-semibold rounded-full cursor-pointer transition-all duration-200'>
				<CreateIcon />
			</button>
			<button className='hidden md:inline-flex items-center justify-center w-56 h-12 mt-4 px-8 bg-twitter hover:bg-[#1a8cd8] text-white text-[17px] font-semibold rounded-full cursor-pointer transition-all duration-200'>
				Tweet
			</button>
		</div>
	);
}

export default Sidebar;
