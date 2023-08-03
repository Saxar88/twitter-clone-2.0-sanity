import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'comment',
	title: 'Comment',
	type: 'document',
	fields: [
		defineField({
			name: 'comment',
			title: 'Comment',
			type: 'string',
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
			name: 'tweet',
			title: 'Tweet',
			description: 'Reference the Tweet the comment is associated to:',
			type: 'reference',
			to: { type: 'tweet' },
		}),
	],
});
