// Imports
import Link from "next/link";
import Image from "next/image";
import {useState, FC} from "react";
import {useGlobalContext} from "@/context/Global";

// Components
import SideMenu from "./Elements/SideMenu";
import NavbarMenuLinks from "./Elements/NavbarMenuLinks";

// Styling
import styles from "../styles/components/Hero.module.scss";

const HeroTwo: FC = () => {
	const globalContext = useGlobalContext();

	/* Hides or Displays the Full Nav Menu */
	const [menuActive, setMenuActive] = useState(false);

	function toggleMenu() {
		setMenuActive(!menuActive);
	}

	return (
		<section className={styles.hero}>
			<div className="flex flex-col relative h-full min-h-[8vh]">
				<nav className="fixed flex items-center justify-between w-full px-6 py-10 lg:py-8 bg-pureBlack z-[999]">
					<div className="absolute flex flex-col items-center">
						<Link className="mr-auto text-3xl font-bold leading-none" href="/">
							<Image
								height={500}
								width={500}
								alt="DBMX Racing"
								src="/img/logos/DBMX Racing logo.jpg"
								className="object-contain object-center w-full h-[50px]"
							/>
						</Link>
					</div>
					<ul className="hidden lg:flex lg:mx-auto lg:items-center lg:w-auto lg:gap-x-10">
						{/* Menu Link*/}
						{globalContext.navbarMenuLinks.navbarMenuLinks?.length > 0 ? (
							globalContext.navbarMenuLinks.navbarMenuLinks?.map(
								(item: any, keys: any) => (
									<li key={keys}>
										<NavbarMenuLinks
											url={item?.node?.url}
											label={item?.node?.label}
											tailwindStyling="text-base tracking-[.15rem] text-white hover:text-goldPrime transition-all ease-in-out duration-500"
										/>
									</li>
								)
							)
						) : (
							<></>
						)}
					</ul>
					<button
						type="button"
						onClick={toggleMenu}
						aria-label="toggle menu"
						className={menuActive ? styles.navToggleOpen : styles.navToggle}
					>
						<span aria-hidden="true"></span>
					</button>
				</nav>
			</div>

			{/* Hidden Side Menu */}
			<SideMenu menuActive={menuActive} />
		</section>
	);
};

export default HeroTwo;
