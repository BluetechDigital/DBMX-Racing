// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {ICta} from "@/types/components/index";
import fadeInUp, {initial, stagger} from "@/animations/animations";

// Styling
import styles from "@/styles/components/CTA.module.scss";

// Components
import Title from "@/components/Elements/Title";
import RenderStars from "@/components/Elements/RenderStars";

const CTA: FC<ICta> = ({title, buttonLink, backgroundImage}) => {
	return (
		<>
			<div
				className={
					styles.cta + ` cta p-4 lg:py-12 bg-center bg-no-repeat bg-cover`
				}
				style={{
					backgroundImage: `linear-gradient(
								0deg,
								rgb(0, 0, 0, 0.4),
								rgba(0, 0, 0, 0.4),
								rgba(0, 0, 0, 0.4)
							),url("${backgroundImage?.sourceUrl}")`,
				}}
			>
				<div className="lg:container mx-auto px-0">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className={
							title
								? "w-full flex flex-col lg:flex-row items-center lg:items-end justify-between gap-10 lg:gap-3"
								: "hidden"
						}
					>
						<div className="w-full lg:w-1/2">
							<Title
								content={title}
								tailwindStyling="title lg:max-w-2xl mb-2 uppercase font-VitroTrialHeavy italic text-white text-center lg:text-left leading-relaxed text-2xl lg:text-4xl"
							/>
							<motion.div
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className="w-fit max-w-lg lg:max-w-md xl:max-w-full mx-auto lg:mx-0 py-3 px-4 bg-lightGreyTwo/30 grid sm:grid-cols-2 items-center justify-center lg:justify-start gap-6"
							>
								<div className="flex items-center justify-center lg:justify-start gap-3">
									<Image
										width={1000}
										height={1000}
										alt={`Facebook reviews logo`}
										src="/img/facebook-logo.png"
										className="my-auto lg:mx-0 w-10 h-10 object-cover object-center"
									/>
									<div className="flex flex-col gap-1">
										<div className="flex items-center justify-start gap-1">
											<RenderStars rating={5} color="White" />
										</div>
										<span className="uppercase text-tiny font-NeoGramTrial text-white">
											4.8 Rating
										</span>
									</div>
								</div>
								<div className="flex items-center justify-center lg:justify-start gap-3">
									<Image
										width={1000}
										height={1000}
										alt={`Google reviews logo`}
										src="/svg/google-tile-logo.svg"
										className="bg-white rounded-full my-auto lg:mx-0 p-1 w-10 h-10 object-cover object-center"
									/>
									<div className="flex flex-col gap-1">
										<span className="flex items-center justify-start gap-1">
											<RenderStars rating={5} color="White" />
										</span>
										<span className="uppercase text-tiny font-NeoGramTrial text-white">
											4.5 Rating
										</span>
									</div>
								</div>
							</motion.div>
						</div>
						<Link
							href={`${buttonLink?.url}`}
							target={buttonLink?.target}
							aria-label={`${buttonLink?.title}`}
							className={buttonLink?.url ? "group" : "hidden"}
						>
							<motion.button
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="block buttonStyling-alt-two font-semibold text-lg w-fit sm:mx-0"
							>
								{buttonLink?.title}
							</motion.button>
						</Link>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default CTA;
