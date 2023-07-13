import {FC} from "react";
import Image from "next/image";
import {ILogoCard} from "../types";
import {motion} from "framer-motion";
import {fadeIn, initialTwo} from "../../animations/animations";

const LogoCard: FC<ILogoCard> = ({image}) => {
	return (
		<motion.div
			initial={initialTwo}
			whileInView={fadeIn}
			viewport={{once: true}}
			className="mx-auto"
		>
			<Image
				alt={image?.altText}
				src={image?.sourceUrl}
				width={image?.mediaDetails?.width}
				height={image?.mediaDetails?.height}
				className={
					image?.sourceUrl
						? `block w-[150px] h-full sm:w-[150px] lg:w-full lg:h-[125px] object-contain object-center`
						: `hidden`
				}
			/>
		</motion.div>
	);
};

export default LogoCard;
