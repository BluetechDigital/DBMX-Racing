import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* PREVIEW PAGES SEO */
/* Fetch all Seo Content (For 
	every flexible content page) */
export async function getAllPreviewSeoPagesContent(
	id: number,
	authToken: string
) {
	try {
		const content: DocumentNode = gql`
			{
				mainContent: page(id: ${id}, idType: DATABASE_ID) {
					seo {
						canonical
						cornerstone
						focuskw
						fullHead
						metaDesc
						metaKeywords
						metaRobotsNofollow
						metaRobotsNoindex
						opengraphAuthor
						opengraphDescription
						opengraphImage {
							mediaItemUrl
						}
						opengraphModifiedTime
						opengraphPublishedTime
						opengraphPublisher
						opengraphSiteName
						opengraphTitle
						opengraphType
						opengraphUrl
						readingTime
						title
						twitterDescription
						twitterTitle
						twitterImage {
							mediaItemUrl
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
			variables: {
				id: id,
			},
			context: {
				headers: {
					authorization: authToken ? `Bearer ${authToken}` : "",
				},
			},
		});

		return response?.data?.mainContent?.seo;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all pages seo content per page"
		);
	}
}

/* PREVIEW BLOGS SEO */
/* Fetch all Seo Content Blog Post */
export async function getAllPreviewSeoBlogPostsContent(
	id: number,
	authToken: string
) {
	try {
		const content: DocumentNode = gql`
			{
				mainContent: post(id: ${id}, idType: DATABASE_ID) {
					seo {
						canonical
						cornerstone
						focuskw
						fullHead
						metaDesc
						metaKeywords
						metaRobotsNofollow
						metaRobotsNoindex
						opengraphAuthor
						opengraphDescription
						opengraphImage {
							mediaItemUrl
						}
						opengraphModifiedTime
						opengraphPublishedTime
						opengraphPublisher
						opengraphSiteName
						opengraphTitle
						opengraphType
						opengraphUrl
						readingTime
						title
						twitterDescription
						twitterTitle
						twitterImage {
							mediaItemUrl
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
			variables: {
				id: id,
			},
			context: {
				headers: {
					authorization: authToken ? `Bearer ${authToken}` : "",
				},
			},
		});

		return response?.data?.mainContent?.seo;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all blog posts seo content per post"
		);
	}
}
