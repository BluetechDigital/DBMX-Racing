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
	return <>hello</>;
};

export default Hero;
