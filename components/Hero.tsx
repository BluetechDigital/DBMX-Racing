// Import
import Link from "next/link";
import Image from "next/image";
import {IHero} from "./types";
import {useState, FC} from "react";
import {motion} from "framer-motion";
import {fadeInUp, stagger} from "../animations/animations";

// Components
import SideMenu from "./Elements/SideMenu";
import Paragraph from "./Elements/Paragraph";
import {useContentContext} from "@/context/context";
import NavbarMenuLinks from "./Elements/NavbarMenuLinks";

// Styling
import styles from "../styles/components/Hero.module.scss";

const Hero: FC<IHero> = ({
	title,
	paragraph,
	buttonLink,
	buttonLinkTwo,
	backgroundImage,
	backgroundVideoUrl,
}) => {
	const content = useContentContext();

	/* Hides or Displays the Full Nav Menu */
	const [menuActive, setMenuActive] = useState(false);

	function toggleMenu() {
		setMenuActive(!menuActive);
	}

	return (
		<section className={styles.hero}>
			<div
				className="relative flex flex-col h-full min-h-screen bg-center bg-no-repeat bg-cover"
				style={{backgroundImage: `url("${backgroundImage}")`}}
			>
				{/* Background Video */}
				{/* https://www.youtube.com/embed/opQx4nZPQQ0?autoplay=1&mute=1&loop=1&controls=0&playlist=opQx4nZPQQ0&amp;showinfo=0 */}

				<div className="absolute top-0 bottom-0 left-0 w-full h-full overflow-hidden">
					<div className="hidden xl:block relative pb-[56.25%] overflow-hidden max-w-full h-auto bg-center bg-no-repeat bg-cover min-h-full xl:min-h-screen">
						<iframe
							allowFullScreen
							className={
								backgroundVideoUrl
									? "absolute top-0 left-0 border-none w-full h-full"
									: `hidden`
							}
							src={backgroundVideoUrl}
						/>
					</div>
					<div className="absolute top-0 h-screen bottom-0 left-0 w-full h-full opacity-90 bg-gradient-to-b from-darkerRedTwo from-5% via-darkerRedTwo via-10% to-transparent to-100%" />
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
						{content.navbarMenuLinks.navbarMenuLinks?.length > 0 ? (
							content.navbarMenuLinks.navbarMenuLinks?.map(
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
				<div className="container relative flex flex-col items-baseline justify-center px-4 m-auto text-center sm:text-left">
					<div className="max-w-3xl">
						<h1 className="flex flex-col sm:block text-left mb-3 text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold leading-[2rem] sm:leading-[3rem] lg:leading-[4rem]">
							{title}
						</h1>
					</div>
					<div className="max-w-xl">
						<Paragraph
							content={paragraph}
							tailwindStyling="mb-6 py-6 text-white leading-[1.75rem] font-[500] text-base sm:text-medium text-center sm:text-left"
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
			<SideMenu menuActive={menuActive} />
		</section>
	);
};

export default Hero;
