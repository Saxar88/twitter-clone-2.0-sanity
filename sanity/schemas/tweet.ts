const tweet = {
	name: 'tweet',
	title: 'Tweet',
	type: 'document',
	fields: [
		{
			name: 'username',
			title: 'Username',
			type: 'string',
		},
		{
			name: 'handle',
			title: 'Handle',
			type: 'string',
		},
		{
			name: 'verified',
			title: 'Verified',
			type: 'boolean',
		},
		{
			name: 'profileImg',
			title: 'Profile Picture',
			type: 'string',
		},
		{
			name: 'text',
			title: 'Tweet text',
			type: 'string',
		},
		{
			name: 'image',
			title: 'Tweet Image',
			type: 'url',
		},
		{
			name: 'blockTweet',
			title: 'Block Tweet',
			description: 'ADMIN Controls: Toggle if Tweet is deemed inappropriate',
			type: 'boolean',
		},
		{
			name: 'replies',
			title: 'Replies',
			type: 'string',
		},
		{
			name: 'retweets',
			title: 'Retweets',
			type: 'string',
		},
		{
			name: 'likes',
			title: 'Likes',
			type: 'string',
		},
		{
			name: 'views',
			title: 'Views',
			type: 'string',
		},
	],
};

export default tweet;
