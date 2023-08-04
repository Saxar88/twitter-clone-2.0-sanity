import { TweetProps } from '@/typings';
import { NextApiRequest, NextApiResponse } from 'next';
import { createClient, groq } from 'next-sanity';
import clientConfig from '@/sanity/config/client-config';
import { NextResponse } from 'next/server';

type Data = {
	tweets: TweetProps[];
};

export async function GET(req: NextApiRequest, res: NextApiResponse<Data>) {
	const tweets: TweetProps[] = await createClient(clientConfig).fetch(groq`*`);

	return NextResponse.json(tweets);
}
