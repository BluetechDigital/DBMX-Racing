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
} from "./types";
import {createContext, useContext} from "react";

interface IDynamicContent {
	seo: ISeo;
	blogs: IBlogs;
	content: IContent;
	mainMenuLinks: IMainMenuLinks;
	navbarMenuLinks: INavbarMenuLinks;
	footerMenuLinks: IFooterMenuLinks;
	themesOptionsContent: IThemesOptionsContent;
	contentSliderPostsContent: IContentSliderPostsContent;
}
interface IDynamicContentTwo {
	defaultProps: {
		seo: ISeo;
		blogs: IBlogs;
		content: IContent;
		mainMenuLinks: IMainMenuLinks;
		navbarMenuLinks: INavbarMenuLinks;
		footerMenuLinks: IFooterMenuLinks;
		themesOptionsContent: IThemesOptionsContent;
		contentSliderPostsContent: IContentSliderPostsContent;
	};
}

/* PUBLIC PAGES & POSTS */
export const ContentContext = createContext<IDynamicContent | undefined>(
	undefined
);

export const useContentContext = () => {
	const content = useContext(ContentContext);

	if (content === undefined) {
		throw new Error(`useDynamicPagesContext must be used to render content.`);
	}

	return content;
};

/* PREVIEW PAGES & POSTS */
export const ContentContextTwo = createContext<IDynamicContentTwo | undefined>(
	undefined
);

export const useContentContextTwo = () => {
	const content = useContext(ContentContextTwo);

	if (content === undefined) {
		throw new Error(`useDynamicPagesContext must be used to render content.`);
	}

	return content;
};
