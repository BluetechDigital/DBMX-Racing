// Imports
import {
	homePage,
	postType,
	ContentContext,
	flexibleContentType,
} from "@/context/context";
import {IContentContext} from "@/types/context";
import type {NextPage, GetStaticProps} from "next";

// Queries Functions
import {getAllSeoContent} from "@/functions/graphql/Queries/GetAllSeoContent";
import {getAllFlexibleContentComponents} from "@/functions/graphql/Queries/GetAllFlexibleContentComponents";

// Components
import Layout from "@/components/Layout/Layout";
import RenderFlexibleContent from "@/components/FlexibleContent/RenderFlexibleContent";

const Home: NextPage<IContentContext> = ({
	seo,
	content,
	postTypeFlexiblecontent,
}) => {
	return (
		<>
			<ContentContext.Provider
				value={{
					seo: seo,
					content: content,
					postTypeFlexiblecontent: postTypeFlexiblecontent,
				}}
			>
				<Layout>
					<RenderFlexibleContent />
				</Layout>
			</ContentContext.Provider>
		</>
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
