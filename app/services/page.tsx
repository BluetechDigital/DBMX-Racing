// Imports
import {NextPage, Metadata} from "next";
import {flexibleContentType, postType, pageType} from "@/context/pages";

// Queries Functions
import {getAllSeoContent} from "@/graphql/GetAllSeoContent";
import {getAllFlexibleContentComponents} from "@/graphql/GetAllFlexibleContentComponents";

// Components
import BackToTopButton from "@/components/Elements/BackToTopButton";
import PageContextProvider from "@/context/providers/PageContextProvider";
import RenderFlexibleContent from "@/components/FlexibleContent/RenderFlexibleContent";

// Dynamic Pages Generated Metadata
export async function generateMetadata(): Promise<Metadata> {
	const seo: any = await getAllSeoContent(pageType?.services, postType?.pages);

	return {
		title: seo?.title,
		description: seo?.metaDesc,
	};
}

const ServicesPage: NextPage = async () => {
	// Fetch priority content
	const flexibleContentComponents: any = await getAllFlexibleContentComponents(
		pageType?.services,
		postType?.pages,
		flexibleContentType?.pages
	);

	return (
		<>
			<PageContextProvider
				content={flexibleContentComponents?.content}
				postTypeFlexibleContent={flexibleContentType?.pages}
			>
				<BackToTopButton />
				<RenderFlexibleContent />
			</PageContextProvider>
		</>
	);
};

export default ServicesPage;
