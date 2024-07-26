/* GOOGLE REVIEWS */
/* Fetch all Google Reviews from google */
export type IReviewsRating = {
	rating: number;
};
export type IReviewsArray = [
	{
		time: number;
		text: string;
		rating: number;
		language: string;
		translated: false;
		author_url: string;
		author_name: string;
		original_language: string;
		profile_photo_url: string;
		relative_time_description: string;
	}
];
export type IGoogleReviewsFeed = {
	reviewsArray: IReviewsArray;
	reviewsRating: IReviewsRating;
};
