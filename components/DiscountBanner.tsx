// Imports
import {FC} from "react";
import {useGlobalContext} from "@/context/Global";

// Components
import Paragraph from "./Elements/Paragraph";
const DiscountBanner: FC = () => {
	const globalContext = useGlobalContext();

	// Use #DBMX20 in store for 20% discount

	return (
		<>
			<div
				className={
					globalContext?.themesOptionsContent?.displayDiscountsBanner
						? "w-full z-[999] p-2 bg-goldPrimeDarker"
						: "hidden"
				}
			>
				<Paragraph
					content={globalContext?.themesOptionsContent?.discountsBannerTextarea}
					tailwindStyling="w-full font-semibold lg:max-w-[50rem] mx-auto text-white text-center text-base"
				/>
			</div>
		</>
	);
};

export default DiscountBanner;
