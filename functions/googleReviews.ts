import {IReviewsArray, IReviewsRating} from "@/types/api/index";

/* GOOGLE REVIEWS */
/* Fetch all Google Reviews
 from the server api endpoint */
export const getGoogleReviews = async (): Promise<any> => {
	const apiKey = `${process.env.GOOGLE_REVIEWS_API_KEY}`; // Replace with your actual Google Cloud API Key
	const placeId = `${process.env.GOOGLE_REVIEWS_PLACE_ID}`; // Replace with your actual Place ID

	try {
		const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`;

		// Catch Data Lifetime for 24 Hours
		const data = await fetch(url, {next: {revalidate: 86400}});
		const googleReviewsFeed = await data.json();

		if (googleReviewsFeed?.result?.reviews) {
			const reviewsRating: IReviewsRating = googleReviewsFeed?.result?.rating;
			const reviewsArray: IReviewsArray = googleReviewsFeed?.result?.reviews;
			return {reviewsRating, reviewsArray};
		} else {
			throw new Error("No reviews found");
		}
	} catch (error) {
		console.error("Error fetching Google Reviews:", error);
	}
};
