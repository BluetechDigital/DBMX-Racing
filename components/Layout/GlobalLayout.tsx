// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {ILayout} from "@/types/components/index";

// Components
import Footer from "../Footer";
import DiscountBanner from "../DiscountBanner";
import PostHogContextProvider from "../Context/PostHogProviderContext";

const GlobalLayout: FC<ILayout> = ({children}) => {
	return (
		<>
			<motion.div
				exit={{
					opacity: 0,
				}}
				initial="initial"
				animate="animate"
			>
				{/* <DiscountBanner /> */}
				{/* Cookie Policy Pop Up */}
				<PostHogContextProvider />
				<>{children}</>
				<Footer />
			</motion.div>
		</>
	);
};

export default GlobalLayout;
