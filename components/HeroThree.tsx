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
	backgroundVideoUrl: string;
	backgroundImageOrVideo: string;
	backgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
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

const HeroThree: FC<HeroProps> = ({
	title,
	email,
	paragraph,
	phoneNumber,
	twitterLink,
	facebookLink,
	linkedinLink,
	mainMenuLinks,
	navbarMenuLinks,
	backgroundImage,
	backgroundVideoUrl,
	backgroundImageOrVideo,
}) => {
	/* Hides or Displays the Full Nav Menu */
	const [menuActive, setMenuActive] = useState(false);

	function toggleMenu() {
		setMenuActive(!menuActive);
	}

	const mainImageVideoTailwindcss: string = `object-cover object-center w-full h-full`;

	return (
		<section className={styles.hero}>
			<div className="flex flex-col bg-cover bg-center bg-no-repeat relative h-full min-h-[75vh] z-[997]">
				{/* Background Video */}
				<div className="absolute top-0 bottom-0 left-0 w-full h-full">
					{/* Video */}
					<video
						autoPlay
						muted
						loop
						className={
							backgroundImageOrVideo === "Video"
								? `block ${mainImageVideoTailwindcss}`
								: ` hidden`
						}
					>
						<source src={backgroundVideoUrl} type="video/mp4" />
					</video>
					{/* Image */}
					<Image
						priority={true}
						width={backgroundImage?.mediaDetails?.width}
						height={backgroundImage?.mediaDetails?.height}
						className={
							backgroundImageOrVideo === "Image"
								? `block ${mainImageVideoTailwindcss}`
								: ` hidden`
						}
						src={backgroundImage?.sourceUrl}
						alt={backgroundImage?.altText}
					/>
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
				<div className="container relative flex flex-col items-center justify-center px-4 m-auto text-center">
					<div className="max-w-3xl">
						<motion.h1
							variants={fadeInUp}
							className="flex flex-col sm:block text-center mb-3 text-6xl md:text-7xl text-white font-bold lg:leading-[4rem]"
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

export default HeroThree;
