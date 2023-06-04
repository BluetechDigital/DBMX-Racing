import {client} from "../config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* Fetch all Seo Content (For 
	every flexible content page) */
export async function getAllSeoPagesContent(slug: string) {
	try {
		const content: DocumentNode = gql`
			{
				mainContent: pages(where: {title: "${slug}", status: PUBLISH}) {
					edges {
						node {
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
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.mainContent?.edges[0]?.node?.seo;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all pages seo content per page"
		);
	}
}