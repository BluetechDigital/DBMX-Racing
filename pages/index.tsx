// Import
import {gql} from "@apollo/client";
import {motion} from "framer-motion";
import {client} from "../config/apollo";
import {getThemesOptionsContent} from "../lib/themesOptions";
import {getMainMenuLinks, getFooterMenuLinks} from "../lib/MenuLinks";

// Components
import MetaTag from "../components/Meta/MetaTag";

export default function Home({seo, content, themesOptionsContent}: any) {
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

			<main></main>
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
					}
				}
			}
		}
	`;

	const response: any = await client.query({
		query: getHomePageContent,
	});

	// const mainMenuLinks: object = await getMainMenuLinks();
	// const footerMenuLinks: object = await getFooterMenuLinks();
	const themesOptionsContent: object = await getThemesOptionsContent();

	return {
		props: {
			themesOptionsContent,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
		},
		revalidate: 60,
	};
}
