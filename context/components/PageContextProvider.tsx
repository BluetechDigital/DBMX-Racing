import {FC} from "react";
import {ContentContext} from "@/context/context";
import {IPageContextProvider} from "@/types/context";

const PageContextProvider: FC<IPageContextProvider> = ({
	seo,
	content,
	children,
	postTypeFlexiblecontent,
}) => {
	return (
		<PageContextProvider
			seo={seo}
			content={content}
			postTypeFlexiblecontent={postTypeFlexiblecontent}
		>
			{children}
		</PageContextProvider>
	);
};

export default PageContextProvider;
