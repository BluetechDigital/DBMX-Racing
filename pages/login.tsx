// Imports
import {motion} from "framer-motion";
import Layout from "@/components/Layout/Layout";
import {IContentContext} from "@/types/context";
import {NextPage, GetServerSideProps} from "next";
import {homePage, postType, flexibleContentType} from "@/context/context";

// Queries Functions
import {getAllSeoContent} from "@/functions/graphql/Queries/GetAllSeoContent";
import {getAllFlexibleContentComponents} from "@/functions/graphql/Queries/GetAllFlexibleContentComponents";

// Components
import Login from "@/components/Login";
import HeroFour from "@/components/HeroFour";
import PageContextProvider from "@/context/components/PageContextProvider";

const login: NextPage<IContentContext> = ({
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

					<Login />
				</Layout>
			</motion.div>
		</PageContextProvider>
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
