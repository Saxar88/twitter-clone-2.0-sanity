import { createClient, groq } from 'next-sanity';

export async function getTweets() {
	const client = createClient({
		apiVersion: '2023-05-03',
		projectId: 'v7oba5h5',
		dataset: 'production',
	});

	return client.fetch(
		groq`*[_type == "tweet" && !blockTweet]{_id, username, handle, verified, profileImg, tweetImg} | order(createdAt desc)`
	);
}
