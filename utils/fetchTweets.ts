import { TweetProps } from '@/typings';

export const fetchTweets = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTweets`);

	const data = await res.json();

	const tweets: TweetProps[] = data.tweets;

	return tweets;
};