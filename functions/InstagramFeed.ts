export const getAllInstagramFeedContent = async () => {
	const instagramFeedMediaType = `${process.env.INSTAGRAM_FEED_MEDIA_TYPE}`; // Replace with your actual Google Cloud API Key

	const instagramUserToken = `https://graph.instagram.com/refresh_access_token
  ?grant_type=ig_refresh_token&access_token=${process.env.INSTAGRAM_USER_TOKEN}`;

	try {
		const url = `https://graph.instagram.com/me/${instagramFeedMediaType}&access_token=${instagramUserToken}`;

		// Catch Data Lifetime for 24 Hours
		const data = await fetch(url, {next: {revalidate: 86400}});
		const instagramFeed = await data.json();

		return instagramFeed?.data;
	} catch (error: unknown) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch Instagram feed content"
		);
	}
};
