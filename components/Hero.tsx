// Imports
import {
	stagger,
	initial,
	fadeInUp,
	slideInRightFinish,
	slideInRightInitial,
} from "@/animations/animations";
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IHero} from "@/types/components/index";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import RenderStars from "@/components/Elements/RenderStars";

const Hero: FC<IHero> = ({
	title,
	ctaLink,
	videoUrl,
	paragraph,
	buttonLink,
	displayVideo,
	ctaParagraph,
	buttonLinkTwo,
	backgroundImage,
}) => {
	return (
		<>
			<div
				className="h-[75vh] lg:h-[75vh] bg-white pt-28 lg:mt-2 bg-center bg-no-repeat bg-cover"
				style={{backgroundImage: `url("${backgroundImage?.sourceUrl}")`}}
			>
				<div className="relative"></div>
			</div>
		</>
	);
};

export default Hero;
