import { sanityClient } from '@/sanity/sanity';
import { TweetProps } from '@/typings';
import { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';

const feedQuery = groq`*[_type == "tweet" && !blockTweet]{_id, ...} | order(createdAt desc)`;

type Data = {
	tweets: TweetProps[];
};

export async function GET(req: NextApiRequest, res: NextApiResponse<Data>) {
	const tweets: TweetProps[] = await sanityClient.fetch(feedQuery);

	console.log({ tweets });
	res.status(200).json({ tweets });
}
