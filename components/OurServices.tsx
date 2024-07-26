// Imports
import {
	initial,
	stagger,
	fadeInUp,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IOurServices} from "@/types/components/index";

// Styling
import styles from "@/styles/components/OurServices.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import OurServicesCard from "@/components/Cards/OurServicesCard";

const OurServices: FC<IOurServices> = ({
	title,
	subtitle,
	paragraph,
	buttonLink,
	servicesGrid,
}) => {
	return (
		<>
			<div
				className={
					styles.ourServices +
					" py-12 px-4 bg-white bg-center bg-no-repeat bg-cover"
				}
				style={{
					backgroundImage: `url("/svg/background/polygon-scatter-haikei-grey.svg")`,
				}}
			>
				<div className="lg:container m-auto flex flex-col items-center gap-12 lg:gap-8">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full"
					>
						<div className="w-full lg:w-1/2">
							<motion.h4
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="uppercase font-VitroTrialHeavy italic text-center lg:text-left text-base text-primary-default"
							>
								{subtitle}
							</motion.h4>
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="my-3 max-w-xl mx-auto lg:mx-0 text-pureBlack uppercase font-VitroTrialHeavy italic text-center lg:text-left text-xl lg:text-4xl"
							>
								{title}
							</motion.h3>
							<Paragraph
								content={paragraph}
								tailwindStyling="max-w-full lg:max-w-lg text-pureBlack text-lg text-center lg:text-left"
							/>
							<Link
								href={`${buttonLink?.url}`}
								target={buttonLink?.target}
								className={`${
									buttonLink?.url
										? "flex items-center justify-center lg:justify-start my-4"
										: "hidden"
								}`}
							>
								<span className="w-fit mx-auto lg:mx-0 text-lg buttonStyling-alt-four">
									{buttonLink?.title}
								</span>
							</Link>
						</div>
						<div className="grid grid-cols-1 gap-12 lg:gap-6 w-full lg:w-1/2">
							{servicesGrid?.length > 0 ? (
								servicesGrid?.slice(0, 1)?.map((item: any, index: number) => (
									<Fragment key={index}>
										<motion.div
											custom={index}
											initial={initial}
											whileInView="animate"
											viewport={{once: true}}
											variants={arrayLoopStaggerChildren}
										>
											<OurServicesCard
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
					</motion.div>
					<div className="grid grid-cols-1 lg:grid-cols-3 p-0 gap-12 lg:gap-6 w-full mt-6">
						{servicesGrid?.length > 0 ? (
							servicesGrid?.slice(1)?.map((item: any, index: number) => (
								<Fragment key={index}>
									<motion.div
										custom={index}
										initial={initial}
										whileInView="animate"
										viewport={{once: true}}
										variants={arrayLoopStaggerChildren}
									>
										<OurServicesCard
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
			</div>
		</>
	);
};

export default OurServices;
