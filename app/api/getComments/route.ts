import { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { CommentProps } from '@/typings';
import { sanityClient } from '@/sanity/sanity';

const commentQuery = groq`
    *[_type=="comment" && references(*[_type=="tweet" && _id==$tweetId]._id)] | order(_createdAt desc)`;

type Data = CommentProps[];

export async function GET(req: NextApiRequest, res: NextApiResponse<Data>) {
	const { tweetId } = req.query;

	console.log('THIS IS THE TWEET ID:', tweetId);

	const comments: CommentProps[] = await sanityClient.fetch(commentQuery, {
		tweetId,
	});

	console.log('THIS IS IN getComments:', comments);

	return res.status(200).json(comments);
}
