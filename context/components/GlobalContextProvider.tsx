import {FC} from "react";
import {GlobalContext} from "../Global";
import {IGlobalContextProvider} from "@/types/context";

const GlobalContextProvider: FC<IGlobalContextProvider> = ({
	children,
	globalProps,
}) => {
	return (
		<GlobalContext.Provider
			value={{
				blogs: globalProps?.blogs,
				mainMenuLinks: globalProps?.mainMenuLinks,
				navbarMenuLinks: globalProps?.navbarMenuLinks,
				footerMenuLinks: globalProps?.footerMenuLinks,
				themesOptionsContent: globalProps?.themesOptionsContent,
				contentSliderPostsContent: globalProps?.contentSliderPostsContent,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContextProvider;
