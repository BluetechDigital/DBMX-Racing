// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {IGoogleReviews} from "@/types/components";
import {fadeInUp, initial} from "@/animations/animations";

// Components
import GoogleReviewsGrid from "@/components/Elements/GoogleReviewsGrid";
import GoogleReviewsSlider from "@/components/Elements/GoogleReviewsSlider";

const GoogleReviews: FC<IGoogleReviews> = ({title, displaySlider}) => {
	return (
		<>
			<div className="bg-white lg:container py-12 px-4 mx-auto">
				<motion.div
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className="flex flex-col items-center justify-center"
				>
					<motion.h3
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="my-10 text-pureBlack uppercase font-VitroTrialHeavy italic text-center text-xl lg:text-4xl"
					>
						{title}
					</motion.h3>
					{displaySlider ? <GoogleReviewsSlider /> : <GoogleReviewsGrid />}
				</motion.div>
			</div>
		</>
	);
};

export default GoogleReviews;
