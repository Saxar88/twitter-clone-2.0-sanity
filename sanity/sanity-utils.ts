import { createClient, groq } from 'next-sanity';
import clientConfig from './config/client-config';
import { TweetProps } from '@/typings';

export async function getTweets(): Promise<TweetProps[]> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "tweet" && !blockTweet]{_id, username, handle, verified, profileImg, tweetImg} | order(createdAt desc)`
	);
}
