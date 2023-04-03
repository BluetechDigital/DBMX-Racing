import Link from "next/link";
import Image from "next/image";
import {useState, FC} from "react";
import {motion} from "framer-motion";
import {fadeInUp} from "../animations/animations";

// Components
import SideMenu from "./Elements/SideMenu";
import Paragraph from "./Elements/Paragraph";
import NavbarMenuLinks from "./Elements/NavbarMenuLinks";

// Styling
import styles from "../styles/components/Hero.module.scss";

interface HeroProps {
	email: string;
	title: string;
	paragraph: string;
	phoneNumber: string;
	twitterLink: string;
	linkedinLink: string;
	facebookLink: string;
	backgroundImage: string;
	mainMenuLinks: [
		{
			node: {
				id: string;
				url: string;
				label: string;
			};
		}
	];
}

const HeroTwo: FC<HeroProps> = ({
	title,
	email,
	paragraph,
	phoneNumber,
	twitterLink,
	facebookLink,
	linkedinLink,
	mainMenuLinks,
	backgroundImage,
}) => {
	/* Hides or Displays the Full Nav Menu */
	const [menuActive, setMenuActive] = useState(false);

	function toggleMenu() {
		setMenuActive(!menuActive);
	}

	return (
		<section className={styles.hero}>
			<div
				className="flex flex-col bg-cover bg-center bg-no-repeat relative h-full min-h-[65vh]"
				style={{
					backgroundImage: `linear-gradient(0deg,rgb(78, 1, 4, 0.65),rgb(78, 1, 4, 0.65)),url("${backgroundImage}")`,
				}}
			>
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
						{mainMenuLinks?.map((keys) => (
							<li key={keys?.node?.id}>
								<NavbarMenuLinks
									url={keys?.node?.url}
									label={keys?.node?.label}
									tailwindStyling="text-base tracking-[.15rem] text-white hover:text-goldPrime transition-all ease-in-out duration-500"
								/>
							</li>
						))}
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
				<div className="container relative flex flex-col items-center justify-center px-4 m-auto text-center">
					<div className="max-w-lg">
						<motion.h1
							variants={fadeInUp}
							className="flex flex-col sm:block text-left mb-3 text-7xl sm:text-8xl text-white font-bold lg:leading-[4.5rem]"
						>
							{title}
						</motion.h1>
					</div>
					<div className="max-w-xl">
						<Paragraph
							content={paragraph}
							tailwindStyling="mb-6 py-6 text-white leading-[1.75rem] font-[500] text-medium text-center"
						/>
					</div>
				</div>
			</div>

			{/* Hidden Side Menu */}
			<SideMenu
				email={email}
				menuActive={menuActive}
				phoneNumber={phoneNumber}
				twitterLink={twitterLink}
				facebookLink={facebookLink}
				linkedinLink={linkedinLink}
				mainMenuLinks={mainMenuLinks}
			/>
		</section>
	);
};

export default HeroTwo;
