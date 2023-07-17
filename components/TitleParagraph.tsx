// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {ITitleParagraph} from "@/types/components/index";
import {fadeInUp, initial} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";

const TitleParagraph: FC<ITitleParagraph> = ({title, paragraph}) => {
	return (
		<section className="bg-white">
			<div className="container p-0 mx-auto">
				<div className="flex flex-col px-4">
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="py-16 sm:py-20 md:py-28"
					>
						<h2 className="max-w-3xl mx-auto text-black text-center tracking-normal leading-normal sm:leading-[2.75rem] font-[900] text-lg sm:text-3xl md:text-4xl">
							{title}
						</h2>
						<Paragraph
							content={paragraph}
							tailwindStyling="w-full lg:max-w-[50rem] mx-auto mt-4 px-4 py-8 text-black text-left text-base"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default TitleParagraph;
