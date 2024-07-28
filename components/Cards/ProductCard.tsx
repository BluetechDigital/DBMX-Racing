// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IProductCard} from "@/types/components/index";
import {fadeInUp, initial} from "@/animations/animations";

const ProductCard: FC<IProductCard> = ({title, link, image}) => {
	return (
		<Link
			href={`${link?.url}`}
			target={link?.target}
			aria-label={`${link?.title}`}
		>
			<Image
				src={image?.sourceUrl}
				alt={`${image?.altText}`}
				width={image?.mediaDetails?.width ? image?.mediaDetails?.width : 500}
				height={image?.mediaDetails?.height ? image?.mediaDetails?.height : 500}
				className={
					image?.sourceUrl
						? `bg-white block mb-7 w-full h-[200px] sm:h-[250px] lg:h-[300px] xl:h-[350px] max-h-[375px] object-cover object center`
						: `hidden`
				}
			/>
			<motion.h4
				initial={initial}
				whileInView={fadeInUp}
				viewport={{once: true}}
				className="text-lg tracking-wide text-center text-white group-hover:text-accent-default uppercase font-VitroTrialHeavy italic"
			>
				{title}
			</motion.h4>
		</Link>
	);
};

export default ProductCard;
