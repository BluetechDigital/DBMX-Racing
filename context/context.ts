// Import
import {
	ISeo,
	IBlogs,
	IContent,
	IMainMenuLinks,
	INavbarMenuLinks,
	IFooterMenuLinks,
	IThemesOptionsContent,
	IContentSliderPostsContent,
	IPostTypeFlexiblecontent,
} from "./types";
import {createContext, useContext} from "react";

export interface IContentContext {
	seo: ISeo;
	blogs: IBlogs;
	content: IContent;
	mainMenuLinks: IMainMenuLinks;
	navbarMenuLinks: INavbarMenuLinks;
	footerMenuLinks: IFooterMenuLinks;
	themesOptionsContent: IThemesOptionsContent;
	postTypeFlexiblecontent: IPostTypeFlexiblecontent;
	contentSliderPostsContent: IContentSliderPostsContent;
}

type IPostTypes = {
	pages: string;
	posts: string;
	previewPage: string;
	previewPost: string;
};

type IPostTypesFlexiblecontent = {
	pages: string;
	previewPage: string;
	previewPost: string;
};

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

export const ContentContext = createContext<IContentContext | undefined>(
	undefined
);

export const useContentContext = () => {
	const content = useContext(ContentContext);

	if (content === undefined) {
		throw new Error(`useDynamicPagesContext must be used to render content.`);
	}

	return content;
};
