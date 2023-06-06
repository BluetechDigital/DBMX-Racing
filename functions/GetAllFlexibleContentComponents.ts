import {client} from "../config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* PAGES */
/* Fetch all Flexible Content Components 
(For every flexible content page) */
export async function getAllPagesFlexibleContentComponents(slug: string) {
	try {
		const content: DocumentNode = gql`
			{
				pageTitle: pages(where: {name: "${slug}", status: PUBLISH}) {
					edges {
						node {
							title
						}
					}
				}
        mainContent: pages(where: {name: "${slug}", status: PUBLISH}) {
          edges {
            node {
              template {
                ... on DefaultTemplate {
                  flexibleContent {
                    flexibleContent {
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_HeroSection {
                        fieldGroupName
                        paragraph
                        title
                        backgroundImage {
                          sourceUrl
                        }
                      }
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_HeroSectionTwo {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_HeroSectionThree {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_TitleParagraph {
                        fieldGroupName
                        paragraph
                        title
                      }
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContentSection {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_JumboContentSection {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContentStats {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ProductGrid {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ProductGridTwo {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_TrustedBrands {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContentSlider {
                        fieldGroupName
                      }
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContentSliderTwo {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_BlogsGrid {
                        fieldGroupName
                      }
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContactBanner {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContactInfo {
                        fieldGroupName
                        paragraph
                        title
                      }
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContactForm {
                        fieldGroupName
                        title
                      }
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_OurLocation {
                        fieldGroupName
                        paragraph
                        title
                      }
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ErrorPageContent {
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

		const response: any = await client.query({
			query: content,
		});

		return {
			pageTitle: response?.data?.pageTitle?.edges[0]?.node?.title,
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
}

/* BLOGS POSTS */
/* Fetch all Flexible Content Components 
(For every flexible content Blog Post) */
export async function getAllBlogPostFlexibleContentComponents(slug: string) {
	try {
		const content: DocumentNode = gql`
			{
				pageTitle: posts(where: {name: "${slug}", status: PUBLISH}) {
					edges {
						node {
							title
						}
					}
				}
        mainContent: posts(where: {name: "${slug}", status: PUBLISH}) {
          edges {
            node {
              template {
                ... on DefaultTemplate {
                  flexibleContent {
                    flexibleContent {
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_HeroSection {
                        fieldGroupName
                        paragraph
                        title
                        backgroundImage {
                          sourceUrl
                        }
                      }
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_HeroSectionTwo {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_HeroSectionThree {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_TitleParagraph {
                        fieldGroupName
                        paragraph
                        title
                      }
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContentSection {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_JumboContentSection {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContentStats {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ProductGrid {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ProductGridTwo {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_TrustedBrands {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContentSlider {
                        fieldGroupName
                      }
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContentSliderTwo {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_BlogsGrid {
                        fieldGroupName
                      }
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContactBanner {
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
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContactInfo {
                        fieldGroupName
                        paragraph
                        title
                      }
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ContactForm {
                        fieldGroupName
                        title
                      }
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_OurLocation {
                        fieldGroupName
                        paragraph
                        title
                      }
                      ... on DefaultTemplate_Flexiblecontent_FlexibleContent_ErrorPageContent {
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

		const response: any = await client.query({
			query: content,
		});

		return {
			pageTitle: response?.data?.pageTitle?.edges[0]?.node?.title,
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
}
