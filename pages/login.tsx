// Imports

import {
	getMainMenuLinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
} from "@/functions/graphql/Queries/GetAllMenuLinks";
import {useState} from "react";
import {isEmpty} from "lodash";
import {motion} from "framer-motion";
import {useRouter} from "next/router";
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
import Paragraph from "@/components/Elements/Paragraph";

const Login: NextPage<IContentContext> = ({
	seo,
	blogs,
	content,
	mainMenuLinks,
	navbarMenuLinks,
	footerMenuLinks,
	themesOptionsContent,
	contentSliderPostsContent,
}) => {
	const router = useRouter();
	const [loginFields, setLoginFields] = useState({
		username: "",
		password: "",
	});

	const [errorMessage, setErrorMessage] = useState(null);
	const [loading, setLoading] = useState(false);

	const onFormSubmit = (event: any) => {};

	/**
	 * Sets client side error.
	 *
	 * Sets error data to result received from our client side validation function,
	 * and statusbar to true so that its visible to show the error.
	 *
	 * @param {Object} validationResult Validation Data result.
	 */
	const setClientSideError = (validationResult: any) => {};

	const handleOnChange = (event: any) => {
		setLoginFields({...loginFields, [event.target.name]: event.target.value});
	};

	const {username, password} = loginFields;
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
					<div>
						<div className="w-5/12 p-8 m-auto mt-10 bg-gray-100 rounded-lg login-form md:ml-auto md:mt-12">
							<h4 className="block mb-5 text-lg font-medium text-gray-900 title-font">
								Login
							</h4>
							{!isEmpty(errorMessage) && (
								<Paragraph
									content={""}
									tailwindStyling="mx-auto mb-16 text-lg font-semibold text-center sm:text-xl md:text-2xl"
								/>
							)}
							<form onSubmit={onFormSubmit} className="mb-4">
								<label className="text-sm leading-7 text-gray-600">
									Username:
									<input
										type="text"
										className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
										name="username"
										value={username}
										onChange={handleOnChange}
									/>
								</label>
								<br />
								<label className="text-sm leading-7 text-gray-600">
									Password:
									<input
										type="password"
										className="w-full px-3 py-1 mb-8 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
										name="password"
										value={password}
										onChange={handleOnChange}
									/>
								</label>
								<button
									className="px-8 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
									type="submit"
								>
									Login
								</button>
								{loading ? <p>Loading...</p> : null}
							</form>
						</div>
					</div>
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

export default Login;
