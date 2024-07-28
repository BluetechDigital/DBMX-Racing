// Imports
import {
	fadeIn,
	stagger,
	initial,
	initialTwo,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {ITitleContentImageCard} from "@/types/components";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const TitleContentImageCard: FC<ITitleContentImageCard> = ({
	title,
	subtitle,
	textTitle,
	paragraph,
	buttonLink,
	bulletPoints,
	paragraphColor,
	displayContentOption,
}) => {
	return (
		<>
			<motion.div
				initial={initial}
				variants={stagger}
				whileInView="animate"
				viewport={{once: true}}
				className={`flex flex-col items-center ${
					title && subtitle ? "pt-2 pb-10 lg:py-10" : "py-10"
				} px-4 lg:items-baseline`}
			>
				<motion.h3
					initial={initialTwo}
					whileInView={fadeIn}
					viewport={{once: true}}
					className={
						textTitle
							? "font-NeoGramTrial lg:max-w-xl mb-6 font-extrabold leading-normal text-center lg:text-left text-pureBlack text-lg"
							: "hidden"
					}
				>
					{textTitle}
				</motion.h3>
				<Paragraph
					content={paragraph}
					tailwindStyling={`lg:max-w-xl leading-relaxed text-lg text-center lg:text-left ${paragraphColor}`}
				/>
				<div
					className={
						bulletPoints
							? "lg:max-w-xl flex flex-col my-8 lg:my-6 gap-4"
							: "hidden"
					}
				>
					{bulletPoints?.length > 0 ? (
						bulletPoints?.map((item: any, index: number) => (
							<Fragment key={index}>
								<motion.div
									custom={index}
									initial={initial}
									whileInView="animate"
									viewport={{once: true}}
									variants={arrayLoopStaggerChildren}
								>
									<div className="flex items-center justify-start gap-3">
										<span>
											<svg
												fill="none"
												className="w-6 h-6"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
												<g
													id="SVGRepo_tracerCarrier"
													strokeLinecap="round"
													strokeLinejoin="round"
												></g>
												<g id="SVGRepo_iconCarrier">
													{" "}
													<path
														d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
														fill="#f7a500"
													></path>{" "}
												</g>
											</svg>
										</span>
										<span>
											<h4 className=" text-left text-pureBlack text-lg">
												{item?.points}
											</h4>
										</span>
									</div>
								</motion.div>
							</Fragment>
						))
					) : (
						<></>
					)}
				</div>
				<div className={buttonLink?.title ? "flex mt-6" : "hidden"}>
					<Link
						className="w-full"
						href={`${buttonLink?.url}`}
						target={buttonLink?.target}
						aria-label={`${buttonLink?.title}`}
					>
						<span
							className={`text-lg tracking-wide ${
								displayContentOption == "Left"
									? "buttonStyling-alt-four"
									: "buttonStyling"
							}`}
						>
							{buttonLink?.title}
						</span>
					</Link>
				</div>
			</motion.div>
		</>
	);
};

export default TitleContentImageCard;
