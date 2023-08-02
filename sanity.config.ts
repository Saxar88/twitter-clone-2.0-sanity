import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import tweet from './sanity/schemas/tweet';
import comment from './sanity/schemas/comment';

export default defineConfig({
	basePath: '/admin',
	name: 'twitter-clone-2',
	title: 'Twitter clone 2.0',
	apiVersion: '2023-05-03',
	projectId: 'v7oba5h5',
	token: process.env.SANITY_SECRET_TOKEN,
	dataset: 'production',
	plugins: [deskTool()],
	schema: {
		types: [tweet, comment],
	},
});
