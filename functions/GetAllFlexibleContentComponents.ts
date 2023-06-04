import {client} from "../config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* Fetch all Flexible Content Components 
(For every flexible content page) */
export async function getAllFlexibleContentComponents(slug: string) {
	try {
		const content: DocumentNode = gql`
			{
				pageTitle: pages(where: {title: "${slug}", status: PUBLISH}) {
					edges {
						node {
							title
						}
					}
				}
				mainContent: pages(where: {title: "${slug}", status: PUBLISH}) {
					edges {
						node {
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
									... on Page_Flexiblecontent_FlexibleContent_TitleParagraph {
										fieldGroupName
										paragraph
										title
									}
									... on Page_Flexiblecontent_FlexibleContent_JumboContentSection {
										fieldGroupName
										contentSection {
											content {
												title
												subtitle
												paragraph
												imageLocation
												fieldGroupName
												backgroundDisplay
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
												altText
												sourceUrl
												mediaDetails {
													height
													width
												}
											}
										}
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
			pageTitle: response?.data?.pageTitle?.edges[0]?.node?.title,
			content:
				response.data?.mainContent?.edges[0]?.node?.flexibleContent
					?.flexibleContent,
		};
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all flexible content components"
		);
	}
}
