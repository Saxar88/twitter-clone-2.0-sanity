const comment = {
	name: 'comment',
	title: 'Comment',
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
			name: 'comment',
			title: 'Comment',
			type: 'string',
		},
		{
			name: 'tweet',
			title: 'Tweet',
			description: 'Reference the Tweet the comment is associated to:',
			type: 'reference',
			to: { type: 'tweet' },
		},
	],
};

export default comment;
