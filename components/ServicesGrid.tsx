// Imports
import {
	stagger,
	initial,
	fadeInUp,
	slideInRightFinish,
	slideInLeftInitial,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IServicesGrid} from "@/types/components/index";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import ServicesGridCard from "@/components/Cards/ServicesGridCard";

const ServicesGrid: FC<IServicesGrid> = ({
	title,
	mainCard,
	subtitle,
	paragraph,
	buttonLink,
	servicesGrid,
}) => {
	return (
		<>
			<div
				className="mx-auto relative bg-white bg-center bg-no-repeat bg-cover"
				style={{
					backgroundImage: `linear-gradient(
						0deg,
						rgba(255, 255, 255, 1),
						rgba(255, 255, 255, 0.95),
						rgba(255, 255, 255, 0.95),
						rgba(255, 255, 255, 0.95),
						rgba(255, 255, 255, 0.85),
						rgba(255, 255, 255, 0.80)
					),url("/svg/background/grid-background-06.svg")`,
				}}
			>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="pt-24 pb-10 px-4 lg:container mx-auto flex flex-col lg:flex-row justify-between gap-4"
				>
					<div className="w-full lg:w-1/2 max-w-xl">
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
							className="max-w-2xl mt-6 mb-2 uppercase font-VitroTrialHeavy italic text-pureBlack text-center lg:text-left leading-relaxed text-2xl lg:text-4xl"
						>
							{title}
						</motion.h3>
					</div>
					<div className="w-full lg:w-1/2 max-w-xl">
						<Paragraph
							content={paragraph}
							tailwindStyling="max-w-3xl my-4 text-pureBlack text-center lg:text-left text-lg"
						/>
						<Link
							href={`${buttonLink?.url}`}
							target={buttonLink?.target}
							aria-label={`${buttonLink?.title}`}
							className={
								buttonLink?.url
									? "flex items-center justify-center lg:justify-start"
									: "hidden"
							}
						>
							<span className="text-lg buttonStyling-alt">
								{buttonLink?.title}
							</span>
						</Link>
					</div>
				</motion.div>
				<div className="group w-full h-full">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="w-full"
					>
						<div className="lg:container mx-auto py-12 px-4 flex flex-col-reverse lg:flex-row gap-6 lg:gap-10">
							<motion.div
								viewport={{once: true}}
								initial={slideInLeftInitial}
								whileInView={slideInRightFinish}
								className="relative bg-grey hover:bg-primary-dark transition-all ease-in-out duration-500 flex flex-col items-center justify-between p-4 min-h-[400px] bg-blend-multiply bg-center bg-cover bg-no-repeat"
								style={{
									backgroundImage: `url("${mainCard?.backgroundImage?.sourceUrl}")`,
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
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-between">
								{servicesGrid?.length > 0 ? (
									servicesGrid?.map((item: any, index: number) => (
										<Fragment key={index}>
											<motion.div
												custom={index}
												initial={initial}
												whileInView="animate"
												viewport={{once: true}}
												variants={arrayLoopStaggerChildren}
											>
												<ServicesGridCard
													link={item?.link}
													title={item?.title}
													paragraph={item?.paragraph}
													backgroundImage={item?.backgroundImage}
												/>
											</motion.div>
										</Fragment>
									))
								) : (
									<></>
								)}
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default ServicesGrid;
