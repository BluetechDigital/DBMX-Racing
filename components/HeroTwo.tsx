// Imports
import {useState, FC} from "react";
import {motion} from "framer-motion";
import {IHeroTwo} from "@/types/components/index";
import {fadeInUp, initial} from "../animations/animations";

// Styling
import styles from "../styles/components/Hero.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const HeroTwo: FC<IHeroTwo> = ({title, paragraph, backgroundImage}) => {
	return (
		<>
			<div className={styles.hero}>
				<div
					className="flex flex-col bg-cover bg-center bg-no-repeat relative h-full min-h-[65vh]"
					style={{
						backgroundImage: `linear-gradient(0deg,rgb(78, 1, 4, 0.65),rgb(78, 1, 4, 0.65)),url("${backgroundImage}")`,
					}}
				>
					<div className="container relative flex flex-col items-center justify-center px-4 pt-0 m-auto text-center xl:pt-20 2xl:pt-0">
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
								tailwindStyling="py-6 text-white leading-[1.75rem] font-[500] text-base sm:text-medium text-center"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroTwo;
