"use client";

// Imports
import {
	fadeIn,
	initial,
	stagger,
	initialTwo,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {FC, Fragment, useState} from "react";
import {ISideMenu} from "@/types/components";
import {useGlobalContext} from "@/context/Global";

// Styling
import styles from "@/styles/components/Navbar.module.scss";

const SideMenu: FC<ISideMenu> = ({menuActive, setMenuActive}) => {
	const globalContext = useGlobalContext();

	const [ourServicesSublinksOpen, setOurServicesSublinksOpen]: any =
		useState(false);

	const toggleMenu = () => {
		setMenuActive(false);
	};

	// Hides or Display Our Services sublinks
	const displayOurServicesSublinks = () => {
		setOurServicesSublinksOpen(!ourServicesSublinksOpen);
	};

	return (
		<>
			<nav
				className={
					menuActive
						? `${styles.navReveal} ${styles.nav}`
						: `hidden ${styles.nav}`
				}
			>
				<div
					className="relative flex flex-col w-full h-full px-6 py-6 overflow-x-hidden overflow-y-auto bg-white bg-cover bg-no-repeat bg-center"
					style={{
						backgroundImage:
							"url(/svg/background/layered-peaks-haikei-side-menu.svg)",
					}}
				>
					<div className="flex flex-col items-center mb-8">
						<Link
							href="/"
							target="_self"
							aria-label={`DBMX Racing Homepage Link`}
							className="mr-auto text-3xl font-bold leading-none"
						>
							<Image
								width={500}
								height={500}
								alt="DBMX Racing Logo"
								src="/svg/logo/DBMX-Racing-Logo-color.svg"
								className="object-contain object-center w-[50px] h-[50px]"
							/>
						</Link>
					</div>
					<div className="flex flex-col px-4 mt-14">
						<motion.ul
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
						>
							{globalContext?.mobileLinks.length > 0 ? (
								globalContext?.mobileLinks.map((item: any, index: number) => (
									<Fragment key={index}>
										{item?.node?.url === "/services" ? (
											<motion.li
												custom={index}
												initial={initial}
												whileInView="animate"
												viewport={{once: true}}
												variants={arrayLoopStaggerChildren}
												onClick={displayOurServicesSublinks}
												className="border-b-[1px] border-accent-dark border-opacity-50 cursor-pointer"
											>
												<span className="py-4 px-0 flex flex-row justify-between items-center gap-2">
													<Link
														onClick={toggleMenu}
														href={`${item?.node?.url}`}
														aria-label={`${item?.node?.label} page link`}
														target={`${
															item?.node?.target ? item?.node?.target : "_self"
														}`}
													>
														<span
															className="text-pureBlack uppercase font-VitroTrialHeavy italic
														 hover:text-primary-default text-base lg:text-medium text-center transition-all ease-in-out duration-500"
														>
															{item?.node?.label}
														</span>
													</Link>
													<Image
														width={500}
														height={500}
														alt="Black Arrow Icon"
														src="/svg/navigation-menu-dropdown-arrow-black.svg"
														className="w-[25px] h-[25px] object-contain object-center"
													/>
												</span>
												{ourServicesSublinksOpen ? (
													<>
														<motion.ul
															initial={initialTwo}
															variants={stagger}
															whileInView="animate"
															viewport={{once: true}}
															className={
																styles.ourServicesLinks +
																` flex flex-col my-4 z-[999]`
															}
														>
															{/* Menu Link*/}
															{globalContext?.ourServicesLinks?.length > 0 ? (
																globalContext?.ourServicesLinks?.map(
																	(item: any, index: number) => (
																		<Fragment key={index}>
																			<li
																				onClick={toggleMenu}
																				className={`${
																					index < 1
																						? "border-t-[1px] border-accent-default border-opacity-50"
																						: "border-t-[0px]"
																				} hover:border-primary-default bg-primary-default hover:bg-primary-darker border-y-[1px] border-accent-default border-opacity-50 text-center transition-all ease-in-out duration-500`}
																			>
																				<Link
																					href={`${item?.node?.url}`}
																					target={`${
																						item?.node?.target
																							? item?.node?.target
																							: "_self"
																					}`}
																					aria-label={`${item?.node?.label}`}
																					className="block p-4 text-tiny font-semibold"
																				>
																					<span className="uppercase font-VitroTrialHeavy text-white text-base lg:text-medium">
																						{item?.node?.label}
																					</span>
																				</Link>
																			</li>
																		</Fragment>
																	)
																)
															) : (
																<></>
															)}
														</motion.ul>
													</>
												) : null}
											</motion.li>
										) : (
											<motion.li
												custom={index}
												initial={initial}
												onClick={toggleMenu}
												whileInView="animate"
												className="py-4 px-0"
												viewport={{once: true}}
												variants={arrayLoopStaggerChildren}
											>
												<Link
													href={`${item?.node?.url}`}
													target={item?.node?.target}
													aria-label={`${item?.node?.label} page link`}
												>
													<span
														className="text-pureBlack uppercase font-VitroTrialHeavy italic
														 hover:text-primary-default text-base lg:text-medium text-center transition-all ease-in-out duration-500"
													>
														{item?.node?.label}
													</span>
												</Link>
											</motion.li>
										)}
									</Fragment>
								))
							) : (
								<></>
							)}
						</motion.ul>
					</div>
					<div className="mt-20">
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="flex flex-col items-center justify-between gap-4"
						>
							<h4 className="mb-5 text-xl font-semibold tracking-normal text-center md:text-left text-pureBlack uppercase font-VitroTrialHeavy italic">
								Contact Links
							</h4>
							<div className="flex items-center justify-center gap-4 text-center">
								<Link
									onClick={toggleMenu}
									href={`${globalContext?.themesOptionsContent?.facebookLink?.url}`}
									target={
										globalContext?.themesOptionsContent?.facebookLink?.target
									}
									aria-label={`Facebook Social Media Link ${globalContext?.themesOptionsContent?.facebookLink?.title}`}
									className={
										globalContext?.themesOptionsContent?.facebookLink?.url
											? "inline-block px-1"
											: "hidden"
									}
								>
									<svg
										height="100%"
										style={{
											fillRule: "evenodd",
											clipRule: "evenodd",
											strokeLinejoin: "round",
											strokeMiterlimit: "2",
										}}
										version="1.1"
										viewBox="0 0 512 512"
										width="100%"
										className="w-5 h-5 fill-pureBlack hover:fill-primary-default"
									>
										<path
											d="M512,257.555c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z"
											style={{fillRule: "nonzero"}}
										/>
									</svg>
								</Link>
								<Link
									onClick={toggleMenu}
									href={`${globalContext?.themesOptionsContent?.twitterLink?.url}`}
									target={
										globalContext?.themesOptionsContent?.twitterLink?.target
									}
									aria-label={`Twitter Social Media Link ${globalContext?.themesOptionsContent?.twitterLink?.title}`}
									className={
										globalContext?.themesOptionsContent?.twitterLink?.url
											? "inline-block px-1"
											: "hidden"
									}
								>
									<svg
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="w-5 h-5 fill-pureBlack hover:fill-primary-default"
									>
										<path
											d="M12.3731 1.20056H14.7039L9.61187 7.02038L15.6022 14.9398H10.9118L7.23814 10.1367L3.03463 14.9398H0.702494L6.14886 8.71489L0.402344 1.20056H5.21177L8.53245 5.59079L12.3731 1.20056ZM11.5551 13.5448H12.8466L4.51001 2.52235H3.12411L11.5551 13.5448Z"
											fill="#060918"
										></path>
									</svg>
								</Link>
								<Link
									onClick={toggleMenu}
									href={`${globalContext?.themesOptionsContent?.instagramLink?.url}`}
									target={
										globalContext?.themesOptionsContent?.instagramLink?.target
									}
									aria-label={`Instagram Social Media Link ${globalContext?.themesOptionsContent?.instagramLink?.title}`}
									className={
										globalContext?.themesOptionsContent?.instagramLink?.url
											? "inline-block px-1"
											: "hidden"
									}
								>
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
												className="fill-pureBlack group-hover:fill-primary-default"
											></path>
											<path
												d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
												className="fill-pureBlack group-hover:fill-primary-default"
											></path>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
												className="fill-pureBlack hover:fill-primary-default"
											></path>
										</g>
									</svg>
								</Link>
								<Link
									onClick={toggleMenu}
									href={`${globalContext?.themesOptionsContent?.linkedinLink?.url}`}
									target={
										globalContext?.themesOptionsContent?.linkedinLink?.target
									}
									aria-label={`Linkedin Social Media Link ${globalContext?.themesOptionsContent?.linkedinLink?.title}`}
									className={
										globalContext?.themesOptionsContent?.linkedinLink?.url
											? "inline-block px-1"
											: "hidden"
									}
								>
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
											d="M473.305,-1.353c20.88,0 37.885,16.533 37.885,36.926l0,438.251c0,20.393 -17.005,36.954 -37.885,36.954l-436.459,0c-20.839,0 -37.773,-16.561 -37.773,-36.954l0,-438.251c0,-20.393 16.934,-36.926 37.773,-36.926l436.459,0Zm-37.829,436.389l0,-134.034c0,-65.822 -14.212,-116.427 -91.12,-116.427c-36.955,0 -61.739,20.263 -71.867,39.476l-1.04,0l0,-33.411l-72.811,0l0,244.396l75.866,0l0,-120.878c0,-31.883 6.031,-62.773 45.554,-62.773c38.981,0 39.468,36.461 39.468,64.802l0,118.849l75.95,0Zm-284.489,-244.396l-76.034,0l0,244.396l76.034,0l0,-244.396Zm-37.997,-121.489c-24.395,0 -44.066,19.735 -44.066,44.047c0,24.318 19.671,44.052 44.066,44.052c24.299,0 44.026,-19.734 44.026,-44.052c0,-24.312 -19.727,-44.047 -44.026,-44.047Z"
											style={{fillRule: "nonzero"}}
										/>
									</svg>
								</Link>
							</div>
							<div className="flex flex-col items-center justify-center w-auto gap-6 py-6 mb-10">
								<motion.div
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className={
										globalContext?.themesOptionsContent?.email
											? "flex items-center justify-center gap-2"
											: "hidden"
									}
								>
									<div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-default sm:mr-3">
										<svg
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M2.5 6.66669L9.0755 11.0504C9.63533 11.4236 10.3647 11.4236 10.9245 11.0504L17.5 6.66669M4.16667 15.8334H15.8333C16.7538 15.8334 17.5 15.0872 17.5 14.1667V5.83335C17.5 4.91288 16.7538 4.16669 15.8333 4.16669H4.16667C3.24619 4.16669 2.5 4.91288 2.5 5.83335V14.1667C2.5 15.0872 3.24619 15.8334 4.16667 15.8334Z"
												stroke="white"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											></path>
										</svg>
									</div>
									<Link
										target="_self"
										onClick={toggleMenu}
										href={`mailto:${globalContext?.themesOptionsContent?.email}`}
										aria-label={`${globalContext?.themesOptionsContent?.email}`}
										className="font-medium font-NeoGramTrial text-paragraph tracking-wide text-pureBlack hover:text-primary-default"
									>
										{globalContext?.themesOptionsContent?.email}
									</Link>
								</motion.div>
								<motion.div
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className={
										globalContext?.themesOptionsContent?.emailTwo
											? "flex items-center justify-center gap-2"
											: "hidden"
									}
								>
									<div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-default sm:mr-3">
										<svg
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M2.5 6.66669L9.0755 11.0504C9.63533 11.4236 10.3647 11.4236 10.9245 11.0504L17.5 6.66669M4.16667 15.8334H15.8333C16.7538 15.8334 17.5 15.0872 17.5 14.1667V5.83335C17.5 4.91288 16.7538 4.16669 15.8333 4.16669H4.16667C3.24619 4.16669 2.5 4.91288 2.5 5.83335V14.1667C2.5 15.0872 3.24619 15.8334 4.16667 15.8334Z"
												stroke="white"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											></path>
										</svg>
									</div>
									<Link
										target="_self"
										onClick={toggleMenu}
										href={`mailto:${globalContext?.themesOptionsContent?.emailTwo}`}
										aria-label={`${globalContext?.themesOptionsContent?.emailTwo}`}
										className="font-medium font-NeoGramTrial text-paragraph tracking-wide text-pureBlack hover:text-primary-default"
									>
										{globalContext?.themesOptionsContent?.emailTwo}
									</Link>
								</motion.div>
								<motion.div
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className={
										globalContext?.themesOptionsContent?.phoneNumber
											? "flex items-center justify-center gap-2"
											: "hidden"
									}
								>
									<div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-default sm:mr-3">
										<svg
											fill="#ffffff"
											viewBox="0 0 32 32"
											version="1.1"
											className="w-[18px] h-[18px]"
											xmlns="http://www.w3.org/2000/svg"
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
									<Link
										target="_self"
										onClick={toggleMenu}
										href={`tel:${globalContext?.themesOptionsContent?.phoneNumber}`}
										aria-label={`${globalContext?.themesOptionsContent?.phoneNumber}`}
										className="font-medium font-NeoGramTrial text-paragraph tracking-wide text-pureBlack hover:text-primary-default"
									>
										{globalContext?.themesOptionsContent?.phoneNumber}
									</Link>
								</motion.div>
								<motion.div
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className={
										globalContext?.themesOptionsContent?.phoneNumberTwo
											? "flex items-center justify-center gap-2"
											: "hidden"
									}
								>
									<div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-default sm:mr-3">
										<svg
											fill="#ffffff"
											viewBox="0 0 32 32"
											version="1.1"
											className="w-[18px] h-[18px]"
											xmlns="http://www.w3.org/2000/svg"
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
									<Link
										target="_self"
										onClick={toggleMenu}
										href={`tel:${globalContext?.themesOptionsContent?.phoneNumberTwo}`}
										aria-label={`${globalContext?.themesOptionsContent?.phoneNumberTwo}`}
										className="font-medium font-NeoGramTrial text-paragraph tracking-wide text-pureBlack hover:text-primary-default"
									>
										{globalContext?.themesOptionsContent?.phoneNumberTwo}
									</Link>
								</motion.div>
							</div>
						</motion.div>
						<ul className="flex flex-col sm:flex-row w-auto gap-4 lg:gap-2 sm:gap-20 py-6 px-4 lg:p-6">
							{globalContext?.copyrightLinks?.length > 0 ? (
								globalContext?.copyrightLinks?.map(
									(item: any, index: number) => (
										<Fragment key={index}>
											<motion.li
												custom={index}
												initial={initial}
												onClick={toggleMenu}
												whileInView="animate"
												viewport={{once: true}}
												variants={arrayLoopStaggerChildren}
											>
												<Link href={`${item?.node?.url}`}>
													<span className="text-pureBlack font-VitroTrialHeavy uppercase text-sm transition-all duration-500 ease-in-out hover:text-primary-default">
														{item?.node?.label}
													</span>
												</Link>
											</motion.li>
										</Fragment>
									)
								)
							) : (
								<></>
							)}
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default SideMenu;
