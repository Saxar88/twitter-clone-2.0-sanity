import { createClient } from '@sanity/client';

export const sanityClient = createClient({
	projectId: 'v7oba5h5',
	dataset: 'production',
	apiVersion: '2023-08-03',
	token: process.env.SANITY_SECRET_TOKEN,
});
