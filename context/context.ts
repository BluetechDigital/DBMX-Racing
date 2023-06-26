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
