// Imports
import {
	postType,
	errorPage,
	ContentContext,
	flexibleContentType,
} from "@/context/context";
import {IContentContext} from "@/types/context";
import type {NextPage, GetStaticProps} from "next";

// Queries Functions

import {getAllSeoContent} from "@/functions/graphql/Queries/GetAllSeoContent";

import {getAllFlexibleContentComponents} from "@/functions/graphql/Queries/GetAllFlexibleContentComponents";

// Components
import HeroFour from "@/components/HeroFour";
import Layout from "@/components/Layout/Layout";
import RenderFlexibleContent from "@/components/FlexibleContent/RenderFlexibleContent";

const noPageExits: NextPage<IContentContext> = ({
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
					<HeroFour />

					<RenderFlexibleContent />
				</Layout>
			</ContentContext.Provider>
		</>
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
