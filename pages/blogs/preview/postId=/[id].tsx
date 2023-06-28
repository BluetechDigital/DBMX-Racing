// Imports
import {
	getLoginPreviewRedirectUrl,
	handleRedirectsAndReturnData,
} from "@/functions/redirects/redirects";
import {motion} from "framer-motion";
import {IContentContextTwo} from "@/components/types";
import type {GetServerSideProps, NextPage} from "next";
import {getAuthToken} from "@/functions/cookies/cookies";

// Mutations Functions
import {getPreviewPostSlugs} from "@/functions/graphql/Mutations/GetPreviewPostById";
import {getAllPreviewPostsFlexibleContentComponents} from "@/functions/graphql/Mutations/GetAllPreviewFlexibleContentComponents";

// Queries Functions
import {
	getMainMenuLinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
} from "@/functions/graphql/Queries/GetAllMenuLinks";
import {getAllBlogsContent} from "@/functions/graphql/Queries/GetAllBlogPostsSlugs";
import {getThemesOptionsContent} from "@/functions/graphql/Queries/GetAllThemesOptions";
import {getAllPreviewSeoBlogPostsContent} from "@/functions/graphql/Mutations/GetAllPreviewSeoContent";
import {getContentSliderBlogPostsPostsContent} from "@/functions/graphql/Queries/GetAllContentSliderPosts";

// Components
import Layout from "@/components/Layout/Layout";
import {ContentContext} from "@/context/context";
import RenderFlexibleContentTwo from "@/components/FlexibleContent/RenderFlexibleContentTwo";

const dynamicPreviewPosts: NextPage<IContentContextTwo> = ({
	defaultProps,
}: any) => {
	console.log(defaultProps);
	console.log(defaultProps?.content);

	return (
		<ContentContext.Provider
			value={{
				seo: defaultProps?.seo,
				blogs: defaultProps?.blogs,
				content: defaultProps?.content,
				mainMenuLinks: defaultProps?.mainMenuLinks,
				navbarMenuLinks: defaultProps?.navbarMenuLinks,
				footerMenuLinks: defaultProps?.footerMenuLinks,
				themesOptionsContent: defaultProps?.themesOptionsContent,
				contentSliderPostsContent: defaultProps?.contentSliderPostsContent,
			}}
		>
			<motion.div
				exit={{
					opacity: 0,
				}}
				initial="initial"
				animate="animate"
				className="h-screen bg-white"
			>
				<Layout>
					<RenderFlexibleContentTwo />
				</Layout>
			</motion.div>
		</ContentContext.Provider>
	);
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
	const authToken: string = getAuthToken(context.req);
	const {params}: any = context || {};

	const previewPostSlug: any = await getPreviewPostSlugs(params?.id, authToken);

	// Fetch priority content
	const seoContent: any = await getAllPreviewSeoBlogPostsContent(
		params?.id,
		authToken
	);

	const flexibleContentComponents: any =
		await getAllPreviewPostsFlexibleContentComponents(params?.id, authToken);

	const loginRedirectURL = getLoginPreviewRedirectUrl("post", params?.id ?? "");

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

	const defaultProps = {
		props: {
			blogs,
			mainMenuLinks,
			navbarMenuLinks,
			footerMenuLinks,
			seo: seoContent,
			themesOptionsContent,
			contentSliderPostsContent,
			data: previewPostSlug?.data,
			content: flexibleContentComponents?.content,
		},
	};

	return handleRedirectsAndReturnData(
		defaultProps,
		previewPostSlug?.data,
		previewPostSlug?.errors,
		"post",
		true,
		loginRedirectURL
	);
};

export default dynamicPreviewPosts;
