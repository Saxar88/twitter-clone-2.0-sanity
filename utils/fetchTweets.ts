import { TweetProps } from '@/typings';

export async function fetchTweets() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTweets`);

	if (!res.ok) {
		throw new Error('Failed to fetch data.');
	}

	const data = await res.json();
	const tweets: TweetProps[] = data.tweets;

	return tweets;
}
