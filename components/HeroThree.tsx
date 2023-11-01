// Imports
import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {IHeroThree} from "@/types/components/index";
import {fadeInUp, initial} from "../animations/animations";

// Styling
import styles from "../styles/components/Hero.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const HeroThree: FC<IHeroThree> = ({
	title,
	paragraph,
	backgroundImage,
	backgroundVideoUrl,
	backgroundImageOrVideo,
}) => {
	const mainImageVideoTailwindcss: string = `object-cover object-center w-full h-full`;

	return (
		<>
			<div className={styles.hero}>
				<div className="flex flex-col bg-cover bg-center bg-no-repeat relative h-full min-h-[75vh]">
					{/* Background Video & Image */}
					<div
						className="absolute top-0 bottom-0 left-0 w-full h-full max-h-[75vh] z-[995] bg-center
					 bg-no-repeat bg-cover overflow-hidden"
						style={{backgroundImage: `url("${backgroundImage?.sourceUrl}")`}}
					>
						{/* Background Video */}
						<div className="absolute top-0 bottom-0 left-0 w-full h-full">
							<div className="hidden xl:block relative pb-[56.25%] overflow-hidden max-w-full h-auto bg-center bg-no-repeat bg-cover min-h-full xl:min-h-screen">
								<iframe
									allowFullScreen
									className={
										backgroundImageOrVideo === "Video"
											? "absolute top-0 left-0 border-none w-full h-full"
											: `hidden`
									}
									src={backgroundVideoUrl}
								/>
							</div>
						</div>

						{/* Image */}
						<Image
							priority={true}
							width={backgroundImage?.mediaDetails?.width}
							height={backgroundImage?.mediaDetails?.height}
							className={
								backgroundImageOrVideo === "Image"
									? `block ${mainImageVideoTailwindcss}`
									: ` hidden`
							}
							src={backgroundImage?.sourceUrl}
							alt={backgroundImage?.altText}
						/>
						<div className="absolute top-0 bottom-0 left-0 w-full h-full opacity-90 bg-gradient-to-b from-darkerRedTwo from-5% via-darkerRedTwo via-10% to-transparent to-100%" />
					</div>
					<div className="container relative flex flex-col items-center justify-center px-4 m-auto text-center z-[995]">
						<div className="max-w-3xl">
							<motion.h1
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="flex flex-col sm:block text-center mb-3 text-xl sm:text-3xl md:text-6xl lg:text-7xl text-white font-bold lg:leading-[4rem]"
							>
								{title}
							</motion.h1>
						</div>
						<div className="max-w-xl">
							<Paragraph
								content={paragraph}
								tailwindStyling="mb-6 py-6 text-white leading-normal sm:leading-[1.75rem] font-[500] text-base sm:text-medium text-center"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroThree;
