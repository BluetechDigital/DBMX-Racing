import {client} from "../config/apollo";
import {DocumentNode, gql} from "@apollo/client";

type SlugResponse = {
	slug: string;
	modified: string;
};

interface ISlug extends Array<SlugResponse> {}

export const fetchBlogPostsSlugs = async (): Promise<ISlug> => {
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

export const fetchBlogPostsContent = async (slug: string) => {
	try {
		const getSingleBlogContent: DocumentNode = gql`
			{
				mainContent: post(id: "${slug}", idType: SLUG) {
                    title
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
					singleBlogPost {
						heroSection {
      					  title
      					  paragraph
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
						jumboContentSection {
							content {
								title
								subtitle
								paragraph
								imageLocation
								backgroundDisplay
								buttonLink {
									url
									title
									target
								}
								image {
									altText
									sourceUrl
									mediaDetails {
										height
										width
									}
								}
							}
						}
						contactBanner {
							title
							paragraph
							buttonLink {
								url
								title
								target
							}
							backgroundImage {
								sourceUrl
							}
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: getSingleBlogContent,
		});

		return {
			seo: response?.data?.mainContent?.seo,
			pageTitle: response?.data?.mainContent?.title,
			content: response.data?.mainContent?.singleBlogPost,
		};
	} catch (error) {
		console.log(error);
		throw new Error("Something went wrong trying to fetch blogs slugs content");
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
							singleBlogPost {
								titleParagraph {
									paragraph
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
