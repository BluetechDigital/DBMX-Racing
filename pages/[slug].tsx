// Imports
import {IContentContext} from "@/types/context";
import type {NextPage, GetStaticProps} from "next";
import {ContentContext, flexibleContentType, postType} from "@/context/context";

// Queries Functions

import {getAllPagesSlugs} from "@/functions/graphql/Queries/GetAllPagesSlugs";
import {getAllSeoContent} from "@/functions/graphql/Queries/GetAllSeoContent";
import {getAllFlexibleContentComponents} from "@/functions/graphql/Queries/GetAllFlexibleContentComponents";

// Components
import Layout from "@/components/Layout/Layout";
import RenderFlexibleContent from "@/components/FlexibleContent/RenderFlexibleContent";

const dynamicPages: NextPage<IContentContext> = ({
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
