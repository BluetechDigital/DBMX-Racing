import {client} from "@/config/apollo";
import {DocumentNode, gql, useMutation} from "@apollo/client";

export const getAllDraftPostsSlugs = async () => {
	try {
		const draftPostsSlugs: DocumentNode = gql`
			{
				login(
					input: {
						username: ${process.env.WORDPRESS_CMS_USERNAME}
						password: ${process.env.WORDPRESS_CMS_PASSWORD}
						clientMutationId: "uniqueId"
					}
				) {
					user {
						posts(where: {status: DRAFT}) {
							edges {
								node {
									slug
									modified
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
						}
					}
				}
			}
		`;

		const [mutateFunction, {data, loading, error}] =
			useMutation(draftPostsSlugs);

		const response: any = await client.query({
			mutation: draftPostsSlugs,
		});

		return {
			data,
			error,
			loading,
			mutateFunction,
		};
	} catch (error) {
		console.log(error);
		throw new Error("Something went wrong trying to get all draft posts slugs");
	}
};
