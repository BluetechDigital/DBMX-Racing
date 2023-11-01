// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {IHero} from "@/types/components/index";
import {fadeInUp, initial, stagger} from "../animations/animations";

// Styling
import styles from "../styles/components/Hero.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const Hero: FC<IHero> = ({
	title,
	paragraph,
	buttonLink,
	buttonLinkTwo,
	backgroundImage,
	backgroundVideoUrl,
}) => {
	return (
		<>
			<div className={styles.hero}>
				<div
					className="relative flex flex-col h-full min-h-screen bg-center bg-no-repeat bg-cover"
					style={{backgroundImage: `url("${backgroundImage}")`}}
				>
					{/* Background Video */}
					<div className="absolute top-0 bottom-0 left-0 w-full h-full overflow-hidden">
						<div className="hidden xl:block relative pb-[56.25%] overflow-hidden max-w-full h-auto bg-center bg-no-repeat bg-cover min-h-full xl:min-h-screen">
							<iframe
								allowFullScreen
								className={
									backgroundVideoUrl
										? "absolute top-0 left-0 border-none w-full h-full"
										: `hidden`
								}
								src={backgroundVideoUrl}
							/>
						</div>
						<div className="absolute top-0 h-screen bottom-0 left-0 w-full opacity-90 bg-gradient-to-b from-darkerRedTwo from-5% via-darkerRedTwo via-10% to-transparent to-100%" />
					</div>
					<div className="container relative flex flex-col items-baseline justify-center px-4 m-auto text-center sm:text-left">
						<div className="max-w-3xl">
							<h1 className="flex flex-col sm:block text-left mb-3 text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold leading-[2rem] sm:leading-[3rem] lg:leading-[4rem]">
								{title}
							</h1>
						</div>
						<div className="max-w-xl">
							<Paragraph
								content={paragraph}
								tailwindStyling="mb-6 py-6 text-white leading-[1.75rem] font-[500] text-base sm:text-medium text-center sm:text-left"
							/>
							<motion.div
								initial={initial}
								whileInView={stagger}
								viewport={{once: true}}
								className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start"
							>
								<Link
									href={buttonLink?.url ? buttonLink?.url : `/`}
									target={buttonLink?.target}
								>
									<motion.button
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className={
											buttonLink?.url
												? `block px-6 py-3 font-semibold tracking-widest text-base transition duration-200 w-fit sm:mx-0 hover:bg-darkerRed text-black hover:text-white bg-white rounded-t-lg rounded-l-lg`
												: `hidden`
										}
									>
										{buttonLink?.title}
									</motion.button>
								</Link>
								<Link
									href={buttonLinkTwo?.url ? buttonLinkTwo?.url : `/`}
									target={buttonLinkTwo?.target}
								>
									<motion.button
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className={
											buttonLink?.url
												? `block px-6 py-3 font-semibold tracking-widest text-base text-white transition duration-200 w-fit sm:mx-0 hover:bg-darkerRed bg-red rounded-t-lg rounded-l-lg`
												: `hidden`
										}
									>
										{buttonLinkTwo?.title}
									</motion.button>
								</Link>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
