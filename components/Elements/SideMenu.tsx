// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {useGlobalContext} from "@/context/Global";
import {ISideMenu} from "@/types/components/index";
import styles from "../../styles/components/Hero.module.scss";

// Components
import NavbarMenuLinks from "./../Elements/NavbarMenuLinks";

const SideMenu: FC<ISideMenu> = ({menuActive}) => {
	const globalContext = useGlobalContext();

	return (
		<div
			className={
				menuActive
					? `${styles.navReveal} ${styles.nav}`
					: `hidden ${styles.nav}`
			}
		>
			<nav className="relative flex flex-col justify-between w-full h-full px-6 py-6 overflow-x-hidden overflow-y-auto bg-pureBlack">
				<div>
					<div className="flex-col items-center hidden mb-16 lg:flex">
						<Link
							className="mt-20 mr-auto text-3xl font-bold leading-none"
							href="/"
						>
							<Image
								height={500}
								width={500}
								alt="DBMX Racing"
								src="/img/logos/DBMX Racing logo.jpg"
								className="object-contain object-center w-full h-[50px]"
							/>
						</Link>
					</div>
					<div className="px-4 mt-20 lg:mt-0">
						<ul>
							{globalContext.mainMenuLinks.mainMenuLinks?.length > 0 ? (
								globalContext.mainMenuLinks.mainMenuLinks?.map(
									(item: any, keys: any) => (
										<li
											key={keys}
											className="mb-1 border-b-[1px] border-goldPrime border-opacity-50"
										>
											<NavbarMenuLinks
												url={item?.node?.url}
												label={item?.node?.label}
												tailwindStyling="block py-4 text-base tracking-[.15rem] font-semibold text-white hover:text-red"
											/>
										</li>
									)
								)
							) : (
								<></>
							)}

							{/* <li className="mb-1 border-b-[1px] border-goldPrime border-opacity-50">
								<NavbarMenuLinks
									url={`/login`}
									label={`Login`}
									tailwindStyling="block py-4 text-base tracking-[.15rem] font-semibold text-goldPrime hover:text-goldYellow"
								/>
							</li> */}
						</ul>
					</div>
				</div>
				<div className="flex flex-col justify-center gap-4 mt-20">
					<div className="flex flex-col justify-center gap-2 py-6">
						<span className="flex items-center gap-2 text-goldPrime">
							Tel:
							<Link
								className="leading-none transition-all duration-500 ease-in-out text-goldPrime text-tiny hover:text-red"
								href={`tel:${globalContext.themesOptionsContent.phoneNumber}`}
							>
								{globalContext.themesOptionsContent.phoneNumber}
							</Link>
						</span>
						<span className="flex items-center gap-2 text-goldPrime">
							Email:
							<Link
								className="leading-none transition-all duration-500 ease-in-out text-goldPrime text-tiny hover:text-red"
								href={`mailto:${globalContext.themesOptionsContent.email}`}
							>
								{globalContext.themesOptionsContent.email}
							</Link>
						</span>
					</div>
					<div className="flex items-center justify-start gap-4 mb-4 text-center">
						<Link
							className="inline-block px-1 text-green"
							href={globalContext.themesOptionsContent.facebookLink}
						>
							<svg
								height="100%"
								className="w-5 h-5"
								style={{
									fill: "#dfc695",
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
							className="inline-block px-1 text-green"
							href={globalContext.themesOptionsContent.linkedinLink}
						>
							<svg
								height="100%"
								style={{
									fill: "#dfc695",
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
						<Link
							className="inline-block px-1 text-green"
							href={globalContext.themesOptionsContent.twitterLink}
						>
							<svg
								height="100%"
								className="w-5 h-5"
								style={{
									fill: "#dfc695",
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
									d="M161.014,464.013c193.208,0 298.885,-160.071 298.885,-298.885c0,-4.546 0,-9.072 -0.307,-13.578c20.558,-14.871 38.305,-33.282 52.408,-54.374c-19.171,8.495 -39.51,14.065 -60.334,16.527c21.924,-13.124 38.343,-33.782 46.182,-58.102c-20.619,12.235 -43.18,20.859 -66.703,25.498c-19.862,-21.121 -47.602,-33.112 -76.593,-33.112c-57.682,0 -105.145,47.464 -105.145,105.144c0,8.002 0.914,15.979 2.722,23.773c-84.418,-4.231 -163.18,-44.161 -216.494,-109.752c-27.724,47.726 -13.379,109.576 32.522,140.226c-16.715,-0.495 -33.071,-5.005 -47.677,-13.148l0,1.331c0.014,49.814 35.447,93.111 84.275,102.974c-15.464,4.217 -31.693,4.833 -47.431,1.802c13.727,42.685 53.311,72.108 98.14,72.95c-37.19,29.227 -83.157,45.103 -130.458,45.056c-8.358,-0.016 -16.708,-0.522 -25.006,-1.516c48.034,30.825 103.94,47.18 161.014,47.104"
									style={{fillRule: "nonzero"}}
								/>
							</svg>
						</Link>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default SideMenu;
