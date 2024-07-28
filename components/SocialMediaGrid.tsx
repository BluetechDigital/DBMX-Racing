"use client";

// Imports
import {
	stagger,
	initial,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/Global";
import {ISocialMediaGrid} from "@/types/components";

// Styling
import styles from "@/styles/components/SocialMedia.module.scss";

// Components
import Title from "@/components/Elements/Title";

const SocialMediaGrid: FC<ISocialMediaGrid> = ({title}) => {
	const globalContext = useGlobalContext();

	return (
		<>
			<motion.div
				initial={initial}
				variants={stagger}
				whileInView="animate"
				viewport={{once: true}}
				className={
					styles.socialMediaGrid +
					" socialMediaGrid pt-10 bg-white bg-center bg-no-repeat bg-cover"
				}
				style={{
					backgroundImage: `linear-gradient(
						0deg,
						rgba(255, 255, 255, 1),
						rgba(255, 255, 255, 0.95),
						rgba(255, 255, 255, 0.85),
						rgba(255, 255, 255, 0.80)
					),url("/svg/background/grid-background-06.svg")`,
				}}
			>
				<Title
					content={title}
					tailwindStyling="title w-full mb-10 max-w-3xl mx-auto text-pureBlack uppercase font-VitroTrialHeavy italic text-center text-xl lg:text-4xl"
				/>

				<div className="grid grid-cols-2 md:grid-cols-5 gap-0 items-center justify-center">
					{globalContext?.instagramFeed?.length > 0 ? (
						globalContext?.instagramFeed
							?.slice(0, 10)
							?.map((item: any, index: number) => (
								<Fragment key={index}>
									<Link
										target="_blank"
										href={`${item?.permalink}`}
										aria-label={`Instagram Feed Post: ${item?.caption}`}
									>
										<motion.div
											custom={index}
											initial={initial}
											whileInView="animate"
											viewport={{once: true}}
											variants={arrayLoopStaggerChildren}
											className="group h-[250px] lg:h-[300px] 2xl:h-[375px] bg-cover bg-center bg-no-repeat"
											style={{
												backgroundImage: `url("${
													item?.media_type === "VIDEO"
														? item?.thumbnail_url
														: item?.media_url
												}")`,
											}}
										>
											<div className="relative h-full flex flex-col items-end justify-between p-2">
												<div className="flex items-start justify-end">
													<Image
														width={550}
														height={550}
														alt="Instagram Posts Icon"
														src={
															item?.media_type === "VIDEO"
																? "/svg/Instagram-reels.svg"
																: "/svg/Instagram-posts.svg"
														}
														className={`${
															item?.media_type === "VIDEO"
																? "w-8 h-8"
																: "w-7 h-7"
														} object-contain object-center transition-all duration-500 ease-in-out`}
													/>
												</div>
											</div>
										</motion.div>
									</Link>
								</Fragment>
							))
					) : (
						<></>
					)}
				</div>
			</motion.div>
		</>
	);
};

export default SocialMediaGrid;
