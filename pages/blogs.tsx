// Import
import {gql} from "@apollo/client";
import {motion} from "framer-motion";
import {client} from "../config/apollo";
import {getAllBlogsContent} from "@/lib/BlogPostsSlugs";
import {getThemesOptionsContent} from "../lib/themesOptions";
import {
	getMainMenuLinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
} from "../lib/MenuLinks";

// Components
import Blogs from "@/components/Blogs";
import HeroTwo from "@/components/HeroTwo";
import Layout from "@/components/Layout/Layout";
import StoreLocation from "@/components/StoreLocation";
import ContactBanner from "@/components/ContactBanner";
import TitleParagraph from "@/components/TitleParagraph";

const blogs = ({
	seo,
	blogs,
	content,
	pageTitle,
	mainMenuLinks,
	navbarMenuLinks,
	footerMenuLinks,
	themesOptionsContent,
}: any) => {
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

				<Blogs blogs={blogs} />

				<ContactBanner
					title={content?.contactBanner?.title}
					paragraph={content?.contactBanner?.paragraph}
					buttonLink={content?.contactBanner?.buttonLink}
					backgroundImage={content?.contactBanner?.backgroundImage?.sourceUrl}
				/>

				<StoreLocation
					title={content?.ourLocation?.title}
					paragraph={content?.ourLocation?.paragraph}
				/>
			</Layout>
		</motion.div>
	);
};

export async function getStaticProps() {
	const getBlogsPageContent: any = gql`
		{
			pageTitle: pages(where: {id: 903, status: PUBLISH}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 903, status: PUBLISH}) {
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
						blogsPage {
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
		query: getBlogsPageContent,
	});

	const blogs: object = await getAllBlogsContent();
	const mainMenuLinks: object = await getMainMenuLinks();
	const navbarMenuLinks: object = await getNavbarMenuLinks();
	const footerMenuLinks: object = await getFooterMenuLinks();
	const themesOptionsContent: object = await getThemesOptionsContent();

	return {
		props: {
			blogs,
			mainMenuLinks,
			navbarMenuLinks,
			footerMenuLinks,
			themesOptionsContent,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			pageTitle: response?.data?.pageTitle?.edges[0]?.node?.title,
			content: response.data?.mainContent?.edges[0]?.node?.blogsPage,
		},
		revalidate: 60,
	};
}

export default blogs;
