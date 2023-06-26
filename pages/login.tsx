// Imports
import {
	getMainMenuLinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
} from "@/functions/graphql/Queries/GetAllMenuLinks";
import {motion} from "framer-motion";
import {NextPage, GetStaticProps} from "next";
import Layout from "@/components/Layout/Layout";
import {ContentContext} from "@/context/context";
import {IContentContext} from "@/components/types";
import {getPreviewRedirectUrl} from "@/functions/redirects/redirects";
// import validateAndSanitizeLoginForm from "../src/utils/validator/login";
// import {handleRedirectsAndReturnData} from "../src/utils/slug";
import {getAllBlogsContent} from "@/functions/graphql/Queries/GetAllBlogPostsSlugs";
import {getAllSeoPagesContent} from "@/functions/graphql/Queries/GetAllSeoPagesContent";
import {getThemesOptionsContent} from "@/functions/graphql/Queries/GetAllThemesOptions";
import {getContentSliderBlogPostsPostsContent} from "@/functions/graphql/Queries/GetAllContentSliderPosts";
import {getAllPagesFlexibleContentComponents} from "@/functions/graphql/Queries/GetAllFlexibleContentComponents";

// Components
import Login from "../components/Login";
import HeroTwo from "@/components/HeroTwo";

const login: NextPage<IContentContext> = ({
	seo,
	blogs,
	content,
	mainMenuLinks,
	navbarMenuLinks,
	footerMenuLinks,
	themesOptionsContent,
	contentSliderPostsContent,
}) => {
	return (
		<ContentContext.Provider
			value={{
				seo: seo,
				blogs: blogs,
				content: content,
				mainMenuLinks: mainMenuLinks,
				navbarMenuLinks: navbarMenuLinks,
				footerMenuLinks: footerMenuLinks,
				themesOptionsContent: themesOptionsContent,
				contentSliderPostsContent: contentSliderPostsContent,
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
					<HeroTwo
						title={"Login"}
						paragraph={"<p></p>"}
						backgroundImage={
							"https://mydummysite.co.uk/ToddLearningTwo/wp-content/uploads/2023/03/pexels-vikram-sundaramoorthy-1448385-scaled.jpg"
						}
					/>

					<Login />
				</Layout>
			</motion.div>
		</ContentContext.Provider>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	// Fetch priority content
	const seoContent: any = await getAllSeoPagesContent("Home");

	const flexibleContentComponents: any =
		await getAllPagesFlexibleContentComponents("Home");

	// Fetch remaining content simultaneously
	const [
		blogs,
		mainMenuLinks,
		navbarMenuLinks,
		footerMenuLinks,
		themesOptionsContent,
		contentSliderPostsContent,
	] = await Promise.all([
		getAllBlogsContent(),
		getMainMenuLinks(),
		getNavbarMenuLinks(),
		getFooterMenuLinks(),
		getThemesOptionsContent(),
		getContentSliderBlogPostsPostsContent(),
	]);

	return {
		props: {
			blogs,
			mainMenuLinks,
			navbarMenuLinks,
			footerMenuLinks,
			seo: seoContent,
			themesOptionsContent,
			contentSliderPostsContent,
			content: flexibleContentComponents?.content,
		},
		revalidate: 60,
	};
};

export default login;
