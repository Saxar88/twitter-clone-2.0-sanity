export type tweetBody = {
	profileImg: string;
	username: string;
	handle: string;
	verified: boolean;
	text: string;
	image?: string;
};

export interface TweetProps extends tweetBody {
	_id: string;
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	_type: 'tweet';
	blockTweet: boolean;
}
