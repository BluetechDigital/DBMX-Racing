// Imports
import Link from "next/link";
import Image from "next/image";
import {useState, FC} from "react";
import {IHeroThree} from "./types";
import {motion} from "framer-motion";
import {fadeInUp} from "../animations/animations";
import {useContentContext} from "@/context/context";

// Components
import SideMenu from "./Elements/SideMenu";
import Paragraph from "./Elements/Paragraph";
import NavbarMenuLinks from "./Elements/NavbarMenuLinks";

// Styling
import styles from "../styles/components/Hero.module.scss";

const HeroThree: FC<IHeroThree> = ({
	title,
	paragraph,
	backgroundImage,
	backgroundVideoUrl,
	backgroundImageOrVideo,
}) => {
	const content = useContentContext();

	/* Hides or Displays the Full Nav Menu */
	const [menuActive, setMenuActive] = useState(false);

	function toggleMenu() {
		setMenuActive(!menuActive);
	}

	const mainImageVideoTailwindcss: string = `object-cover object-center w-full h-full`;

	return (
		<section className={styles.hero}>
			<div className="flex flex-col bg-cover bg-center bg-no-repeat relative h-full min-h-[75vh]">
				{/* Background Video */}
				<div
					className="absolute top-0 bottom-0 left-0 w-full h-full max-h-[75vh] z-[995] bg-center
					 bg-no-repeat bg-cover overflow-hidden"
					style={{backgroundImage: `url("${backgroundImage?.sourceUrl}")`}}
				>
					{/* Background Video */}
					<div className="absolute top-0 bottom-0 left-0 w-full h-full">
						<div className="hidden xl:block relative pb-[56.25%] overflow-hidden max-w-full h-auto bg-center bg-no-repeat bg-cover min-h-full xl:min-h-screen">
							<iframe
								allowFullScreen
								className={
									backgroundImageOrVideo === "Video"
										? "absolute top-0 left-0 border-none w-full h-full"
										: `hidden`
								}
								src={backgroundVideoUrl}
							/>
						</div>
					</div>

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
				<div className="container relative flex flex-col items-center justify-center px-4 m-auto text-center z-[995]">
					<div className="max-w-3xl">
						<motion.h1
							variants={fadeInUp}
							className="flex flex-col sm:block text-center mb-3 text-xl sm:text-3xl md:text-6xl lg:text-7xl text-white font-bold lg:leading-[4rem]"
						>
							{title}
						</motion.h1>
					</div>
					<div className="max-w-xl">
						<Paragraph
							content={paragraph}
							tailwindStyling="mb-6 py-6 text-white leading-normal sm:leading-[1.75rem] font-[500] text-base sm:text-medium text-center"
						/>
					</div>
				</div>
			</div>

			{/* Hidden Side Menu */}
			<SideMenu menuActive={menuActive} />
		</section>
	);
};

export default HeroThree;
