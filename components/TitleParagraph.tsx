// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {ITitleParagraph} from "@/types/components";
import {fadeInUp, initial} from "@/animations/animations";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const TitleParagraph: FC<ITitleParagraph> = ({
	title,
	paragraph,
	displayParagraph,
}) => {
	return (
		<div className="bg-white lg:container p-0 mx-auto flex flex-col px-4">
			<motion.div
				initial={initial}
				whileInView={fadeInUp}
				viewport={{once: true}}
				className="py-10 px-4"
			>
				<motion.h2
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className={
						title
							? "mb-10 text-center font-semibold leading-relaxed text-lg lg:text-3xl text-pureBlack"
							: "hidden"
					}
				>
					{title}
				</motion.h2>
				<Paragraph
					content={paragraph}
					tailwindStyling={
						paragraph
							? `lg:max-w-6xl mx-auto mb-10 text-pureBlack leading-[1.75rem] text-paragraph text-center ${
									displayParagraph ? "lg:text-center" : "lg:text-left"
							  }`
							: "hidden"
					}
				/>
			</motion.div>
		</div>
	);
};

export default TitleParagraph;
