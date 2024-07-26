// Imports
import {
	initial,
	stagger,
	slideInLeftInitial,
	slideInRightFinish,
	slideInRightInitial,
} from "@/animations/animations";
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {ICtaTwo} from "@/types/components/index";

// Styling
import styles from "@/styles/components/CTA.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const CTATwo: FC<ICtaTwo> = ({paragraph, buttonLink}) => {
	return (
		<>
			<motion.div
				initial={initial}
				variants={stagger}
				whileInView="animate"
				viewport={{once: true}}
				className={styles.ctaTwo + " ctaTwo flex flex-wrap justify-between"}
			>
				<motion.div
					viewport={{once: true}}
					initial={slideInLeftInitial}
					whileInView={slideInRightFinish}
					className={
						styles.paragraphClipPath +
						" bg-primary-darker py-2 px-16 w-full lg:w-2/5"
					}
				>
					<Paragraph
						content={paragraph}
						tailwindStyling="paragraph font-VitroTrialHeavy italic uppercase leading-relaxed text-white leading-[1.75rem] text-center lg:text-left text-xl"
					/>
				</motion.div>
				<Link
					href={`${buttonLink?.url}`}
					target={buttonLink?.target}
					className={`${buttonLink?.url ? "block w-full lg:w-fit" : "hidden"}`}
				>
					<motion.div
						viewport={{once: true}}
						initial={slideInRightInitial}
						whileInView={slideInRightFinish}
						className={
							styles.ctaTwoButtonLink +
							" flex items-center justify-center h-full w-full lg:w-auto mx-auto lg:mx-0 py-4 lg:py-8 px-4 lg:pl-12 lg:pr-16 text-center lg:text-left cursor-pointer buttonStyling"
						}
					>
						<span className="tracking-[0.10rem] text-lg">
							{buttonLink?.title}
						</span>
					</motion.div>
				</Link>
			</motion.div>
		</>
	);
};

export default CTATwo;
