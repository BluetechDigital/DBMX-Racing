"use client";

// Imports
import {
	initial,
	stagger,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {useState, FC, Fragment} from "react";
import {useGlobalContext} from "@/context/Global";

// Styling
import styles from "@/styles/components/Navbar.module.scss";

// Components
import SideMenu from "@/components/Elements/SideMenu";
import NavbarTop from "@/components/Elements/NavbarTop";

const Navbar: FC = () => {
	const globalContext = useGlobalContext();

	// Display all sublinks & Mobile Links
	const [menuActive, setMenuActive] = useState(false);

	/* Hides or Displays the Full Nav Menu */
	const toggleMenu = () => {
		setMenuActive(!menuActive);
	};

	const resetSideMenu = () => {
		setMenuActive(false);
	};

	return (
		<>
			<nav className={styles.navbar + " "}>
				<div className="fixed flex z-[999] flex-col w-full">
					<NavbarTop />
					<div className="relative z-[999] h-full py-6 w-full bg-pureBlack grid grid-cols-2 lg:grid-cols-4 items-center justify-between px-6 py-3">
						<div className="w-fit flex flex-col items-center">
							<Link
								href="/"
								onClick={resetSideMenu}
								aria-label="Home Page Link"
								className="mr-auto text-3xl font-bold leading-none"
							>
								<Image
									priority
									height={500}
									width={500}
									alt="DBMX Racing"
									src="/img/logos/DBMX Racing logo.jpg"
									className="object-contain object-center w-full h-[30px] md:h-[50px]"
								/>
							</Link>
						</div>
						<motion.ul
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="hidden col-span-2 2xl:flex lg:mx-auto lg:items-center lg:w-auto lg:gap-x-10"
						>
							{globalContext?.navbarMenuLinks?.length > 0 ? (
								globalContext?.navbarMenuLinks?.map(
									(item: any, index: number) => (
										<Fragment key={index}>
											<motion.li
												custom={index}
												initial={initial}
												whileInView="animate"
												viewport={{once: true}}
												onClick={resetSideMenu}
												variants={arrayLoopStaggerChildren}
											>
												<Link
													href={`${item?.node?.url}`}
													target={item?.node?.target}
													aria-label={`${item?.node?.label}`}
												>
													<span className="text-base font-semibold font-VitroTrialHeavy italic uppercase tracking-[0.15rem] text-white hover:text-accent-default transition-all ease-in-out duration-500">
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
						</motion.ul>
						<div className="block">
							<button
								type="button"
								onClick={toggleMenu}
								aria-label="toggle menu"
								className={menuActive ? styles.navToggleOpen : styles.navToggle}
							>
								<span aria-hidden="true"></span>
							</button>
						</div>
					</div>
				</div>

				{/* Hidden Side Menu */}
				<SideMenu menuActive={menuActive} setMenuActive={setMenuActive} />
			</nav>
		</>
	);
};

export default Navbar;
