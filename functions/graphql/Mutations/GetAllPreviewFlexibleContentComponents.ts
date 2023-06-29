// Imports
import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* PREVIEW PAGES */
/* Fetch all Flexible Content Components 
(For every flexible content page) */
export const getAllPreviewPagesFlexibleContentComponents = async (
	id: number,
	authToken: string,
	loginRedirectURL: string
) => {
	try {
		const content: DocumentNode = gql`
			{
				mainContent: page(id: ${id}, idType: DATABASE_ID) {
					flexibleContent {
						flexibleContent {
							... on Page_Flexiblecontent_FlexibleContent_HeroSection {
								fieldGroupName
								paragraph
								title
								backgroundImage {
									sourceUrl
								}
							}
							... on Page_Flexiblecontent_FlexibleContent_HeroSectionTwo {
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
							... on Page_Flexiblecontent_FlexibleContent_HeroSectionThree {
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
							... on Page_Flexiblecontent_FlexibleContent_TitleParagraph {
								fieldGroupName
								paragraph
								title
							}
							... on Page_Flexiblecontent_FlexibleContent_ContentSection {
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
							... on Page_Flexiblecontent_FlexibleContent_JumboContentSection {
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
							... on Page_Flexiblecontent_FlexibleContent_ContentStats {
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
							... on Page_Flexiblecontent_FlexibleContent_ProductGrid {
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
							... on Page_Flexiblecontent_FlexibleContent_ProductGridTwo {
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
							... on Page_Flexiblecontent_FlexibleContent_TrustedBrands {
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
							... on Page_Flexiblecontent_FlexibleContent_ContentSlider {
								fieldGroupName
							}
							... on Page_Flexiblecontent_FlexibleContent_ContentSliderTwo {
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
							... on Page_Flexiblecontent_FlexibleContent_BlogsGrid {
								fieldGroupName
							}
							... on Page_Flexiblecontent_FlexibleContent_ContactBanner {
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
							... on Page_Flexiblecontent_FlexibleContent_ContactInfo {
								fieldGroupName
								paragraph
								title
							}
							... on Page_Flexiblecontent_FlexibleContent_ContactForm {
								fieldGroupName
								title
							}
							... on Page_Flexiblecontent_FlexibleContent_OurLocation {
								fieldGroupName
								paragraph
								title
							}
							... on Page_Flexiblecontent_FlexibleContent_Maintenance {
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
							... on Page_Flexiblecontent_FlexibleContent_ErrorPageContent {
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
		return {
			redirect: {
				destination: loginRedirectURL || "/",
				statusCode: 307,
			},
		};
	}
};

/* PREVIEW BLOGS POSTS */
/* Fetch all Flexible Content Components 
(For every flexible content Blog Post) */
export const getAllPreviewPostsFlexibleContentComponents = async (
	id: number,
	authToken: string,
	loginRedirectURL: string
) => {
	try {
		const content: DocumentNode = gql`
			{
				mainContent: post(id: ${id}, idType: DATABASE_ID) {
					flexibleContent {
						flexibleContent {
							... on Post_Flexiblecontent_FlexibleContent_HeroSection {
								fieldGroupName
								paragraph
								title
								backgroundImage {
									sourceUrl
								}
							}
							... on Post_Flexiblecontent_FlexibleContent_HeroSectionTwo {
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
							... on Post_Flexiblecontent_FlexibleContent_HeroSectionThree {
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
							... on Post_Flexiblecontent_FlexibleContent_TitleParagraph {
								fieldGroupName
								paragraph
								title
							}
							... on Post_Flexiblecontent_FlexibleContent_ContentSection {
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
							... on Post_Flexiblecontent_FlexibleContent_JumboContentSection {
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
							... on Post_Flexiblecontent_FlexibleContent_ContentStats {
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
							... on Post_Flexiblecontent_FlexibleContent_ProductGrid {
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
							... on Post_Flexiblecontent_FlexibleContent_ProductGridTwo {
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
							... on Post_Flexiblecontent_FlexibleContent_TrustedBrands {
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
							... on Post_Flexiblecontent_FlexibleContent_ContentSlider {
								fieldGroupName
							}
							... on Post_Flexiblecontent_FlexibleContent_ContentSliderTwo {
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
							... on Post_Flexiblecontent_FlexibleContent_BlogsGrid {
								fieldGroupName
							}
							... on Post_Flexiblecontent_FlexibleContent_ContactBanner {
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
							... on Post_Flexiblecontent_FlexibleContent_ContactInfo {
								fieldGroupName
								paragraph
								title
							}
							... on Post_Flexiblecontent_FlexibleContent_ContactForm {
								fieldGroupName
								title
							}
							... on Post_Flexiblecontent_FlexibleContent_OurLocation {
								fieldGroupName
								paragraph
								title
							}
							... on Post_Flexiblecontent_FlexibleContent_Maintenance {
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
							... on Post_Flexiblecontent_FlexibleContent_ErrorPageContent {
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
		return {
			redirect: {
				destination: loginRedirectURL || "/",
				statusCode: 307,
			},
		};
	}
};
