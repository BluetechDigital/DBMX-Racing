// Import
import {
	IPostTypes,
	IContentContext,
	IPostTypesFlexiblecontent,
} from "@/types/context";
import {createContext, useContext} from "react";

/* PUBLIC PAGES & POSTS */
/* PREVIEW PAGES & POSTS */
export const postType: IPostTypes = {
	// Public pages
	pages: "pages",
	posts: "posts",
	// Preview pages
	previewPage: "page",
	previewPost: "post",
};
export const homePage: string = "Home";
export const errorPage: string = "error-page";
export const flexibleContentType: IPostTypesFlexiblecontent = {
	// Public pages
	pages: "DefaultTemplate_Flexiblecontent_FlexibleContent",
	// Preview pages
	previewPage: "Page_Flexiblecontent_FlexibleContent",
	previewPost: "Post_Flexiblecontent_FlexibleContent",
};

export const PageContext = createContext<IContentContext | undefined>(
	undefined
);

export const useContentContext = () => {
	const content = useContext(PageContext);

	if (content === undefined) {
		throw new Error(`useDynamicPagesContext must be used to render content.`);
	}

	return content;
};
