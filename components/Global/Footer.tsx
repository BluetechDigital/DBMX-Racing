"use client";

// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {stagger, initial, fadeInUp} from "@/animations/animations";

// Styling
import styles from "@/styles/components/Footer.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const Footer: FC = () => {
	const globalContext = useGlobalContext();

	return (
		<footer className={styles.footer + " footer"}>
			<div
				className="relative h-full min-h-screen lg:min-h-[65vh] 2xl:min-h-[60vh] w-full m-0 pt-2 pb-4 bg-pureBlack"
				style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
			>
				<div className="lg:fixed bottom-0 h-full lg:h-[65vh] 2xl:h-[60vh] w-full flex flex-col items-center justify-between pt-24 px-12 lg:px-0 xl:px-16">
					<div className="flex flex-col lg:flex-row items-center justify-start lg:-m-12 lg:divide-x lg:divide-lightGrey lg:container mx-auto">
						<div className="w-full h-full lg:w-1/3 py-8 px-0 lg:px-4 xl:px-6 2xl:px-6 xl:py-12">
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="mb-10 text-white font-VitroTrialHeavy uppercase italic text-2xl leading-relaxed"
							>
								Visit our store
							</motion.h3>
							<div className="relative p-1.5">
								<Paragraph
									content={globalContext?.themesOptionsContent?.textarea}
									tailwindStyling="max-w-full lg:max-w-lg text-white text-xl font-medium text-left font-NeoGramTrial"
								/>
								<Paragraph
									content={globalContext?.themesOptionsContent?.address}
									tailwindStyling="max-w-full lg:max-w-lg text-white font-VitroTrialHeavy uppercase italic text-xl leading-relaxed text-left"
								/>
							</div>
						</div>
						<div className="w-full h-full lg:w-1/3 py-8 px-0 lg:px-4 xl:px-6 2xl:px-6 xl:py-12">
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="mb-8 text-white font-VitroTrialHeavy uppercase italic text-2xl leading-relaxed"
							>
								Contact
							</motion.h3>
							<motion.ul
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
							>
								<Link
									aria-label="Phone Number"
									className="mb-6 group flex items-center gap-4"
									href={`tel:${globalContext?.themesOptionsContent?.phoneNumber}`}
								>
									<div className="flex items-center justify-center w-10 h-10 bg-lightGrey group-hover:bg-primary-default  transition-all duration-500 ease-in-out rounded-full">
										<svg
											viewBox="0 0 32 32"
											version="1.1"
											xmlns="http://www.w3.org/2000/svg"
											className="w-[18px] h-[18px] fill-pureBlack group-hover:fill-white transition-all duration-500 ease-in-out"
										>
											<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
											<g
												id="SVGRepo_tracerCarrier"
												strokeLinecap="round"
												strokeLinejoin="round"
											></g>
											<g id="SVGRepo_iconCarrier">
												<path d="M8.194 1.156c1.169 1.612 2.563 3.694 4.175 6.237 0.406 0.688 0.344 1.512-0.181 2.481-0.2 0.406-0.706 1.331-1.512 2.787 0.887 1.25 2.238 2.787 4.056 4.6s3.331 3.169 4.538 4.056c1.45-0.85 2.381-1.369 2.788-1.575 0.525-0.281 1.031-0.425 1.512-0.425 0.363 0 0.688 0.081 0.969 0.244 1.856 1.131 3.956 2.525 6.294 4.175 0.444 0.325 0.694 0.769 0.756 1.331 0.063 0.569-0.113 1.169-0.512 1.819-0.2 0.281-0.525 0.694-0.969 1.244-0.444 0.544-1.113 1.231-2 2.056s-1.613 1.244-2.181 1.244h-0.063c-4.269-0.169-9.531-3.369-15.762-9.6-6.237-6.238-9.438-11.494-9.6-15.769 0-0.563 0.412-1.3 1.244-2.212 0.825-0.906 1.506-1.563 2.025-1.969 0.525-0.4 0.969-0.725 1.331-0.969 0.444-0.325 0.95-0.481 1.513-0.481 0.694 0 1.212 0.244 1.581 0.725zM6.194 2.425c-0.85 0.606-1.644 1.287-2.394 2.031-0.744 0.75-1.181 1.3-1.3 1.662 0.163 3.756 3.156 8.537 8.988 14.35s10.625 8.819 14.375 9.019c0.325-0.119 0.856-0.563 1.606-1.331s1.425-1.575 2.025-2.419c0.119-0.163 0.163-0.3 0.119-0.425-2.419-1.694-4.438-3.044-6.056-4.056-0.163 0-0.363 0.063-0.606 0.181-0.363 0.2-1.269 0.706-2.725 1.512l-1.031 0.606-1.031-0.669c-1.331-0.925-2.944-2.363-4.844-4.3-1.894-1.894-3.306-3.512-4.238-4.844l-0.725-0.969 0.606-1.088c0.806-1.45 1.313-2.363 1.512-2.725 0.119-0.244 0.181-0.444 0.181-0.606-1.438-2.294-2.769-4.313-3.981-6.050h-0.063c-0.156 0-0.3 0.044-0.419 0.119z"></path>
											</g>
										</svg>
									</div>
									<span className="text-xl text-white group-hover:text-primary-default font-medium font-NeoGramTrial transition-all duration-500 ease-in-out">
										{globalContext?.themesOptionsContent?.phoneNumber}
									</span>
								</Link>
								<Link
									aria-label="Phone Number"
									className="mb-6 group flex items-center gap-4"
									href={`tel:${globalContext?.themesOptionsContent?.phoneNumberTwo}`}
								>
									<div className="flex items-center justify-center w-10 h-10 bg-lightGrey group-hover:bg-primary-default  transition-all duration-500 ease-in-out rounded-full">
										<svg
											viewBox="0 0 32 32"
											version="1.1"
											xmlns="http://www.w3.org/2000/svg"
											className="w-[18px] h-[18px] fill-pureBlack group-hover:fill-white transition-all duration-500 ease-in-out"
										>
											<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
											<g
												id="SVGRepo_tracerCarrier"
												strokeLinecap="round"
												strokeLinejoin="round"
											></g>
											<g id="SVGRepo_iconCarrier">
												<path d="M8.194 1.156c1.169 1.612 2.563 3.694 4.175 6.237 0.406 0.688 0.344 1.512-0.181 2.481-0.2 0.406-0.706 1.331-1.512 2.787 0.887 1.25 2.238 2.787 4.056 4.6s3.331 3.169 4.538 4.056c1.45-0.85 2.381-1.369 2.788-1.575 0.525-0.281 1.031-0.425 1.512-0.425 0.363 0 0.688 0.081 0.969 0.244 1.856 1.131 3.956 2.525 6.294 4.175 0.444 0.325 0.694 0.769 0.756 1.331 0.063 0.569-0.113 1.169-0.512 1.819-0.2 0.281-0.525 0.694-0.969 1.244-0.444 0.544-1.113 1.231-2 2.056s-1.613 1.244-2.181 1.244h-0.063c-4.269-0.169-9.531-3.369-15.762-9.6-6.237-6.238-9.438-11.494-9.6-15.769 0-0.563 0.412-1.3 1.244-2.212 0.825-0.906 1.506-1.563 2.025-1.969 0.525-0.4 0.969-0.725 1.331-0.969 0.444-0.325 0.95-0.481 1.513-0.481 0.694 0 1.212 0.244 1.581 0.725zM6.194 2.425c-0.85 0.606-1.644 1.287-2.394 2.031-0.744 0.75-1.181 1.3-1.3 1.662 0.163 3.756 3.156 8.537 8.988 14.35s10.625 8.819 14.375 9.019c0.325-0.119 0.856-0.563 1.606-1.331s1.425-1.575 2.025-2.419c0.119-0.163 0.163-0.3 0.119-0.425-2.419-1.694-4.438-3.044-6.056-4.056-0.163 0-0.363 0.063-0.606 0.181-0.363 0.2-1.269 0.706-2.725 1.512l-1.031 0.606-1.031-0.669c-1.331-0.925-2.944-2.363-4.844-4.3-1.894-1.894-3.306-3.512-4.238-4.844l-0.725-0.969 0.606-1.088c0.806-1.45 1.313-2.363 1.512-2.725 0.119-0.244 0.181-0.444 0.181-0.606-1.438-2.294-2.769-4.313-3.981-6.050h-0.063c-0.156 0-0.3 0.044-0.419 0.119z"></path>
											</g>
										</svg>
									</div>
									<span className="text-xl text-white group-hover:text-primary-default font-medium font-NeoGramTrial transition-all duration-500 ease-in-out">
										{globalContext?.themesOptionsContent?.phoneNumberTwo}
									</span>
								</Link>
								<Link
									aria-label="Email Address"
									href={`mailto:${globalContext?.themesOptionsContent?.email}`}
									className={
										globalContext?.themesOptionsContent?.email
											? "mb-6 group flex items-center gap-4"
											: "hidden"
									}
								>
									<div className="flex items-center justify-center w-10 h-10 bg-lightGrey group-hover:bg-primary-default  transition-all duration-500 ease-in-out rounded-full">
										<svg
											version="1.1"
											viewBox="0 0 100.354 100.354"
											xmlns="http://www.w3.org/2000/svg"
											className="w-[25px] h-[25px] fill-pureBlack group-hover:fill-white transition-all duration-500 ease-in-out"
										>
											<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
											<g
												id="SVGRepo_tracerCarrier"
												strokeLinecap="round"
												strokeLinejoin="round"
											></g>
											<g id="SVGRepo_iconCarrier">
												<path d="M93.09,76.224c0.047-0.145,0.079-0.298,0.079-0.459V22.638c0-0.162-0.032-0.316-0.08-0.462 c-0.007-0.02-0.011-0.04-0.019-0.06c-0.064-0.171-0.158-0.325-0.276-0.46c-0.008-0.009-0.009-0.02-0.017-0.029 c-0.005-0.005-0.011-0.007-0.016-0.012c-0.126-0.134-0.275-0.242-0.442-0.323c-0.013-0.006-0.023-0.014-0.036-0.02 c-0.158-0.071-0.33-0.111-0.511-0.123c-0.018-0.001-0.035-0.005-0.053-0.005c-0.017-0.001-0.032-0.005-0.049-0.005H8.465 c-0.017,0-0.033,0.004-0.05,0.005c-0.016,0.001-0.032,0.004-0.048,0.005c-0.183,0.012-0.358,0.053-0.518,0.125 c-0.01,0.004-0.018,0.011-0.028,0.015c-0.17,0.081-0.321,0.191-0.448,0.327c-0.005,0.005-0.011,0.006-0.016,0.011 c-0.008,0.008-0.009,0.019-0.017,0.028c-0.118,0.135-0.213,0.29-0.277,0.461c-0.008,0.02-0.012,0.04-0.019,0.061 c-0.048,0.146-0.08,0.3-0.08,0.462v53.128c0,0.164,0.033,0.32,0.082,0.468c0.007,0.02,0.011,0.039,0.018,0.059 c0.065,0.172,0.161,0.327,0.28,0.462c0.007,0.008,0.009,0.018,0.016,0.026c0.006,0.007,0.014,0.011,0.021,0.018 c0.049,0.051,0.103,0.096,0.159,0.14c0.025,0.019,0.047,0.042,0.073,0.06c0.066,0.046,0.137,0.083,0.21,0.117 c0.018,0.008,0.034,0.021,0.052,0.028c0.181,0.077,0.38,0.121,0.589,0.121h83.204c0.209,0,0.408-0.043,0.589-0.121 c0.028-0.012,0.054-0.03,0.081-0.044c0.062-0.031,0.124-0.063,0.181-0.102c0.03-0.021,0.057-0.048,0.086-0.071 c0.051-0.041,0.101-0.082,0.145-0.129c0.008-0.008,0.017-0.014,0.025-0.022c0.008-0.009,0.01-0.021,0.018-0.03 c0.117-0.134,0.211-0.288,0.275-0.458C93.078,76.267,93.083,76.246,93.09,76.224z M9.965,26.04l25.247,23.061L9.965,72.346V26.04z M61.711,47.971c-0.104,0.068-0.214,0.125-0.301,0.221c-0.033,0.036-0.044,0.083-0.073,0.121l-11.27,10.294L12.331,24.138h75.472 L61.711,47.971z M37.436,51.132l11.619,10.613c0.287,0.262,0.649,0.393,1.012,0.393s0.725-0.131,1.011-0.393l11.475-10.481 l25.243,23.002H12.309L37.436,51.132z M64.778,49.232L90.169,26.04v46.33L64.778,49.232z"></path>
											</g>
										</svg>
									</div>
									<span className="text-xl text-white group-hover:text-primary-default font-medium font-NeoGramTrial transition-all duration-500 ease-in-out">
										{globalContext?.themesOptionsContent?.email}
									</span>
								</Link>
								<Link
									aria-label="Email Address"
									href={`mailto:${globalContext?.themesOptionsContent?.emailTwo}`}
									className={
										globalContext?.themesOptionsContent?.emailTwo
											? "mb-6 group flex items-center gap-4"
											: "hidden"
									}
								>
									<div className="flex items-center justify-center w-10 h-10 bg-lightGrey group-hover:bg-primary-default  transition-all duration-500 ease-in-out rounded-full">
										<svg
											version="1.1"
											viewBox="0 0 100.354 100.354"
											xmlns="http://www.w3.org/2000/svg"
											className="w-[25px] h-[25px] fill-pureBlack group-hover:fill-white transition-all duration-500 ease-in-out"
										>
											<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
											<g
												id="SVGRepo_tracerCarrier"
												strokeLinecap="round"
												strokeLinejoin="round"
											></g>
											<g id="SVGRepo_iconCarrier">
												<path d="M93.09,76.224c0.047-0.145,0.079-0.298,0.079-0.459V22.638c0-0.162-0.032-0.316-0.08-0.462 c-0.007-0.02-0.011-0.04-0.019-0.06c-0.064-0.171-0.158-0.325-0.276-0.46c-0.008-0.009-0.009-0.02-0.017-0.029 c-0.005-0.005-0.011-0.007-0.016-0.012c-0.126-0.134-0.275-0.242-0.442-0.323c-0.013-0.006-0.023-0.014-0.036-0.02 c-0.158-0.071-0.33-0.111-0.511-0.123c-0.018-0.001-0.035-0.005-0.053-0.005c-0.017-0.001-0.032-0.005-0.049-0.005H8.465 c-0.017,0-0.033,0.004-0.05,0.005c-0.016,0.001-0.032,0.004-0.048,0.005c-0.183,0.012-0.358,0.053-0.518,0.125 c-0.01,0.004-0.018,0.011-0.028,0.015c-0.17,0.081-0.321,0.191-0.448,0.327c-0.005,0.005-0.011,0.006-0.016,0.011 c-0.008,0.008-0.009,0.019-0.017,0.028c-0.118,0.135-0.213,0.29-0.277,0.461c-0.008,0.02-0.012,0.04-0.019,0.061 c-0.048,0.146-0.08,0.3-0.08,0.462v53.128c0,0.164,0.033,0.32,0.082,0.468c0.007,0.02,0.011,0.039,0.018,0.059 c0.065,0.172,0.161,0.327,0.28,0.462c0.007,0.008,0.009,0.018,0.016,0.026c0.006,0.007,0.014,0.011,0.021,0.018 c0.049,0.051,0.103,0.096,0.159,0.14c0.025,0.019,0.047,0.042,0.073,0.06c0.066,0.046,0.137,0.083,0.21,0.117 c0.018,0.008,0.034,0.021,0.052,0.028c0.181,0.077,0.38,0.121,0.589,0.121h83.204c0.209,0,0.408-0.043,0.589-0.121 c0.028-0.012,0.054-0.03,0.081-0.044c0.062-0.031,0.124-0.063,0.181-0.102c0.03-0.021,0.057-0.048,0.086-0.071 c0.051-0.041,0.101-0.082,0.145-0.129c0.008-0.008,0.017-0.014,0.025-0.022c0.008-0.009,0.01-0.021,0.018-0.03 c0.117-0.134,0.211-0.288,0.275-0.458C93.078,76.267,93.083,76.246,93.09,76.224z M9.965,26.04l25.247,23.061L9.965,72.346V26.04z M61.711,47.971c-0.104,0.068-0.214,0.125-0.301,0.221c-0.033,0.036-0.044,0.083-0.073,0.121l-11.27,10.294L12.331,24.138h75.472 L61.711,47.971z M37.436,51.132l11.619,10.613c0.287,0.262,0.649,0.393,1.012,0.393s0.725-0.131,1.011-0.393l11.475-10.481 l25.243,23.002H12.309L37.436,51.132z M64.778,49.232L90.169,26.04v46.33L64.778,49.232z"></path>
											</g>
										</svg>
									</div>
									<span className="text-xl text-white group-hover:text-primary-default font-medium font-NeoGramTrial transition-all duration-500 ease-in-out">
										{globalContext?.themesOptionsContent?.emailTwo}
									</span>
								</Link>
							</motion.ul>
						</div>
						<div className="w-full h-full lg:w-1/3 py-8 px-0 lg:px-4 xl:px-6 2xl:px-6 xl:py-12">
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="mb-8 text-white font-VitroTrialHeavy uppercase italic text-2xl leading-relaxed"
							>
								Social media
							</motion.h3>
							<motion.ul
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
							>
								<motion.li
									className={
										globalContext?.themesOptionsContent?.facebookLink
											? "mb-4 flex items-center gap-4"
											: "hidden"
									}
								>
									<Link
										href={`${globalContext?.themesOptionsContent?.facebookLink?.url}`}
										target={
											globalContext?.themesOptionsContent?.facebookLink?.target
										}
										aria-label={`Facebook Social Media Link ${globalContext?.themesOptionsContent?.facebookLink?.title}`}
										className={
											globalContext?.themesOptionsContent?.facebookLink?.url
												? "group flex items-center gap-4"
												: "hidden"
										}
									>
										<div className="flex items-center justify-center w-10 h-10 bg-lightGrey group-hover:bg-primary-default  transition-all duration-500 ease-in-out rounded-full">
											<svg
												style={{
													fillRule: "evenodd",
													clipRule: "evenodd",
													strokeLinejoin: "round",
													strokeMiterlimit: "2",
												}}
												width="100%"
												height="100%"
												version="1.1"
												viewBox="0 0 512 512"
												className="w-5 h-5 fill-pureBlack hover:fill-primary-default"
											>
												<path
													d="M512,257.555c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z"
													style={{fillRule: "nonzero"}}
													className="fill-pureBlack group-hover:fill-white transition-all duration-500 ease-in-out"
												/>
											</svg>
										</div>
										<span className="text-xl text-white group-hover:text-primary-default font-medium font-NeoGramTrial transition-all duration-500 ease-in-out">
											Facebook
										</span>
									</Link>
								</motion.li>
								<motion.li
									className={
										globalContext?.themesOptionsContent?.twitterLink
											? "mb-4 flex items-center gap-4"
											: "hidden"
									}
								>
									<Link
										href={`${globalContext?.themesOptionsContent?.twitterLink?.url}`}
										target={
											globalContext?.themesOptionsContent?.twitterLink?.target
										}
										aria-label={`Twitter Social Media Link ${globalContext?.themesOptionsContent?.twitterLink?.title}`}
										className={
											globalContext?.themesOptionsContent?.twitterLink?.url
												? "group flex items-center gap-4"
												: "hidden"
										}
									>
										<div className="flex items-center justify-center w-10 h-10 bg-lightGrey group-hover:bg-primary-default  transition-all duration-500 ease-in-out rounded-full">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												x="0px"
												y="0px"
												width="100"
												height="100"
												viewBox="0 0 50 50"
												className="w-5 h-5"
												style={{
													fillRule: "evenodd",
													clipRule: "evenodd",
													strokeLinejoin: "round",
													strokeMiterlimit: "2",
												}}
											>
												<path
													d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"
													className="fill-pureBlack group-hover:fill-white transition-all duration-500 ease-in-out"
												></path>
											</svg>
										</div>
										<span className="text-xl text-white group-hover:text-primary-default font-medium font-NeoGramTrial transition-all duration-500 ease-in-out">
											Twitter
										</span>
									</Link>
								</motion.li>
								<motion.li
									className={
										globalContext?.themesOptionsContent?.instagramLink
											? "mb-4 flex items-center gap-4"
											: "hidden"
									}
								>
									<Link
										href={`${globalContext?.themesOptionsContent?.instagramLink?.url}`}
										target={
											globalContext?.themesOptionsContent?.instagramLink?.target
										}
										aria-label={`Instagram Social Media Link ${globalContext?.themesOptionsContent?.instagramLink?.title}`}
										className={
											globalContext?.themesOptionsContent?.instagramLink?.url
												? "group flex items-center gap-4"
												: "hidden"
										}
									>
										<div className="flex items-center justify-center w-10 h-10 bg-lightGrey group-hover:bg-primary-default  transition-all duration-500 ease-in-out rounded-full">
											<svg
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
												className="w-5 h-5 group fill-pureBlack group-hover:fill-primary-default"
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
														className="fill-pureBlack group-hover:fill-white transition-all duration-500 ease-in-out"
													></path>
													<path
														d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
														className="fill-pureBlack group-hover:fill-white transition-all duration-500 ease-in-out"
													></path>
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
														className="fill-pureBlack group-hover:fill-white transition-all duration-500 ease-in-out"
													></path>
												</g>
											</svg>
										</div>
										<span className="text-xl text-white group-hover:text-primary-default font-medium font-NeoGramTrial transition-all duration-500 ease-in-out">
											Instagram
										</span>
									</Link>
								</motion.li>
								<motion.li
									className={
										globalContext?.themesOptionsContent?.linkedinLink
											? "mb-4 flex items-center gap-4"
											: "hidden"
									}
								>
									<Link
										href={`${globalContext?.themesOptionsContent?.linkedinLink?.url}`}
										target={
											globalContext?.themesOptionsContent?.linkedinLink?.target
										}
										aria-label={`Linkedin Social Media Link ${globalContext?.themesOptionsContent?.linkedinLink?.title}`}
										className={
											globalContext?.themesOptionsContent?.linkedinLink?.url
												? "group flex items-center gap-4"
												: "hidden"
										}
									>
										<div className="flex items-center justify-center w-10 h-10 bg-lightGrey group-hover:bg-primary-default  transition-all duration-500 ease-in-out rounded-full">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="17"
												height="17"
												viewBox="0 0 17 17"
												fill="none"
											>
												<g clipPath="url(#clip0_323_395)">
													<path
														d="M0.25 1.89813C0.25 1.35919 0.438632 0.914572 0.815878 0.564277C1.19313 0.213966 1.68356 0.0388184 2.28716 0.0388184C2.87999 0.0388184 3.35963 0.211266 3.72611 0.556193C4.10336 0.911888 4.29199 1.37536 4.29199 1.94664C4.29199 2.46401 4.10876 2.89515 3.74228 3.24007C3.36503 3.59577 2.86921 3.77362 2.25483 3.77362H2.23866C1.64583 3.77362 1.16619 3.59577 0.79971 3.24007C0.433231 2.88438 0.25 2.43706 0.25 1.89813ZM0.460183 16.0451V5.2449H4.04947V16.0451H0.460183ZM6.03813 16.0451H9.62741V10.0144C9.62741 9.63718 9.67053 9.34616 9.75676 9.14138C9.90765 8.7749 10.1367 8.46501 10.4439 8.21172C10.7511 7.95842 11.1364 7.83177 11.5999 7.83177C12.8071 7.83177 13.4107 8.64555 13.4107 10.2731V16.0451H17V9.85277C17 8.25752 16.6228 7.04763 15.8682 6.22306C15.1137 5.3985 14.1167 4.98621 12.8772 4.98621C11.4867 4.98621 10.4035 5.58443 9.62741 6.78086V6.81319H9.61125L9.62741 6.78086V5.2449H6.03813C6.05968 5.58981 6.07046 6.66228 6.07046 8.46232C6.07046 10.2623 6.05968 12.7899 6.03813 16.0451Z"
														className="fill-pureBlack group-hover:fill-white transition-all duration-500 ease-in-out"
													></path>
												</g>
												<defs>
													<clipPath id="clip0_323_395">
														<rect
															width="16.75"
															height="16.0063"
															className="fill-pureBlack group-hover:fill-white transition-all duration-500 ease-in-out"
															transform="translate(0.25 0.0388184)"
														></rect>
													</clipPath>
												</defs>
											</svg>
										</div>
										<span className="text-xl text-white group-hover:text-primary-default font-medium font-NeoGramTrial transition-all duration-500 ease-in-out">
											Linkedin
										</span>
									</Link>
								</motion.li>
							</motion.ul>
						</div>
					</div>
					<div className="border-t border-lightGrey mt-6 lg:mt-0 w-full">
						<div className="lg:container mx-auto px-0 pt-6 lg:py-6 lg:px-6 xl:px-0">
							<div className="flex flex-col lg:flex-row justify-between lg:-my-2 gap-6">
								<Paragraph
									content={globalContext?.themesOptionsContent?.copyrightText}
									tailwindStyling="text-white text-lg text-center lg:text-left tracking-[0.05rem] font-VitroTrialHeavy uppercase italic"
								/>
								<div className="w-auto">
									<Link
										target="_blank"
										href={`https://bluetech-digital.co.uk`}
										className="lg:inline-block items-center justify-center text-white hover:text-primary-default font-VitroTrialHeavy uppercase italic hover:underline"
									>
										<span className="flex items-center justify-center lg:justify-left gap-2">
											<Image
												priority
												width={500}
												height={500}
												alt="BluetechDigital Logo"
												src="/img/logos/BluetechDigital-Logo-color.png"
												className="object-contain object-center w-[25px] h-[25px]"
											/>
											<Paragraph
												content={`Website by BluetechDigital`}
												tailwindStyling="w-fit lg:w-full text-base text-center lg:text-left tracking-[0.05rem]"
											/>
										</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
