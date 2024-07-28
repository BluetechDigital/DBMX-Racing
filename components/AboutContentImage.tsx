// Imports
import {
	initial,
	fadeInUp,
	slideInRightFinish,
	slideInLeftInitial,
	slideInRightInitial,
} from "@/animations/animations";
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {IAboutContentImage} from "@/types/components/index";

// Styling
import styles from "@/styles/components/AboutContentImage.module.scss";

// Components
import Title from "@/components/Elements/Title";
import Paragraph from "@/components/Elements/Paragraph";

const AboutContentImage: FC<IAboutContentImage> = ({
	title,
	mainCard,
	paragraph,
	buttonLink,
}) => {
	return (
		<div
			className={
				styles.aboutContentImage +
				" aboutContentImage py-10 px-4 lg:py-16 overflow-hidden"
			}
		>
			<div className="lg:container mx-auto flex flex-col-reverse lg:flex-row gap-6 lg:gap-10">
				<motion.div
					viewport={{once: true}}
					initial={slideInLeftInitial}
					whileInView={slideInRightFinish}
					className="relative bg-grey hover:bg-primary-dark transition-all ease-in-out duration-500 flex flex-col items-center justify-between p-4 min-h-[400px] bg-blend-multiply bg-center bg-cover bg-no-repeat"
					style={{
						backgroundImage: `url(${mainCard?.backgroundImage?.sourceUrl})`,
					}}
				>
					<motion.h4
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="text-white font-VitroTrialHeavy uppercase italic font-semibold text-xl text-center lg:text-left"
					>
						{mainCard?.subtitle}
					</motion.h4>
					<div>
						<motion.h3
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="text-white font-extrabold leading-[1.75rem] sm:leading-snug text-2xl italic mb-4 uppercase text-center xl:text-left font-VitroTrialHeavy"
						>
							{mainCard?.title}
						</motion.h3>
						<div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-end md:gap-4 lg:space-x-0 xl:space-x-4 space-y-4 md:space-y-0 lg:space-y-4 xl:space-y-0">
							<Link
								href={`${mainCard?.buttonLink?.url}`}
								target={mainCard?.buttonLink?.target}
								aria-label={`${mainCard?.buttonLink?.title}`}
								className={
									mainCard?.buttonLink?.url
										? "w-fit mx-auto lg:mx-0 mt-4 py-4 px-6 text-lg hover:text-white buttonStyling-alt-four"
										: "hidden"
								}
							>
								{mainCard?.buttonLink?.title}
							</Link>
						</div>
					</div>
				</motion.div>

				<div className="w-full lg:w-[85%] flex flex-col gap-8">
					<Title
						content={title}
						tailwindStyling="title leading-relaxed uppercase font-VitroTrialHeavy italic text-pureBlack text-center lg:text-left font-semibold text-2xl lg:text-4xl"
					/>
					<Paragraph
						content={paragraph}
						tailwindStyling="text-lg text-pureBlack text-center lg:text-left"
					/>
					<motion.div
						viewport={{once: true}}
						initial={slideInRightInitial}
						whileInView={slideInRightFinish}
						className={
							buttonLink?.url
								? "w-fit mx-auto lg:mx-0 mt-4 mb-6 lg:mt-2 lg:mb-2"
								: "hidden"
						}
					>
						<Link
							href={`${buttonLink?.url}`}
							target={buttonLink?.target}
							aria-label={`${buttonLink?.title}`}
						>
							<span className="text-lg buttonStyling-alt tracking-wide">
								{buttonLink?.title}
							</span>
						</Link>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default AboutContentImage;
