// Imports
import {
	homePage,
	postType,
	ContentContext,
	flexibleContentType,
} from "@/context/context";
import Layout from "@/components/Layout/Layout";
import {IContentContext} from "@/types/context";
import {NextPage, GetServerSideProps} from "next";

// Queries Functions
import {getAllSeoContent} from "@/functions/graphql/Queries/GetAllSeoContent";
import {getAllFlexibleContentComponents} from "@/functions/graphql/Queries/GetAllFlexibleContentComponents";

// Components
import Login from "@/components/Login";
import HeroFour from "@/components/HeroFour";

const login: NextPage<IContentContext> = ({
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
					<Login />
				</Layout>
			</ContentContext.Provider>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
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
	};
};

export default login;
