import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'tweet',
	title: 'Tweet',
	type: 'document',
	fields: [
		defineField({
			name: 'text',
			title: 'Tweet text',
			type: 'string',
		}),
		defineField({
			name: 'blockTweet',
			title: 'Block Tweet',
			description: 'ADMIN Controls: Toggle if Tweet is deemed inappropriate',
			type: 'boolean',
		}),
		defineField({
			name: 'username',
			title: 'Username',
			type: 'string',
		}),
		defineField({
			name: 'handle',
			title: 'Handle',
			type: 'string',
		}),
		defineField({
			name: 'verified',
			title: 'Verified',
			type: 'boolean',
		}),
		defineField({
			name: 'profileImg',
			title: 'Profile Picture',
			type: 'string',
		}),
		defineField({
			name: 'tweetImg',
			title: 'Tweet Image',
			type: 'string',
		}),
	],
});
