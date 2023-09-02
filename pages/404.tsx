// Imports
import {motion} from "framer-motion";
import {IContentContext} from "@/types/context";
import type {NextPage, GetStaticProps} from "next";
import {postType, errorPage, flexibleContentType} from "@/context/context";

// Queries Functions
import {getAllSeoContent} from "@/functions/graphql/Queries/GetAllSeoContent";
import {getAllFlexibleContentComponents} from "@/functions/graphql/Queries/GetAllFlexibleContentComponents";

// Components
import HeroFour from "@/components/HeroFour";
import Layout from "@/components/Layout/Layout";
import PageContextProvider from "@/context/components/PageContextProvider";
import RenderFlexibleContent from "@/components/FlexibleContent/RenderFlexibleContent";

const noPageExits: NextPage<IContentContext> = ({
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
					<HeroFour />

					<RenderFlexibleContent />
				</Layout>
			</motion.div>
		</PageContextProvider>
	);
};

export default noPageExits;

export const getStaticProps: GetStaticProps = async () => {
	// Fetch priority content
	const seoContent: any = await getAllSeoContent(errorPage, postType?.pages);

	const flexibleContentComponents: any = await getAllFlexibleContentComponents(
		errorPage,
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
