// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {IServicesGridCard} from "@/types/components";
import {initial, fadeInUp} from "@/animations/animations";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const ServicesGridCard: FC<IServicesGridCard> = ({
	link,
	title,
	paragraph,
	backgroundImage,
}) => {
	return (
		<>
			<Link
				href={`${link?.url}`}
				target={link?.target}
				aria-label={`${link?.title}`}
			>
				<div className="h-full min-h-[350px] md:min-h-[300px] lg:min-h-[400px] bg-lightGrey group-hover/card:bg-primary-dark p-6 flex flex-col justify-between transition-all duration-500 ease-in-out">
					<motion.h4
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="font-VitroTrialHeavy uppercase text-base text-center md:text-left text-primary-default group-hover/card:text-accent-default transition-all duration-500 ease-in-out"
					>
						{title}
					</motion.h4>
					<motion.h3
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="font-VitroTrialHeavy uppercase italic mt-4 text-xl leading-tight text-pureBlack group-hover/card:text-white transition-all duration-500 ease-in-out"
					>
						{title}
					</motion.h3>
					<Paragraph
						content={paragraph}
						tailwindStyling="max-w-3xl my-4 text-center lg:text-left text-paragraph text-pureBlack group-hover/card:text-white transition-all duration-500 ease-in-out"
					/>
					<svg
						width="31.905"
						height="24.247"
						viewBox="0 0 31.905 24.247"
						xmlns="http://www.w3.org/2000/svg"
						className="group-hover/card:translate-x-2 group-hover/card:rotate-[-45deg] transition-all duration-500 ease-in-out self-end"
					>
						<g
							id="Group_14"
							data-name="Group 14"
							transform="translate(-443.5 -2073.925)"
						>
							<line
								id="Line_2"
								x2="30.063"
								fill="none"
								strokeWidth="3"
								data-name="Line 2"
								transform="translate(443.5 2086.054)"
								className="stroke-pureBlack group-hover/card:stroke-white transition-all duration-500 ease-in-out"
							/>
							<path
								fill="none"
								id="Path_49"
								strokeWidth="3"
								data-name="Path 49"
								transform="translate(-1.047 -15.019)"
								d="M463.015,2090.015l11.306,11.082L463.3,2112.131"
								className="stroke-pureBlack group-hover/card:stroke-white transition-all duration-500 ease-in-out"
							/>
						</g>
					</svg>
				</div>
			</Link>
		</>
	);
};

export default ServicesGridCard;
