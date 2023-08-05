import { createClient, groq } from 'next-sanity';
import clientConfig from './config/client-config';
import { TweetProps } from '@/typings';

export async function getTweets(): Promise<TweetProps[]> {
	return createClient(clientConfig).fetch(
		groq`*[_type=="tweet" && !blockTweet] {
            _id, _type, _createdAt, username, handle, verified, profileImg, text, image, blockTweet, replies, retweets, likes, views
        } | order(_createdAt desc)`
	);
}
