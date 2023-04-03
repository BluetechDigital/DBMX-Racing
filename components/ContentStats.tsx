import {FC} from "react";
import {motion} from "framer-motion";
import Paragraph from "./Elements/Paragraph";
import {fadeInUp, stagger} from "../animations/animations";

interface IProps {
	title: string;
	paragraph: string;
	statsOne: {
		title: string;
		subtitle: string;
		paragraph: string;
	};
	statsTwo: {
		title: string;
		subtitle: string;
		paragraph: string;
	};
}

const ContentStats: FC<IProps> = ({title, statsOne, statsTwo, paragraph}) => {
	return (
		<section
			className="py-20 overflow-hidden bg-center bg-no-repeat bg-cover bg-darkerRedTwo"
			style={{
				backgroundImage: `url("/svg/stacked-peaks.svg")`,
			}}
		>
			<div className="container px-0 mx-auto">
				<div className="flex flex-col items-center justify-between px-8 gap-x-24 lg:flex-row">
					<div className="flex flex-col items-center justify-center">
						<motion.h2
							variants={fadeInUp}
							className="text-white text-center tracking-normal leading-[2.75rem] font-semibold text-3xl md:text-4xl"
						>
							{title}
						</motion.h2>
						<Paragraph
							content={paragraph}
							tailwindStyling="w-full lg:max-w-2xl mx-auto mt-4 py-8 text-white text-center sm:text-left text-medium"
						/>
					</div>
					<motion.div
						variants={stagger}
						className="flex flex-col items-center justify-center lg:flex-row"
					>
						<motion.div variants={fadeInUp} className="w-full lg:w-1/2">
							<div className="p-4 mx-auto text-center lg:max-w-lg lg:px-8 lg:py-4">
								<h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl text-goldPrime">
									{statsOne?.subtitle}
								</h2>
								<h3 className="mb-3.5 text-center text-xl text-goldPrime font-bold">
									{statsOne?.title}
								</h3>
								<Paragraph
									content={statsOne?.paragraph}
									tailwindStyling="w-full lg:max-w-2xl mx-auto mt-4 py-8 text-white text-center sm:text-left text-medium"
								/>
							</div>
						</motion.div>
						<motion.div variants={fadeInUp} className="w-full lg:w-1/2">
							<div className="p-4 mx-auto lg:px-8 lg:py-4 lg:max-w-lg">
								<h2 className="mb-6 text-3xl font-bold text-center md:text-4xl text-goldPrime">
									{statsTwo?.subtitle}
								</h2>
								<h3 className="mb-3.5 text-center text-xl text-goldPrime font-bold">
									{statsTwo?.title}
								</h3>
								<Paragraph
									content={statsTwo?.paragraph}
									tailwindStyling="w-full lg:max-w-2xl mx-auto mt-4 py-8 text-white text-center sm:text-left text-medium"
								/>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default ContentStats;
