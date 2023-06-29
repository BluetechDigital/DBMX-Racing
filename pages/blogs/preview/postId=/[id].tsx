// Imports
import {isEmpty} from "lodash";
import {motion} from "framer-motion";
import {IContentContextTwo} from "@/components/types";
import type {GetServerSideProps, NextPage} from "next";
import {getAuthToken} from "@/functions/cookies/cookies";
import {getLoginPreviewRedirectUrl} from "@/functions/redirects/redirects";

// Mutations Functions
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

const dynamicPreviewPosts: NextPage<IContentContextTwo> = ({defaultProps}) => {
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
	const loginRedirectURL: string = getLoginPreviewRedirectUrl(
		"post",
		params?.id
	);

	if (isEmpty(authToken)) {
		return {
			redirect: {
				permanent: false,
				destination: loginRedirectURL || "/",
				statusCode: 307,
			},
		};
	} else {
		// Fetch priority content
		/* PREVIEW BLOGS POSTS SEO CONTENT */
		const seoContent: any = await getAllPreviewSeoBlogPostsContent(
			params?.id,
			authToken,
			loginRedirectURL
		);

		/* PREVIEW BLOGS POSTS FLEXIBLE CONTENT */
		const flexibleContentComponents: any =
			await getAllPreviewPostsFlexibleContentComponents(
				params?.id,
				authToken,
				loginRedirectURL
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

		const defaultProps = {
			blogs,
			mainMenuLinks,
			navbarMenuLinks,
			footerMenuLinks,
			seo: seoContent,
			themesOptionsContent,
			contentSliderPostsContent,
			content: flexibleContentComponents?.content,
		};

		if (!defaultProps.content) {
			return {
				redirect: {
					permanent: false,
					destination: loginRedirectURL || "/",
				},
			};
		} else {
			return {
				props: {
					defaultProps,
				},
			};
		}
	}
};

export default dynamicPreviewPosts;
