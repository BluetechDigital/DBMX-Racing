// Import
import {gql} from "@apollo/client";
import {motion} from "framer-motion";
import {client} from "../config/apollo";
import {getThemesOptionsContent} from "../lib/themesOptions";
import {getMainMenuLinks, getFooterMenuLinks} from "../lib/MenuLinks";

// Components
import MetaTag from "../components/Meta/MetaTag";
import ContentSlider from "@/components/ContentSlider";
import TitleParagraph from "@/components/TitleParagraph";
import Hero from "@/components/Hero";

export default function Home({
	seo,
	content,
	heroMenuLinks,
	mainMenuLinks,
	themesOptionsContent,
}: any) {
	// console.log(themesOptionsContent);
	return (
		<motion.div
			exit={{
				opacity: 0,
			}}
			initial="initial"
			animate="animate"
		>
			{/* <!--===== META TAG =====--> */}
			<MetaTag title={`DBMX Racing`} seo={seo} />

			<main>
				<Hero
					title={content?.heroSection?.title}
					email={themesOptionsContent?.email}
					paragraph={content?.heroSection?.paragraph}
					heroMenuLinks={heroMenuLinks?.heroMenuLinks}
					buttonLink={content?.heroSection?.buttonLink}
					twitterLink={themesOptionsContent?.twitterLink}
					phoneNumber={themesOptionsContent?.phoneNumber}
					linkedinLink={themesOptionsContent?.linkedinLink}
					facebookLink={themesOptionsContent?.facebookLink}
					buttonLinkTwo={content?.heroSection?.buttonLinkTwo}
					backgroundVideoUrl={content?.heroSection?.backgroundVideoUrl}
				/>

				<TitleParagraph
					title={content?.titleParagraph?.title}
					paragraph={content?.titleParagraph?.paragraph}
				/>

				{/* CONTENT SLIDER */}
				<ContentSlider
					content={content?.contentSlider?.content}
					contentTwo={content?.contentSlider?.contentTwo}
					contentThree={content?.contentSlider?.contentThree}
				/>
			</main>
		</motion.div>
	);
}

export async function getStaticProps() {
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
						}
					}
				}
			}
		}
	`;

	const response: any = await client.query({
		query: getHomePageContent,
	});

	const heroMenuLinks: object = await getMainMenuLinks();
	// const footerMenuLinks: object = await getFooterMenuLinks();
	const themesOptionsContent: object = await getThemesOptionsContent();

	return {
		props: {
			heroMenuLinks,
			themesOptionsContent,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			content: response.data?.mainContent?.edges[0]?.node?.homePage,
		},
		revalidate: 60,
	};
}
