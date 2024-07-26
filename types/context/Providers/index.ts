// Imports
import {IGoogleReviewsFeed} from "@/types/api";
import {
	ILinks,
	IContent,
	ITestimonials,
	IThemesOptionsContent,
	IInstagramFeed,
} from "../index";

/* CONTEXT PROVIDERS  */
export type IPageContext = {
	content: IContent;
	postTypeFlexibleContent: string;
};
export type IGlobalProps = {
	testimonials: ITestimonials;
	instagramFeed: IInstagramFeed;
	googleReviewsFeed: IGoogleReviewsFeed;
	themesOptionsContent: IThemesOptionsContent;

	// Website Links
	mobileLinks: ILinks.IMobileLinks;
	copyrightLinks: ILinks.ICopyrightLinks;
	navbarMenuLinks: ILinks.INavbarMenuLinks;
	footerMenuLinks: ILinks.IFooterMenuLinks;
	ourServicesLinks: ILinks.IOurServicesLinks;
};
export type IGlobalContext = {
	testimonials: ITestimonials;
	instagramFeed: IInstagramFeed;
	googleReviewsFeed: IGoogleReviewsFeed;
	themesOptionsContent: IThemesOptionsContent;

	// Website Links
	mobileLinks: ILinks.IMobileLinks;
	copyrightLinks: ILinks.ICopyrightLinks;
	navbarMenuLinks: ILinks.INavbarMenuLinks;
	footerMenuLinks: ILinks.IFooterMenuLinks;
	ourServicesLinks: ILinks.IOurServicesLinks;
};

export type IPageContextProvider = {
	content: IContent;
	children: React.ReactNode;
	postTypeFlexibleContent: string;
};
export type IFlexibleContentType = {
	pages: string;
	previewPage: string;
	previewPost: string;
};
export type IGlobalContextProvider = {
	globalProps: IGlobalContext;
	children: React.ReactNode;
};
export type IApolloContextProvider = {
	children: React.ReactNode;
};
