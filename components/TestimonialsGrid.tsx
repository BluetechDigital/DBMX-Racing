// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {ITestimonialsGrid} from "@/types/components/index";
import {fadeInUp, initial, stagger} from "@/animations/animations";

// Styling
import styles from "@/styles/components/Testimonials.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import Pagination from "@/components/Elements/Pagination";

const TestimonialsGrid: FC<ITestimonialsGrid> = ({
	title,
	subtitle,
	paragraph,
}) => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div
				className={
					styles.testimonials +
					` py-24 px-4 bg-white bg-cover bg-no-repeat bg-center`
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
				<div className="lg:container mx-auto flex flex-col items-center gap-6">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full"
					>
						<div>
							<motion.h4
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="tracking-wide uppercase font-VitroTrialHeavy italic text-accent-default text-lg text-center lg:text-left"
							>
								{subtitle}
							</motion.h4>
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="max-w-2xl mt-6 mb-2 uppercase font-VitroTrialHeavy italic text-pureBlack text-center lg:text-left leading-tight text-2xl lg:text-4xl"
							>
								{title}
							</motion.h3>
						</div>
						<Paragraph
							content={paragraph}
							tailwindStyling="max-w-3xl my-4 text-pureBlack text-center lg:text-left text-lg"
						/>
					</motion.div>
					<Pagination
						contentType="TestimonialsCard"
						numberOfItemsRenderedPerPage={12}
						contentArray={globalContext?.testimonials}
						tailwindStyling="w-full py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
					/>
				</div>
			</div>
		</>
	);
};

export default TestimonialsGrid;
