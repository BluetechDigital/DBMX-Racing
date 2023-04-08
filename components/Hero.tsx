import Link from "next/link";
import Image from "next/image";
import {useState, FC} from "react";
import {motion} from "framer-motion";
import {fadeInUp, fadeInTwo, stagger} from "../animations/animations";

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
	backgroundVideoUrl: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	buttonLinkTwo: {
		url: string;
		title: string;
		target: string;
	};
	mainMenuLinks: [
		{
			node: {
				id: string;
				url: string;
				label: string;
			};
		}
	];
	navbarMenuLinks: [
		{
			node: {
				id: string;
				url: string;
				label: string;
			};
		}
	];
}

const Hero: FC<HeroProps> = ({
	title,
	email,
	paragraph,
	buttonLink,
	phoneNumber,
	twitterLink,
	facebookLink,
	linkedinLink,
	buttonLinkTwo,
	mainMenuLinks,
	navbarMenuLinks,
	backgroundVideoUrl,
}) => {
	/* Hides or Displays the Full Nav Menu */
	const [menuActive, setMenuActive] = useState(false);

	function toggleMenu() {
		setMenuActive(!menuActive);
	}

	return (
		<section className={styles.hero}>
			<div className="flex flex-col bg-cover bg-center bg-no-repeat relative h-full min-h-[100vh]">
				{/* Background Video */}
				<div className="absolute top-0 bottom-0 left-0 w-full h-full overflow-hidden">
					<div className="w-full h-full">
						<div className="relative pt-[56.25%] h-full">
							<iframe
								width="3840"
								height="2160"
								frameBorder="0"
								allowFullScreen
								title="DBMX Racing Hero Video"
								allow="autoplay; fullscreen; picture-in-picture"
								className="absolute top-0 left-0 w-full h-full min-h-screen"
								src={`${backgroundVideoUrl}?autoplay=1&loop=1&autopause=0&background=1&title=0&sidedock=0&controls=0`}
							/>
						</div>
					</div>

					<div className="absolute top-0 bottom-0 left-0 w-full h-full opacity-90 bg-gradient-to-b from-darkerRedTwo from-5% via-darkerRedTwo via-10% to-transparent to-100%" />
				</div>
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
						{navbarMenuLinks?.map((keys) => (
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
				<div className="container relative flex flex-col items-baseline justify-center px-4 m-auto text-center sm:text-left">
					<div className="max-w-3xl">
						<h1 className="flex flex-col sm:block text-left mb-3 text-6xl sm:text-7xl md:text-8xl text-white font-bold leading-[3rem] lg:leading-[4rem]">
							{title}
						</h1>
					</div>
					<div className="max-w-xl">
						<Paragraph
							content={paragraph}
							tailwindStyling="mb-6 py-6 text-white leading-[1.75rem] font-[500] text-medium text-center sm:text-left"
						/>
						<motion.div
							variants={stagger}
							className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start"
						>
							<Link
								href={buttonLink?.url ? buttonLink?.url : `/`}
								target={buttonLink?.target}
							>
								<motion.button
									variants={fadeInUp}
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
									variants={fadeInUp}
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

export default Hero;
