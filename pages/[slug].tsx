// Imports
import {motion} from "framer-motion";
import {IContentContext} from "@/context/context";
import type {NextPage, GetStaticProps} from "next";
import {ContentContext, flexibleContentType, postType} from "@/context/context";

// Queries Functions
import {
	getMainMenuLinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
} from "@/functions/graphql/Queries/GetAllMenuLinks";
import {getAllSeoContent} from "@/functions/graphql/Queries/GetAllSeoContent";
import {getAllPagesSlugs} from "@/functions/graphql/Queries/GetAllPagesSlugs";
import {getAllBlogsContent} from "@/functions/graphql/Queries/GetAllBlogPostsSlugs";
import {getThemesOptionsContent} from "@/functions/graphql/Queries/GetAllThemesOptions";
import {getContentSliderBlogPostsPostsContent} from "@/functions/graphql/Queries/GetAllContentSliderPosts";
import {getAllFlexibleContentComponents} from "@/functions/graphql/Queries/GetAllFlexibleContentComponents";

// Components
import Layout from "@/components/Layout/Layout";
import RenderFlexibleContent from "@/components/FlexibleContent/RenderFlexibleContent";

const dynamicPages: NextPage<IContentContext> = ({
	seo,
	blogs,
	content,
	mainMenuLinks,
	navbarMenuLinks,
	footerMenuLinks,
	themesOptionsContent,
	postTypeFlexiblecontent,
	contentSliderPostsContent,
}) => {
	return (
		<ContentContext.Provider
			value={{
				seo: seo,
				blogs: blogs,
				content: content,
				mainMenuLinks: mainMenuLinks,
				navbarMenuLinks: navbarMenuLinks,
				footerMenuLinks: footerMenuLinks,
				themesOptionsContent: themesOptionsContent,
				postTypeFlexiblecontent: postTypeFlexiblecontent,
				contentSliderPostsContent: contentSliderPostsContent,
			}}
		>
			<motion.div
				exit={{
					opacity: 0,
				}}
				initial="initial"
				animate="animate"
			>
				<Layout>
					<RenderFlexibleContent />
				</Layout>
			</motion.div>
		</ContentContext.Provider>
	);
};

export async function getStaticPaths() {
	const data = await getAllPagesSlugs();
	const paths = data.map((item) => ({
		params: {
			slug: item?.slug as String,
		},
	}));

	return {paths, fallback: false};
}

export const getStaticProps: GetStaticProps = async ({params}: any) => {
	// Fetch priority content
	const seoContent: any = await getAllSeoContent(params?.slug, postType?.pages);

	const flexibleContentComponents: any = await getAllFlexibleContentComponents(
		params?.slug,
		postType?.pages,
		flexibleContentType?.pages
	);

	// Fetch remaining content simultaneously
	const [
		blogs,
		mainMenuLinks,
		navbarMenuLinks,
		footerMenuLinks,
		themesOptionsContent,
		contentSliderPostsContent,
	] = await Promise.all([
		getAllBlogsContent(),
		getMainMenuLinks(),
		getNavbarMenuLinks(),
		getFooterMenuLinks(),
		getThemesOptionsContent(),
		getContentSliderBlogPostsPostsContent(),
	]);

	return {
		props: {
			blogs,
			mainMenuLinks,
			navbarMenuLinks,
			footerMenuLinks,
			seo: seoContent,
			themesOptionsContent,
			contentSliderPostsContent,
			content: flexibleContentComponents?.content,
			postTypeFlexiblecontent: flexibleContentType?.pages,
		},
		revalidate: 60,
	};
};

export default dynamicPages;
