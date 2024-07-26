import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* PAGES & BLOGS POSTS*/
/* Fetch all Flexible Content Components 
(For every flexible content page) */
export const getAllFlexibleContentComponents = async (
	slug: string,
	postType: string,
	postTypeFlexibleContent: string
) => {
	try {
		const content: DocumentNode = gql`
			{
        		mainContent: ${postType}(where: {name: "${slug}", status: PUBLISH}) {
        		  edges {
						node {
							template {
								... on DefaultTemplate {
									flexibleContent {
										flexibleContent {
											... on ${postTypeFlexibleContent}_Hero {
												fieldGroupName
												displaySection
												title
												videoUrl
												paragraph
												displayVideo
												ctaParagraph
												ctaLink {
													url
													title
													target
												}
												buttonLink {
													url
													title
													target
												}
												buttonLinkTwo {
													url
													title
													target
												}
												backgroundImage {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
											}
											... on ${postTypeFlexibleContent}_HeroTwo {
												fieldGroupName
												displaySection
												title
												paragraph
												backgroundImage {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
											}
											... on ${postTypeFlexibleContent}_AboutContentImage {
                								fieldGroupName
                								displaySection
                								title
                								paragraph
                								buttonLink {
                									url
                									title
                									target
                								}
                								mainCard {
                									title
                									subtitle
                									buttonLink {
                										url
                										title
                										target
                									}
                									backgroundImage {
                										altText
                										sourceUrl
                										mediaDetails {
                											height
                											width
                										}
                									}
                								}
											}
											... on ${postTypeFlexibleContent}_TitleContentImage {
            									fieldGroupName
												displaySection
            									title
            									subtitle
												sectionId
            									textTitle
            									paragraph
            									image {
            										altText
            										sourceUrl
            										mediaDetails {
            											height
            											width
            										}
            									}
            									buttonLink {
            										url
            										title
            										target
            									}
            									bulletPoints {
            										points
            									}
            									displayContentOption
            									displayImageClipPath
            									displayParagraphColor
            									displayBackgroundColor
            								}
											... on ${postTypeFlexibleContent}_MeetTheTeam {
            									fieldGroupName
            									displaySection
            									title
            									paragraph
            									teamGrid {
            										name
            										position
            										facebookLink {
            											url
            											title
            											target
            										}
            										twitterLink {
            											url
            											title
            											target
            										}
            										instagramLink {
            											url
            											title
            											target
            										}
            										linkedinLink {
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
											... on ${postTypeFlexibleContent}_ProductGrid {
												fieldGroupName
												displaySection
												title
												subtitle
												paragraph
												buttonLink {
            										url
            										title
            										target
            									}
												productGrid {
													title
													link {
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
											... on ${postTypeFlexibleContent}_OurServices {
												fieldGroupName
												displaySection
												title
												subtitle
												paragraph
												buttonLink {
            										url
            										title
            										target
            									}
												servicesGrid {
													title
													paragraph
													link {
														url
														title
														target
													}
													backgroundImage {
														altText
														sourceUrl
														mediaDetails {
															height
															width
														}
													}
												}
											}
											... on ${postTypeFlexibleContent}_ServicesGrid {
												fieldGroupName
												displaySection
												title
												subtitle
												paragraph
												buttonLink {
            										url
            										title
            										target
            									}
												mainCard {
                									title
                									subtitle
                									buttonLink {
                										url
                										title
                										target
                									}
                									backgroundImage {
                										altText
                										sourceUrl
                										mediaDetails {
                											height
                											width
                										}
                									}
                								}
												servicesGrid {
													title
													paragraph
													link {
														url
														title
														target
													}
													backgroundImage {
														altText
														sourceUrl
														mediaDetails {
															height
															width
														}
													}
												}
											}
											... on ${postTypeFlexibleContent}_Logos {
												fieldGroupName
												displaySection
												title
												logoGrid {
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
											... on ${postTypeFlexibleContent}_Cta {
												fieldGroupName
												displaySection
												title
												buttonLink {
													url
													title
													target
												}
												backgroundImage {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
											}
											... on ${postTypeFlexibleContent}_CtaTwo {
												fieldGroupName
												paragraph
												displaySection
												buttonLink {
													url
													title
													target
												}
											}
											... on ${postTypeFlexibleContent}_SocialMediaGrid {
												fieldGroupName
												displaySection
												title
											}
											... on ${postTypeFlexibleContent}_TitleParagraph {
												fieldGroupName
												displaySection
												title
												paragraph
												displayParagraph
											}
											... on ${postTypeFlexibleContent}_GoogleReviews {
												fieldGroupName
												displaySection
												title
												displaySlider
											}
											... on ${postTypeFlexibleContent}_TestimonialsGrid {
												fieldGroupName
												displaySection
												title
												subtitle
												paragraph
											}
											... on ${postTypeFlexibleContent}_ContactInfo {
												fieldGroupName
												displaySection
												title
												paragraph
											}
											... on ${postTypeFlexibleContent}_ContactForm {
												fieldGroupName
												displaySection
												title
											}
										}
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

		return {
			content:
				response.data?.mainContent?.edges[0]?.node?.template?.flexibleContent
					?.flexibleContent,
		};
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all flexible content components"
		);
	}
};
