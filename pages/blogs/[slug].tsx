// Imports
import {motion} from "framer-motion";
import {IContentContext} from "@/types/context";
import type {NextPage, GetStaticProps} from "next";
import {postType, ContentContext, flexibleContentType} from "@/context/context";

// Queries Functions
import {getAllSeoContent} from "@/functions/graphql/Queries/GetAllSeoContent";
import {getAllBlogPostsSlugs} from "@/functions/graphql/Queries/GetAllBlogPostsSlugs";
import {getAllFlexibleContentComponents} from "@/functions/graphql/Queries/GetAllFlexibleContentComponents";

// Components
import Layout from "@/components/Layout/Layout";
import BackHoverButton from "@/components/Elements/BackHoverButton";
import RenderFlexibleContent from "@/components/FlexibleContent/RenderFlexibleContent";

const dynamicSinglePosts: NextPage<IContentContext> = ({
	seo,
	content,
	postTypeFlexiblecontent,
}) => {
	return (
		<ContentContext.Provider
			value={{
				seo: seo,
				content: content,
				postTypeFlexiblecontent: postTypeFlexiblecontent,
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
					<BackHoverButton link={`/blogs`} />

					<RenderFlexibleContent />
				</Layout>
			</motion.div>
		</ContentContext.Provider>
	);
};

export async function getStaticPaths() {
	const data = await getAllBlogPostsSlugs();
	const paths = data.map((item) => ({
		params: {
			slug: item?.slug as String,
		},
	}));

	return {paths, fallback: false};
}

export const getStaticProps: GetStaticProps = async ({params}: any) => {
	// Fetch priority content
	const seoContent: any = await getAllSeoContent(params?.slug, postType.posts);

	const flexibleContentComponents: any = await getAllFlexibleContentComponents(
		params?.slug,
		postType.posts,
		flexibleContentType?.pages
	);

	return {
		props: {
			seo: seoContent,
			content: flexibleContentComponents?.content,
			postTypeFlexiblecontent: flexibleContentType?.pages,
		},
		revalidate: 60,
	};
};

export default dynamicSinglePosts;
