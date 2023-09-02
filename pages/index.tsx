// Imports
import {motion} from "framer-motion";
import {IContentContext} from "@/types/context";
import type {NextPage, GetStaticProps} from "next";
import {homePage, postType, flexibleContentType} from "@/context/context";

// Queries Functions
import {getAllSeoContent} from "@/functions/graphql/Queries/GetAllSeoContent";
import {getAllFlexibleContentComponents} from "@/functions/graphql/Queries/GetAllFlexibleContentComponents";

// Components
import Layout from "@/components/Layout/Layout";
import PageContextProvider from "@/context/components/PageContextProvider";
import RenderFlexibleContent from "@/components/FlexibleContent/RenderFlexibleContent";

const Home: NextPage<IContentContext> = ({
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

export const getStaticProps: GetStaticProps = async () => {
	// Fetch priority content
	const seoContent: any = await getAllSeoContent(homePage, postType?.pages);

	const flexibleContentComponents: any = await getAllFlexibleContentComponents(
		homePage,
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

export default Home;
