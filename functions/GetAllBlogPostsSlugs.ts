import {client} from "../config/apollo";
import {DocumentNode, gql} from "@apollo/client";

type SlugResponse = {
	slug: string;
	modified: string;
};

interface ISlug extends Array<SlugResponse> {}

/* BLOGS POSTS SLUGS (URLS) */
export const getAllBlogPostsSlugs = async (): Promise<ISlug> => {
	try {
		const content: DocumentNode = gql`
			{
				blogsSlugs: posts(where: {status: PUBLISH}) {
					nodes {
						slug
						modified
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.blogsSlugs?.nodes;
	} catch (error) {
		console.log(error);
		throw new Error("Something went wrong trying to fetch blogs slugs");
	}
};

// Blog Post Content
export async function getAllBlogsContent() {
	try {
		const content: DocumentNode = gql`
			{
				mainContent: posts(where: {status: PUBLISH}, last: 10) {
					edges {
						node {
							id
							uri
							date
							title(format: RENDERED)
							template {
								... on DefaultTemplate {
									templateName
									flexibleContent {
										flexibleContent {
											... on DefaultTemplate_Flexiblecontent_FlexibleContent_HeroSectionThree {
												fieldGroupName
												paragraph
												title
											}
										}
									}
								}
							}
							featuredImage {
								node {
									altText
									sourceUrl
									mediaDetails {
										height
										width
									}
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

		return response?.data?.mainContent?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch themes options content"
		);
	}
}
