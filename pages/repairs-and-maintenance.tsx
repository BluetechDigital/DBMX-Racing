// Import
import {gql} from "@apollo/client";
import {motion} from "framer-motion";
import {client} from "../config/apollo";
import type {NextPage, GetStaticProps} from "next";
import {getThemesOptionsContent} from "../functions/themesOptions";
import {
	getMainMenuLinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
} from "../functions/MenuLinks";

// Components
import HeroTwo from "@/components/HeroTwo";
import Layout from "@/components/Layout/Layout";
import JumboContent from "../components/JumboContent";
import StoreLocation from "@/components/StoreLocation";
import ContactBanner from "@/components/ContactBanner";
import TitleParagraph from "@/components/TitleParagraph";
import ContentSlider from "@/components/ContentSlider";

interface IRepairsMaintenance {
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
	pageTitle: string;
	content: {
		heroSection: {
			title: string;
			paragraph: string;
			backgroundImage: {
				sourceUrl: string;
			};
		};
		titleParagraph: {
			title: string;
			paragraph: string;
		};
		jumboContentSection: [
			{
				content: {
					id: string;
					title: string;
					subtitle: string;
					paragraph: string;
					imageLocation: string;
					backgroundDisplay: string;
					image: {
						altText: string;
						sourceUrl: string;
						mediaDetails: {
							height: number;
							width: number;
						};
					};
					buttonLink: {
						url: string;
						title: string;
						target: string;
					};
				};
			}
		];
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

const repairsMaintenance: NextPage<IRepairsMaintenance> = ({
	seo,
	content,
	pageTitle,
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
				pageTitle={pageTitle}
				themesOptionsContent={themesOptionsContent}
				footerMenuLinks={footerMenuLinks?.footerMenuLinks}
			>
				<HeroTwo
					title={content?.heroSection?.title}
					email={themesOptionsContent?.email}
					paragraph={content?.heroSection?.paragraph}
					mainMenuLinks={mainMenuLinks?.mainMenuLinks}
					twitterLink={themesOptionsContent?.twitterLink}
					phoneNumber={themesOptionsContent?.phoneNumber}
					linkedinLink={themesOptionsContent?.linkedinLink}
					facebookLink={themesOptionsContent?.facebookLink}
					navbarMenuLinks={navbarMenuLinks?.navbarMenuLinks}
					backgroundImage={content?.heroSection?.backgroundImage?.sourceUrl}
				/>

				<TitleParagraph
					title={content?.titleParagraph?.title}
					paragraph={content?.titleParagraph?.paragraph}
				/>

				<JumboContent jumboContentSection={content?.jumboContentSection} />

				<ContactBanner
					title={content?.contactBanner?.title}
					paragraph={content?.contactBanner?.paragraph}
					buttonLink={content?.contactBanner?.buttonLink}
					backgroundImage={content?.contactBanner?.backgroundImage?.sourceUrl}
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
	const getRepairsMaintenancePageContent: any = gql`
		{
			pageTitle: pages(where: {id: 161, status: PUBLISH}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 161, status: PUBLISH}) {
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
						repairsMaintenancePage {
							heroSection {
								title
								paragraph
								backgroundImage {
									sourceUrl
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
		query: getRepairsMaintenancePageContent,
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
			pageTitle: response?.data?.pageTitle?.edges[0]?.node?.title,
			content:
				response.data?.mainContent?.edges[0]?.node?.repairsMaintenancePage,
		},
		revalidate: 60,
	};
};

export default repairsMaintenance;
