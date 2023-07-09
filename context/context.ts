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

/* PUBLIC & PREVIEW PAGES & POSTS */
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
