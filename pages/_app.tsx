// Imports
import {useRouter} from "next/router";
import type {AppProps} from "next/app";
import {client} from "@/config/apollo";
import {useState, useEffect} from "react";
import {ApolloProvider} from "@apollo/client/react";

// Global Context Provider
import {IGlobalContext} from "@/types/context";

// Styling
import "../styles/globals.scss";

// Queries Functions
import {
	getMainMenuLinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
} from "@/functions/graphql/Queries/GetAllMenuLinks";
import {getAllBlogsContent} from "@/functions/graphql/Queries/GetAllBlogPostsSlugs";
import {getThemesOptionsContent} from "@/functions/graphql/Queries/GetAllThemesOptions";
import {getContentSliderBlogPostsPostsContent} from "@/functions/graphql/Queries/GetAllContentSliderPosts";

// Components
import GlobalLayout from "@/components/Layout/GlobalLayout";
import GlobalContextProvider from "@/components/Context/GlobalContextProvider";

export default function App({
	Component,
	pageProps,
	globalProps,
}: AppProps | any) {
	const router: any = useRouter();

	// PAGE LOADING ANIMATION //
	// Page Animation Loader
	function Loading() {
		const [loading, setLoading]: any = useState(false);

		useEffect(() => {
			const handleStart = (url: any) =>
				url !== router.asPath && setLoading(true);
			const handleComplete = (url: any) =>
				url === router.asPath &&
				setTimeout(() => {
					setLoading(false);
				}, 7000);

			router.events.on("routeChangeStart", handleStart);
			router.events.on("routeChangeComplete", handleComplete);
			router.events.on("routeChangeError", handleComplete);

			return () => {
				router.events.off("routeChangeStart", handleStart);
				router.events.off("routeChangeComplete", handleComplete);
				router.events.off("routeChangeError", handleComplete);
			};
		});

		return (
			loading && (
				<div className="spinner-wrapper">
					{/* LEGO SPINNER */}
					<div className="loader">
						<div className="box box0">
							<div></div>
						</div>
						<div className="box box1">
							<div></div>
						</div>
						<div className="box box2">
							<div></div>
						</div>
						<div className="box box3">
							<div></div>
						</div>
						<div className="box box4">
							<div></div>
						</div>
						<div className="box box5">
							<div></div>
						</div>
						<div className="box box6">
							<div></div>
						</div>
						<div className="box box7">
							<div></div>
						</div>
						<div className="ground">
							<div></div>
						</div>
					</div>
				</div>
			)
		);
	}

	return (
		<ApolloProvider client={client}>
			<GlobalContextProvider globalProps={globalProps}>
				<GlobalLayout>
					<Loading />
					<Component {...pageProps} />
				</GlobalLayout>
			</GlobalContextProvider>
		</ApolloProvider>
	);
}

App.getInitialProps = async ({Component, ctx}: any) => {
	let pageProps = {};

	if (Component.getInitialProps) {
		pageProps = await Component.getInitialProps(ctx);
	}

	// PUBLIC PAGES //
	/* Fetch all global content
	remaining content simultaneously */
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

	const globalProps: IGlobalContext = {
		blogs: blogs,
		mainMenuLinks: mainMenuLinks,
		navbarMenuLinks: navbarMenuLinks,
		footerMenuLinks: footerMenuLinks,
		themesOptionsContent: themesOptionsContent,
		contentSliderPostsContent: contentSliderPostsContent,
	};

	return {
		pageProps,
		globalProps,
	};
};
