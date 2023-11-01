// Imports
import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* PREVIEW PAGES & BLOGS */
/* Fetch all Flexible Content Components 
(For every flexible content page) */
export const getAllPreviewFlexibleContentComponents = async (
	id: number,
	postType: string,
	authToken: string,
	loginRedirectURL: string,
	postTypeFlexiblecontent: string
) => {
	try {
		const content: DocumentNode = gql`
			{
				mainContent: ${postType}(id: ${id}, idType: DATABASE_ID) {
					flexibleContent {
						flexibleContent {
							... on ${postTypeFlexiblecontent}_HeroSection {
								fieldGroupName
								paragraph
								title
								backgroundImage {
									sourceUrl
								}
							}
							... on ${postTypeFlexiblecontent}_HeroSectionTwo {
								fieldGroupName
								title
								paragraph
								backgroundVideoUrl
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
									sourceUrl
								}
							}
							... on ${postTypeFlexiblecontent}_HeroSectionThree {
								fieldGroupName
								backgroundImageOrVideo
								backgroundVideoUrl
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
							... on ${postTypeFlexiblecontent}_TitleParagraph {
								fieldGroupName
								paragraph
								title
							}
							... on ${postTypeFlexiblecontent}_ContentSection {
								fieldGroupName
								subtitle
								title
								bottomContent {
									title
									titleTwo
									paragraph
									paragraphTwo
									mainContent
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
							... on ${postTypeFlexiblecontent}_JumboContentSection {
								fieldGroupName
								contentSection {
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
							}
							... on ${postTypeFlexiblecontent}_ContentStats {
								fieldGroupName
								paragraph
								title
								statsOne {
									title
									subtitle
									paragraph
								}
								statsTwo {
									title
									subtitle
									paragraph
								}
							}
							... on ${postTypeFlexiblecontent}_ProductGrid {
								fieldGroupName
								title
								services {
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
							... on ${postTypeFlexiblecontent}_ProductGridTwo {
								fieldGroupName
								paragraph
								title
								subtitle
								products {
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
							... on ${postTypeFlexiblecontent}_GoogleReviews {
								fieldGroupName
								title
							}
							... on ${postTypeFlexiblecontent}_TrustedBrands {
								fieldGroupName
								title
								logos {
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
							... on ${postTypeFlexiblecontent}_ContentSlider {
								fieldGroupName
							}
							... on ${postTypeFlexiblecontent}_ContentSliderTwo {
								fieldGroupName
								content {
									title
									tag
									publishedDate
									paragraph
									backgroundVideoUrl
									backgroundImageOrVideo
									buttonLink {
										url
										title
										target
									}
									backgroundImage {
										sourceUrl
									}
								}
								contentTwo {
									title
									tag
									publishedDate
									paragraph
									backgroundVideoUrl
									backgroundImageOrVideo
									buttonLink {
										url
										title
										target
									}
									backgroundImage {
										sourceUrl
									}
								}
								contentThree {
									title
									tag
									backgroundVideoUrl
									backgroundImageOrVideo
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
							... on ${postTypeFlexiblecontent}_BlogsGrid {
								fieldGroupName
							}
							... on ${postTypeFlexiblecontent}_ContactBanner {
								fieldGroupName
								paragraph
								title
								buttonLink {
									url
									title
									target
								}
								backgroundImage {
									sourceUrl
								}
							}
							... on ${postTypeFlexiblecontent}_ContactInfo {
								fieldGroupName
								paragraph
								title
							}
							... on ${postTypeFlexiblecontent}_ContactForm {
								fieldGroupName
								title
							}
							... on ${postTypeFlexiblecontent}_OurLocation {
								fieldGroupName
								paragraph
								title
							}
							... on ${postTypeFlexiblecontent}_Maintenance {
								backgroundImageOrVideo
								title
								paragraph
								fieldGroupName
								backgroundVideoUrl
								backgroundImage {
									altText
									sourceUrl
									mediaDetails {
										height
										width
									}
								}
							}
							... on ${postTypeFlexiblecontent}_ErrorPageContent {
								fieldGroupName
								paragraph
								title
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

		return {
			content: response?.data?.mainContent?.flexibleContent?.flexibleContent,
		};
	} catch (error) {
		return loginRedirectURL;
	}
};
