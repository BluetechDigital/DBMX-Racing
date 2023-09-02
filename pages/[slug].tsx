// Imports
import {motion} from "framer-motion";
import {IContentContext} from "@/types/context";
import type {NextPage, GetStaticProps} from "next";
import {flexibleContentType, postType} from "@/context/context";

// Queries Functions
import {getAllPagesSlugs} from "@/functions/graphql/Queries/GetAllPagesSlugs";
import {getAllSeoContent} from "@/functions/graphql/Queries/GetAllSeoContent";
import {getAllFlexibleContentComponents} from "@/functions/graphql/Queries/GetAllFlexibleContentComponents";

// Components
import Layout from "@/components/Layout/Layout";
import PageContextProvider from "@/context/components/PageContextProvider";
import RenderFlexibleContent from "@/components/FlexibleContent/RenderFlexibleContent";

const dynamicPages: NextPage<IContentContext> = ({
	seo,
	content,
	postTypeFlexiblecontent,
}) => {
	return (
		<PageContextProvider
			seo={seo}
			content={content}
			postTypeFlexiblecontent={postTypeFlexiblecontent}
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
		</PageContextProvider>
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

	return {
		props: {
			seo: seoContent,
			content: flexibleContentComponents?.content,
			postTypeFlexiblecontent: flexibleContentType?.pages,
		},
		revalidate: 60,
	};
};

export default dynamicPages;
