import { TweetProps } from '@/typings';
import { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity/sanity';
import { NextResponse } from 'next/server';

const feedQuery = groq`
	*[_type=="tweet" && blockTweet!=true] | order(_createdAt asc)`;

type Data = {
	tweets: TweetProps[];
};

export async function GET(req: NextApiRequest, res: NextApiResponse<Data>) {
	const tweets: TweetProps[] = await sanityClient.fetch(feedQuery);

	console.log('THIS IS IN getTweets: ', tweets);
	return NextResponse.json(tweets);
}
