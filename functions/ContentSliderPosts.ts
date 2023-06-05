// Imports
import {client} from "../config/apollo";
import {DocumentNode, gql} from "@apollo/client";

// Content Slider Blog Posts Content
export const fetchContentSliderBlogPostsPostsContent = async () => {
	try {
		const getSingleBlogPostsContent: DocumentNode = gql`
			{
				mainContent: posts(first: 3, where: {status: PUBLISH}) {
					nodes {
						uri
						date
						title
						singleBlogPost {
							heroSection {
								backgroundVideoUrl
								backgroundImageOrVideo
								backgroundImage {
									altText
									sourceUrl
									mediaDetails {
										height
										width
									}
								}
							}
							titleParagraph {
								title
								paragraph
							}
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: getSingleBlogPostsContent,
		});

		return {
			content: response?.data?.mainContent?.nodes,
		};
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch the content slider blog posts slugs content"
		);
	}
};
