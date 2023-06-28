// Imports
import type {NextPage} from "next";
import {motion} from "framer-motion";

const dynamicPreviewPages: NextPage = () => {
	return (
		<motion.div
			exit={{
				opacity: 0,
			}}
			initial="initial"
			animate="animate"
		>
			Hello
		</motion.div>
	);
};

export default dynamicPreviewPages;
