// Imports
import type {AppProps} from "next/app";
import {IGlobalProps} from "@/types/context/Providers";

// Global Styling
import "@/styles/globals.scss";

// Google Reviews
import {getGoogleReviews} from "@/functions/googleReviews";

// Instagram Feed
import {getAllInstagramFeedContent} from "@/functions/InstagramFeed";

// Queries Functions
import {
	getMobileLinks,
	getCopyrightLinks,
	getFooterMenuLinks,
	getNavbarMenuLinks,
	getOurServicesSublinks,
} from "@/graphql/GetAllMenuLinks";
import {getThemesOptionsContent} from "@/graphql/GetAllThemesOptions";
import {getAllTestimonialsContent} from "@/graphql/GetAllTestimonials";

// Components
import Navbar from "@/components/Global/Navbar";
import Footer from "@/components/Global/Footer";
import BackToTopButton from "@/components/Elements/BackToTopButton";
import GlobalContextProvider from "@/context/providers/GlobalContextProvider";
import ApolloContextProvider from "@/context/providers/ApolloContextProvider";

const App = async ({children}: AppProps | any) => {
	// PUBLIC PAGES //
	/* Fetch all global content
	remaining content simultaneously */
	const [
		mobileLinks,
		copyrightLinks,
		navbarMenuLinks,
		footerMenuLinks,
		ourServicesLinks,
		themesOptionsContent,
		testimonials,
		googleReviewsFeed,
		instagramFeed,
	]: any = await Promise.all([
		getMobileLinks(),
		getCopyrightLinks(),
		getNavbarMenuLinks(),
		getFooterMenuLinks(),
		getOurServicesSublinks(),
		getThemesOptionsContent(),
		getAllTestimonialsContent(),

		// Google Reviews
		getGoogleReviews(),

		// Instagram Feed
		getAllInstagramFeedContent(),
	]);

	const globalProps: IGlobalProps = {
		mobileLinks: mobileLinks,
		testimonials: testimonials,
		instagramFeed: instagramFeed,
		copyrightLinks: copyrightLinks,
		navbarMenuLinks: navbarMenuLinks,
		footerMenuLinks: footerMenuLinks,
		ourServicesLinks: ourServicesLinks,
		googleReviewsFeed: googleReviewsFeed,
		themesOptionsContent: themesOptionsContent,
	};

	return (
		<html lang="en">
			<body>
				<ApolloContextProvider>
					<GlobalContextProvider globalProps={globalProps}>
						<Navbar />
						{children}
						<Footer />
						<BackToTopButton />
					</GlobalContextProvider>
				</ApolloContextProvider>
			</body>
		</html>
	);
};

export default App;
