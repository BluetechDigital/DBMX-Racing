"use client";

// Imports
import {
	initial,
	stagger,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";

// Components
import GoogleReviewsCard from "@/components/Cards/GoogleReviewsCard";

const GoogleReviewsGrid: FC = () => {
	const globalContext = useGlobalContext();

	return (
		<>
			<motion.div
				initial={initial}
				variants={stagger}
				whileInView="animate"
				viewport={{once: true}}
				className="w-full py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
			>
				{globalContext?.googleReviewsFeed?.reviewsArray?.length > 0 ? (
					globalContext?.googleReviewsFeed?.reviewsArray?.map(
						(item: any, index: number) => (
							<Fragment key={index}>
								<motion.div
									custom={index}
									initial={initial}
									className="w-full"
									whileInView="animate"
									viewport={{once: true}}
									variants={arrayLoopStaggerChildren}
								>
									<GoogleReviewsCard
										date={item?.time}
										textarea={item?.text}
										rating={item?.rating}
										name={item?.author_name}
										profilePhoto={item?.profile_photo_url}
									/>
								</motion.div>
							</Fragment>
						)
					)
				) : (
					<></>
				)}
			</motion.div>
		</>
	);
};

export default GoogleReviewsGrid;
