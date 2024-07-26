// Imports
import {IPostTypes, IPageTypes} from "@/types/context";
import {IFlexibleContentType} from "@/types/context/Providers";

/* PUBLIC PAGES & POSTS */
/* PREVIEW PAGES & POSTS */
export const postType: IPostTypes = {
	// Public pages
	pages: "pages",
	posts: "posts",
	testimonials: "testimonials",

	// Preview pages
	previewPage: "page",
	previewPost: "post",
};

export const pageType: IPageTypes = {
	// Public pages
	home: "Home",
	services: "services",
};

export const flexibleContentType: IFlexibleContentType = {
	// Public pages
	pages: "DefaultTemplate_Flexiblecontent_FlexibleContent",
	// Preview pages
	previewPage: "Page_Flexiblecontent_FlexibleContent",
	previewPost: "Post_Flexiblecontent_FlexibleContent",
};
