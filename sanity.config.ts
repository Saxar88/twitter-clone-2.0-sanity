import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import tweet from './sanity/schemas/tweet';
import comment from './sanity/schemas/comment';

const config = defineConfig({
	name: 'twitter-clone-2',
	title: 'Twitter clone 2.0',
	apiVersion: '2023-08-03',
	projectId: 'v7oba5h5',
	dataset: 'production',
	token: process.env.SANITY_SECRET_TOKEN,
	basePath: '/admin',
	plugins: [deskTool()],
	schema: {
		types: [tweet, comment],
	},
});

export default config;
