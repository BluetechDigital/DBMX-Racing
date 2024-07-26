"use client";

// Imports
import {FC} from "react";
import {createContext, useContext} from "react";
import {IPageContext, IPageContextProvider} from "@/types/context/Providers";

export const PageContext = createContext<IPageContext | undefined>(undefined);

export const usePageContext = () => {
	const content = useContext(PageContext);

	if (content === undefined) {
		throw new Error(`useDynamicPageContext must be used to render content.`);
	}

	return content;
};

export const PageContextProvider: FC<IPageContextProvider> = ({
	content,
	children,
	postTypeFlexibleContent,
}) => {
	return (
		<PageContext.Provider
			value={{
				content: content,
				postTypeFlexibleContent: postTypeFlexibleContent,
			}}
		>
			{children}
		</PageContext.Provider>
	);
};

export default PageContextProvider;
