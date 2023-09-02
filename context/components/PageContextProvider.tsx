// Imports
import {FC} from "react";
import {PageContext} from "../context";
import {IPageContextProvider} from "@/types/context";

const PageContextProvider: FC<IPageContextProvider> = ({
	seo,
	content,
	children,
	postTypeFlexiblecontent,
}) => {
	return (
		<PageContext.Provider
			value={{
				seo: seo,
				content: content,
				postTypeFlexiblecontent: postTypeFlexiblecontent,
			}}
		>
			{children}
		</PageContext.Provider>
	);
};

export default PageContextProvider;
