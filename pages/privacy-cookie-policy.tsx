// Import
import {gql} from "@apollo/client";
import {motion} from "framer-motion";
import {client} from "../config/apollo";
import {getThemesOptionsContent} from "../lib/themesOptions";
import {
	getMainMenuLinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
} from "../lib/MenuLinks";

// Components
import Footer from "@/components/Footer";
import HeroTwo from "@/components/HeroTwo";
import MetaTag from "../components/Meta/MetaTag";
import JumboContent from "../components/JumboContent";
import StoreLocation from "@/components/StoreLocation";
import ContactBanner from "@/components/ContactBanner";
import TitleParagraph from "@/components/TitleParagraph";

const privacyCookiePolicy = ({
	seo,
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
			{/* <!--===== META TAG =====--> */}
			<MetaTag title={pageTitle} seo={seo} />

			<main>
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

				<StoreLocation
					title={content?.ourLocation?.title}
					paragraph={content?.ourLocation?.paragraph}
				/>

				<Footer
					email={themesOptionsContent?.email}
					phoneNumber={themesOptionsContent?.phoneNumber}
					twitterLink={themesOptionsContent?.twitterLink}
					facebookLink={themesOptionsContent?.facebookLink}
					linkedinLink={themesOptionsContent?.linkedinLink}
					footerMenuLinks={footerMenuLinks?.footerMenuLinks}
					copyRightText={themesOptionsContent?.copyrightText}
					phoneNumberTwo={themesOptionsContent?.phoneNumberTwo}
				/>
			</main>
		</motion.div>
	);
};

export async function getStaticProps() {
	const getPrivacyCookiePolicyPageContent: any = gql`
		{
			pageTitle: pages(where: {id: 17, status: PUBLISH}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 17, status: PUBLISH}) {
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
						privacyCookiePolicyPage {
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
		query: getPrivacyCookiePolicyPageContent,
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
				response.data?.mainContent?.edges[0]?.node?.privacyCookiePolicyPage,
		},
		revalidate: 60,
	};
}

export default privacyCookiePolicy;
