import Feed from '@/components/Feed';
import Sidebar from '@/components/Sidebar';
import Widgets from '@/components/Widgets';
import { TweetProps } from '@/typings';
import { fetchTweets } from '@/utils/fetchTweets';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

interface Props {
	tweets: TweetProps[];
}

const Home = ({ tweets }: Props) => {
	return (
		<div className='mx-auto max-h-screen overflow-hidden lg:max-w-7xl '>
			<Head>
				<title>Twitter clone 2.0</title>
			</Head>
			<main className='grid grid-cols-9'>
				<Sidebar />
				<Feed tweets={tweets} />
				<Widgets />
			</main>
		</div>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const tweets = await fetchTweets();

	return { props: { tweets } };
};
