// Import
import {gql} from "@apollo/client";
import {motion} from "framer-motion";
import {client} from "../config/apollo";
import type {NextPage, GetStaticProps} from "next";
import {getThemesOptionsContent} from "../lib/themesOptions";
import {
	getMainMenuLinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
} from "../lib/MenuLinks";

// Components
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Layout from "@/components/Layout/Layout";
import ContentSlider from "@/components/ContentSlider";
import StoreLocation from "@/components/StoreLocation";
import FourImageGrid from "@/components/FourImageGrid";
import ContactBanner from "@/components/ContactBanner";
import TitleParagraph from "@/components/TitleParagraph";
import ContentSection from "@/components/ContentSection";

interface IHome {
	seo: {
		canonical: string;
		cornerstone: Boolean;
		focuskw: string;
		fullHead: string;
		metaDesc: string;
		metaKeywords: string;
		metaRobotsNofollow: string;
		metaRobotsNoindex: string;
		opengraphAuthor: string;
		opengraphDescription: string;
		opengraphImage: {
			mediaItemUrl: string;
		};
		opengraphModifiedTime: string;
		opengraphPublishedTime: string;
		opengraphPublisher: string;
		opengraphSiteName: string;
		opengraphTitle: string;
		opengraphType: string;
		opengraphUrl: string;
		readingTime: number;
		title: string;
		twitterDescription: string;
		twitterTitle: string;
		twitterImage: {
			mediaItemUrl: string;
		};
	};
	content: {
		heroSection: {
			title: string;
			paragraph: string;
			backgroundVideoUrl: string;
			backgroundImage: {
				sourceUrl: string;
			};
			buttonLink: {
				url: string;
				title: string;
				target: string;
			};
			buttonLinkTwo: {
				url: string;
				title: string;
				target: string;
			};
		};
		titleParagraph: {
			title: string;
			paragraph: string;
		};
		productGrid: {
			title: string;
			services: [
				{
					id: string;
					title: string;
					link: {
						url: string;
						title: string;
						target: string;
					};
					image: {
						altText: string;
						sourceUrl: string;
						mediaDetails: {
							height: number;
							width: number;
						};
					};
				}
			];
		};
		contentSection: {
			title: string;
			subtitle: string;
			bottomContent: {
				title: string;
				titleTwo: string;
				paragraph: string;
				mainContent: string;
				paragraphTwo: string;
				image: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						height: number;
						width: number;
					};
				};
			};
		};
		contactBanner: {
			title: string;
			paragraph: string;
			buttonLink: {
				url: string;
				title: string;
				target: string;
			};
			backgroundImage: {
				sourceUrl: string;
			};
		};
		trustedBrands: {
			title: string;
			logos: [
				{
					id: string;
					image: {
						altText: string;
						sourceUrl: string;
						mediaDetails: {
							height: number;
							width: number;
						};
					};
				}
			];
		};
		contentSlider: {
			content: {
				tag: string;
				title: string;
				paragraph: string;
				publishedDate: string;
				buttonLink: {
					url: string;
					title: string;
					target: string;
				};
				backgroundVideoUrl: string;
				backgroundImageOrVideo: string;
				backgroundImage: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
			contentTwo: {
				tag: string;
				title: string;
				paragraph: string;
				publishedDate: string;
				buttonLink: {
					url: string;
					title: string;
					target: string;
				};
				backgroundVideoUrl: string;
				backgroundImageOrVideo: string;
				backgroundImage: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
			contentThree: {
				tag: string;
				title: string;
				paragraph: string;
				publishedDate: string;
				buttonLink: {
					url: string;
					title: string;
					target: string;
				};
				backgroundVideoUrl: string;
				backgroundImageOrVideo: string;
				backgroundImage: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
		};
		ourLocation: {
			title: string;
			paragraph: string;
		};
	};
	mainMenuLinks: {
		mainMenuLinks: [
			{
				node: {
					id: string;
					url: string;
					label: string;
				};
			}
		];
	};
	navbarMenuLinks: {
		navbarMenuLinks: [
			{
				node: {
					id: string;
					url: string;
					label: string;
				};
			}
		];
	};
	footerMenuLinks: {
		footerMenuLinks: [
			{
				node: {
					id: string;
					url: string;
					label: string;
				};
			}
		];
	};
	themesOptionsContent: {
		address: string;
		email: string;
		emailTwo: string;
		phoneNumber: string;
		phoneNumberTwo: string;
		copyrightText: string;
		facebookLink: string;
		linkedinLink: string;
		twitterLink: string;
		businessHours: {
			content: string;
		};
		errorPageContent: {
			title: string;
			paragraph: string;
			buttonLink: {
				url: string;
				title: string;
				target: string;
			};
			backgroundImage: {
				sourceUrl: string;
			};
		};
	};
}

const Home: NextPage<IHome> = ({
	seo,
	content,
	mainMenuLinks,
	navbarMenuLinks,
	footerMenuLinks,
	themesOptionsContent,
}) => {
	return (
		<motion.div
			exit={{
				opacity: 0,
			}}
			initial="initial"
			animate="animate"
		>
			<Layout
				seo={seo}
				pageTitle={"DBMX Racing"}
				themesOptionsContent={themesOptionsContent}
				footerMenuLinks={footerMenuLinks?.footerMenuLinks}
			>
				<Hero
					title={content?.heroSection?.title}
					email={themesOptionsContent?.email}
					paragraph={content?.heroSection?.paragraph}
					mainMenuLinks={mainMenuLinks?.mainMenuLinks}
					buttonLink={content?.heroSection?.buttonLink}
					twitterLink={themesOptionsContent?.twitterLink}
					phoneNumber={themesOptionsContent?.phoneNumber}
					linkedinLink={themesOptionsContent?.linkedinLink}
					facebookLink={themesOptionsContent?.facebookLink}
					navbarMenuLinks={navbarMenuLinks?.navbarMenuLinks}
					buttonLinkTwo={content?.heroSection?.buttonLinkTwo}
					backgroundVideoUrl={content?.heroSection?.backgroundVideoUrl}
					backgroundImage={content?.heroSection?.backgroundImage?.sourceUrl}
				/>

				<TitleParagraph
					title={content?.titleParagraph?.title}
					paragraph={content?.titleParagraph?.paragraph}
				/>

				<FourImageGrid
					title={content?.productGrid?.title}
					servicesGrid={content?.productGrid?.services}
				/>

				<ContentSection
					title={content?.contentSection?.title}
					subtitle={content?.contentSection?.subtitle}
					bottomContent={content?.contentSection?.bottomContent}
				/>

				<ContactBanner
					title={content?.contactBanner?.title}
					paragraph={content?.contactBanner?.paragraph}
					buttonLink={content?.contactBanner?.buttonLink}
					backgroundImage={content?.contactBanner?.backgroundImage?.sourceUrl}
				/>

				<Logos
					title={content?.trustedBrands?.title}
					logoGrid={content?.trustedBrands?.logos}
				/>

				<ContentSlider
					content={content?.contentSlider?.content}
					contentTwo={content?.contentSlider?.contentTwo}
					contentThree={content?.contentSlider?.contentThree}
				/>

				<StoreLocation
					title={content?.ourLocation?.title}
					paragraph={content?.ourLocation?.paragraph}
				/>
			</Layout>
		</motion.div>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const getHomePageContent: any = gql`
		{
			mainContent: pages(where: {id: 6, status: PUBLISH}) {
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
						homePage {
							heroSection {
								title
								paragraph
								backgroundVideoUrl
								backgroundImage {
									sourceUrl
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
							}
							titleParagraph {
								title
								paragraph
							}
							productGrid {
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
							contentSection {
								title
								subtitle
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
							trustedBrands {
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
							contentSlider {
								content {
									tag
									title
									paragraph
									publishedDate
									buttonLink {
										url
										title
										target
									}
									backgroundVideoUrl
									backgroundImageOrVideo
									backgroundImage {
										sourceUrl
										mediaDetails {
											height
											width
										}
									}
								}
								contentTwo {
									tag
									title
									paragraph
									publishedDate
									buttonLink {
										url
										title
										target
									}
									backgroundVideoUrl
									backgroundImageOrVideo
									backgroundImage {
										sourceUrl
										mediaDetails {
											height
											width
										}
									}
								}
								contentThree {
									tag
									title
									paragraph
									publishedDate
									buttonLink {
										url
										title
										target
									}
									backgroundVideoUrl
									backgroundImageOrVideo
									backgroundImage {
										sourceUrl
										mediaDetails {
											height
											width
										}
									}
								}
							}
							ourLocation {
								title
								paragraph
							}
						}
					}
				}
			}
		}
	`;

	const response: any = await client.query({
		query: getHomePageContent,
	});

	const mainMenuLinks: object = await getMainMenuLinks();
	const navbarMenuLinks: object = await getNavbarMenuLinks();
	const footerMenuLinks: object = await getFooterMenuLinks();
	const themesOptionsContent: object = await getThemesOptionsContent();

	return {
		props: {
			mainMenuLinks,
			navbarMenuLinks,
			footerMenuLinks,
			themesOptionsContent,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			content: response.data?.mainContent?.edges[0]?.node?.homePage,
		},
		revalidate: 60,
	};
};

export default Home;
