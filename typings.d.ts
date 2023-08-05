export type tweetBody = {
	profileImg: string;
	username: string;
	handle: string;
	verified: boolean;
	text?: string;
	image?: string;
	replies: string;
	retweets: string;
	likes: string;
	views: string;
};

export interface TweetProps extends tweetBody {
	_id: string;
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	_type: 'tweet';
	blockTweet: boolean;
}

export type commentBody = {
	comment: string;
	tweetId: string;
	profileImg: string;
	username: string;
	handle: string;
};

export interface CommentProps extends commentBody {
	_id: string;
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	_type: 'comment';
	tweet: { _ref: string; _type: 'reference' };
}
