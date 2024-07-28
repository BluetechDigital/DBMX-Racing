// Imports
import {
	initial,
	fadeInUp,
	slideInLeftInitial,
	slideInRightFinish,
	slideInRightInitial,
} from "@/animations/animations";
import {FC} from "react";
import {motion} from "framer-motion";
import {ITitleContentImage} from "@/types/components";

// Components
import TitleContentImageCard from "@/components/Cards/TitleContentImageCard";

const TitleContentImage: FC<ITitleContentImage> = ({
	title,
	image,
	subtitle,
	textTitle,
	paragraph,
	sectionId,
	buttonLink,
	bulletPoints,
	displayContentOption,
	displayImageClipPath,
	displayParagraphColor,
	displayBackgroundColor,
}) => {
	let backgroundColor;
	let paragraphColor;

	switch (displayBackgroundColor) {
		case "White":
			backgroundColor = "bg-white";
			break;
		case "Grey":
			backgroundColor = "bg-lightGreyTwo";
			break;
		default:
			backgroundColor = "bg-white";
			break;
	}

	switch (displayParagraphColor) {
		case "Black":
			paragraphColor = "text-pureBlack";
			break;
		case "Grey":
			paragraphColor = "text-darkGrey";
			break;
		default:
			paragraphColor = "text-pureBlack";
			break;
	}
	return (
		<>
			<div
				id={`#${sectionId}`}
				className={`titleContentImage py-12 px-4 ${backgroundColor} overflow-hidden`}
			>
				<div className="lg:container mx-auto p-0">
					<div className={title ? "block py-4" : "hidden"}>
						<motion.h4
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="font-VitroTrialHeavy uppercase italic text-center lg:text-left text-base text-accent-default"
						>
							{subtitle}
						</motion.h4>
						<motion.h3
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="my-2 lg:max-w-3xl leading-snug lg:leading-[3rem] font-VitroTrialHeavy uppercase italic text-pureBlack text-center lg:text-left font-semibold text-lg sm:text-xl lg:text-6xl"
						>
							{title}
						</motion.h3>
					</div>
					<div
						className={`flex ${
							displayContentOption == "Right" ? "flex-col-reverse" : "flex-col"
						} gap-4 lg:gap-x-16 px-4 lg:px-0 mx-auto items-center justify-center lg:flex-row overflow-hidden`}
					>
						<motion.div
							viewport={{once: true}}
							initial={slideInLeftInitial}
							whileInView={slideInRightFinish}
							className={`${
								displayContentOption == "Right"
									? "bg-center bg-no-repeat bg-cover w-full lg:w-1/2 h-[350px] lg:h-[500px] xl:h-[600px]"
									: "hidden"
							}`}
							style={{
								backgroundImage: `url(${image?.sourceUrl})`,
								clipPath: `polygon(${
									displayImageClipPath && displayContentOption == "Right"
										? "25% 0%, 100% 0%, 75% 100%, 0% 100%"
										: "0%"
								})`,
							}}
						/>

						{displayContentOption == "Left" ? (
							<>
								<motion.div
									viewport={{once: true}}
									initial={slideInLeftInitial}
									whileInView={slideInRightFinish}
									className={`${
										displayContentOption == "Left"
											? "lg:items-end"
											: "lg:items-start"
									} lg:w-1/2 h-full`}
								>
									<TitleContentImageCard
										title={title}
										subtitle={subtitle}
										textTitle={textTitle}
										paragraph={paragraph}
										buttonLink={buttonLink}
										bulletPoints={bulletPoints}
										paragraphColor={paragraphColor}
										displayContentOption={displayContentOption}
									/>
								</motion.div>
							</>
						) : (
							<>
								<motion.div
									viewport={{once: true}}
									initial={slideInRightInitial}
									whileInView={slideInRightFinish}
									className={`${
										displayContentOption == "Right"
											? "lg:items-end"
											: "lg:items-start"
									} lg:w-1/2 h-full`}
								>
									<TitleContentImageCard
										title={title}
										subtitle={subtitle}
										textTitle={textTitle}
										paragraph={paragraph}
										buttonLink={buttonLink}
										bulletPoints={bulletPoints}
										paragraphColor={paragraphColor}
										displayContentOption={displayContentOption}
									/>
								</motion.div>
							</>
						)}

						<motion.div
							viewport={{once: true}}
							initial={slideInRightInitial}
							whileInView={slideInRightFinish}
							className={`${
								displayContentOption == "Left"
									? "bg-center bg-no-repeat bg-cover w-full lg:w-1/2 h-[350px] lg:h-[500px] xl:h-[600px]"
									: "hidden"
							}`}
							style={{
								backgroundImage: `url(${image?.sourceUrl})`,
								clipPath: `polygon(${
									displayImageClipPath && displayContentOption == "Left"
										? "25% 0%, 100% 0%, 75% 100%, 0% 100%"
										: "0%"
								})`,
							}}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default TitleContentImage;
