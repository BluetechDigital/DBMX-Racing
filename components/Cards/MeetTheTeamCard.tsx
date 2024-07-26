// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IMeetTheTeamCard} from "@/types/components";
import {initial, stagger, fadeInUp} from "@/animations/animations";

const MeetTheTeamCard: FC<IMeetTheTeamCard> = ({
	name,
	image,
	position,
	facebookLink,
	twitterLink,
	linkedinLink,
	instagramLink,
}) => {
	return (
		<>
			<div className="w-full bg-white">
				<Image
					alt={`${image?.altText}`}
					src={`${
						image?.sourceUrl
							? image?.sourceUrl
							: "/img/logos/default-avatar-profile.jpg"
					}`}
					className="block mb-4 w-full h-[300px] lg:h-[350px] object-cover object-center"
					width={image?.mediaDetails?.width ? image?.mediaDetails?.width : 500}
					height={
						image?.mediaDetails?.height ? image?.mediaDetails?.height : 500
					}
				/>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="flex items-start justify-between"
				>
					<div className="mb-6 xl:mb-0">
						<motion.h3
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="text-lg font-VitroTrialHeavy uppercase text-pureBlack mb-1"
						>
							{name}
						</motion.h3>
						<span className="text-base text-darkGrey">{position}</span>
					</div>
					<div className="flex items-center justify-center mt-2 gap-4 text-center">
						<Link
							href={`${facebookLink?.url}`}
							target={facebookLink?.target}
							aria-label={`Facebook Social Media Link ${facebookLink?.title}`}
							className={
								facebookLink ? "inline-block px-1 hover:opacity-70" : "hidden"
							}
						>
							<svg
								height="100%"
								className="w-5 h-5"
								style={{
									fill: "#fa0008",
									fillRule: "evenodd",
									clipRule: "evenodd",
									strokeLinejoin: "round",
									strokeMiterlimit: "2",
								}}
								version="1.1"
								viewBox="0 0 512 512"
								width="100%"
							>
								<path
									d="M512,257.555c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z"
									style={{fillRule: "nonzero"}}
								/>
							</svg>
						</Link>
						<Link
							href={`${twitterLink?.url}`}
							target={twitterLink?.target}
							aria-label={`Twitter Social Media Link ${twitterLink?.title}`}
							className={
								twitterLink ? "inline-block px-1 hover:opacity-70" : "hidden"
							}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="100"
								height="100"
								viewBox="0 0 50 50"
								className="w-5 h-5"
								style={{
									fill: "#fa0008",
									fillRule: "evenodd",
									clipRule: "evenodd",
									strokeLinejoin: "round",
									strokeMiterlimit: "2",
								}}
							>
								<path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
							</svg>
						</Link>
						<Link
							href={`${instagramLink?.url}`}
							target={instagramLink?.target}
							aria-label={`Instagram Social Media Link ${instagramLink?.title}`}
							className={
								instagramLink ? "inline-block px-1 hover:opacity-70" : "hidden"
							}
						>
							<svg
								viewBox="0 0 24 24"
								className="w-5 h-5"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									strokeLinecap="round"
									strokeLinejoin="round"
								></g>
								<g id="SVGRepo_iconCarrier">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
										fill="#fa0008"
									></path>
									<path
										d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
										fill="#fa0008"
									></path>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
										fill="#fa0008"
									></path>
								</g>
							</svg>
						</Link>
						<Link
							href={`${linkedinLink?.url}`}
							target={linkedinLink?.target}
							aria-label={`Linkedin Social Media Link ${linkedinLink?.title}`}
							className={
								linkedinLink ? "inline-block px-1 hover:opacity-70" : "hidden"
							}
						>
							<svg
								height="100%"
								style={{
									fill: "#fa0008",
									fillRule: "evenodd",
									clipRule: "evenodd",
									strokeLinejoin: "round",
									strokeMiterlimit: "2",
								}}
								version="1.1"
								viewBox="0 0 512 512"
								className="w-5 h-5"
								width="100%"
							>
								<path
									d="M473.305,-1.353c20.88,0 37.885,16.533 37.885,36.926l0,438.251c0,20.393 -17.005,36.954 -37.885,36.954l-436.459,0c-20.839,0 -37.773,-16.561 -37.773,-36.954l0,-438.251c0,-20.393 16.934,-36.926 37.773,-36.926l436.459,0Zm-37.829,436.389l0,-134.034c0,-65.822 -14.212,-116.427 -91.12,-116.427c-36.955,0 -61.739,20.263 -71.867,39.476l-1.04,0l0,-33.411l-72.811,0l0,244.396l75.866,0l0,-120.878c0,-31.883 6.031,-62.773 45.554,-62.773c38.981,0 39.468,36.461 39.468,64.802l0,118.849l75.95,0Zm-284.489,-244.396l-76.034,0l0,244.396l76.034,0l0,-244.396Zm-37.997,-121.489c-24.395,0 -44.066,19.735 -44.066,44.047c0,24.318 19.671,44.052 44.066,44.052c24.299,0 44.026,-19.734 44.026,-44.052c0,-24.312 -19.727,-44.047 -44.026,-44.047Z"
									style={{fillRule: "nonzero"}}
								/>
							</svg>
						</Link>
					</div>
				</motion.div>
			</div>
		</>
	);
};

export default MeetTheTeamCard;
