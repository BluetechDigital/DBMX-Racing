// Imports
import {
	stagger,
	initial,
	fadeInUp,
	slideInRightFinish,
	slideInRightInitial,
} from "@/animations/animations";
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IHero} from "@/types/components/index";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import RenderStars from "@/components/Elements/RenderStars";

const Hero: FC<IHero> = ({
	title,
	ctaLink,
	videoUrl,
	paragraph,
	buttonLink,
	displayVideo,
	ctaParagraph,
	buttonLinkTwo,
	backgroundImage,
}) => {
	return (
		<>
			<div
				className="bg-white pt-28 h-full min-w-screen lg:h-[75vh] relative bg-center bg-no-repeat bg-cover"
				style={{backgroundImage: `url("${backgroundImage?.sourceUrl}")`}}
			>
				{/* Background Video */}
				<div className="hidden lg:block lg:absolute top-0 bottom-0 left-0 w-full h-full overflow-hidden">
					<div className="hidden xl:block relative h-[75vh] pb-[56.25%] bg-center bg-no-repeat bg-cover">
						<iframe
							allowFullScreen
							className={
								videoUrl && displayVideo
									? "absolute top-0 left-0 border-none w-full h-full overflow-hidden"
									: `hidden`
							}
							src={videoUrl}
						/>
					</div>
				</div>
				<div className="h-full lg:relative z-10 flex flex-col xl:flex-row bg-pureBlack/50 lg:bg-pureBlack/20">
					<div className="lg:container py-20 px-4 xl:py-0 mx-auto">
						<div className="h-full flex flex-col items-baseline justify-center px-4 xl:px-0">
							<motion.h1
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className="font-VitroTrialHeavy italic xl:max-w-3xl flex flex-col text-center xl:text-left mb-6 text-6xl lg:text-7xl 2xl:text-8xl uppercase text-white font-bold leading-tight"
							>
								{title}
							</motion.h1>
							<div className="xl:max-w-2xl">
								<Paragraph
									content={paragraph}
									tailwindStyling="mb-6 text-white leading-[1.75rem] font-normal font-NeoGramTrial text-lg lg:text-xl text-center xl:text-left"
								/>
								<motion.div
									initial={initial}
									variants={stagger}
									whileInView="animate"
									viewport={{once: true}}
									className="flex flex-col items-center justify-center gap-4 lg:flex-row sm:justify-start"
								>
									<Link
										href={`${buttonLink?.url}`}
										target={buttonLink?.target}
										aria-label={`${buttonLink?.title}`}
										className={buttonLink?.url ? "block" : "hidden"}
									>
										<motion.button
											initial={initial}
											whileInView={fadeInUp}
											viewport={{once: true}}
											className="block buttonStyling-white font-semibold text-medium w-fit sm:mx-0"
										>
											{buttonLink?.title}
										</motion.button>
									</Link>
									<Link
										href={`${buttonLinkTwo?.url}`}
										target={buttonLinkTwo?.target}
										aria-label={`${buttonLinkTwo?.title}`}
										className={buttonLink?.url ? "block" : "hidden"}
									>
										<motion.button
											initial={initial}
											whileInView={fadeInUp}
											viewport={{once: true}}
											className="buttonStyling-alt-two font-semibold text-medium w-fit sm:mx-0"
										>
											{buttonLinkTwo?.title}
										</motion.button>
									</Link>
								</motion.div>
							</div>
						</div>
					</div>
					<div className="w-full xl:w-fit xl:max-w-sm xl:absolute right-0 bottom-0 flex flex-col items-center justify-end p-0 xl:gap-4 h-fit">
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className=" overflow-hidden bg-lightGrey/25 w-full py-3 px-4 grid sm:grid-cols-2 items-center justify-center lg:justify-start gap-6"
						>
							<div className="flex items-center justify-center xl:justify-start gap-3">
								<Image
									width={1000}
									height={1000}
									alt={`Facebook reviews logo`}
									src="/img/facebook-logo.png"
									className="my-auto lg:mx-0 w-10 h-10 object-cover object-center"
								/>
								<div className="flex flex-col gap-[7.5px]">
									<span className="flex items-center justify-start gap-[1px]">
										<RenderStars rating={5} color="White" />
									</span>
									<span className="uppercase text-tiny font-NeoGramTrial text-white">
										4.8 Rating
									</span>
								</div>
							</div>
							<div className="flex items-center justify-center xl:justify-start gap-3">
								<Image
									width={1000}
									height={1000}
									alt={`Google reviews logo`}
									src="/svg/google-tile-logo.svg"
									className="bg-white rounded-full my-auto lg:mx-0 p-1 w-10 h-10 object-cover object-center"
								/>
								<div className="flex flex-col gap-[7.5px]">
									<span className="flex items-center justify-start gap-[1px]">
										<RenderStars rating={5} color="White" />
									</span>
									<span className="uppercase text-tiny font-NeoGramTrial text-white">
										4.5 Rating
									</span>
								</div>
							</div>
						</motion.div>
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="py-6 px-8 w-full bg-primary-dark"
						>
							<Link
								href={`${ctaLink?.url}`}
								target={ctaLink?.target}
								aria-label={`${ctaLink?.title}`}
								className={`${
									ctaLink?.url ? "w-full my-2" : "hidden"
								} block md:hidden`}
							>
								<div className="w-full p-4 lg:px-6 text-lg buttonStyling-alt-three">
									{ctaLink?.title}
								</div>
							</Link>
							<div className="text-left xl:text-center">
								<Link
									href={`${ctaLink?.url}`}
									target={ctaLink?.target}
									aria-label={`${ctaParagraph} Form button link`}
									className="flex items-center justify-between gap-4 font-VitroTrialHeavy uppercase leading-relaxed text-white tracking-wider text-tiny md:text-base lg:text-medium"
								>
									<span style={{wordSpacing: "1px"}}>{ctaParagraph}</span>
									<span className="group xl:hidden flex items-center justify-end px-2 h-12 w-fit lg:h-16 rounded-full bg-accent-default hover:bg-primary-default transition-all duration-500 ease-in-out">
										<svg
											className="w-8 h-8 p-1 rotate-[-45deg] group-hover:rotate-[0deg] transition-all duration-500 ease-in-out"
											xmlns="http://www.w3.org/2000/svg"
											width="31.905"
											height="24.247"
											viewBox="0 0 31.905 24.247"
										>
											<g
												id="Group_14"
												data-name="Group 14"
												transform="translate(-443.5 -2073.925)"
											>
												<line
													id="Line_2"
													data-name="Line 2"
													x2="30.063"
													transform="translate(443.5 2086.054)"
													fill="none"
													stroke="#ffffff"
													strokeWidth="3"
												/>
												<path
													id="Path_49"
													data-name="Path 49"
													d="M463.015,2090.015l11.306,11.082L463.3,2112.131"
													transform="translate(-1.047 -15.019)"
													fill="none"
													stroke="#ffffff"
													strokeWidth="3"
												/>
											</g>
										</svg>
									</span>
								</Link>
								<Link
									href={`${ctaLink?.url}`}
									target={ctaLink?.target}
									aria-label={`${ctaLink?.title}`}
									className={`hidden xl:block w-full mx-auto mt-2 text-medium buttonStyling-alt-two`}
								>
									{ctaLink?.title}
								</Link>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
