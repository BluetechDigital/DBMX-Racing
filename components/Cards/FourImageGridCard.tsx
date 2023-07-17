// Import
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IFourImageGridCard} from "@/types/components/index";
import {fadeInUp, initial} from "../../animations/animations";

const FourImageGridCard: FC<IFourImageGridCard> = ({title, link, image}) => {
	return (
		<div className="w-full px-4">
			<Link
				href={link?.url}
				target={link?.target}
				className="relative block h-full mb-6 group"
			>
				<motion.div
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className="absolute bottom-0 left-0 z-10 w-full p-8"
				>
					<h4 className="mb-2 text-lg font-bold text-white sm:text-xl">
						{title}
					</h4>
				</motion.div>
				<div>
					<Image
						priority={true}
						alt={image?.altText}
						src={image?.sourceUrl}
						width={image?.mediaDetails?.width}
						height={image?.mediaDetails?.height}
						className={
							image?.sourceUrl
								? `block relative z-0 object-cover object-center w-full h-full min-h-[250px] lg:min-h-[450px] max-h-[450px] transition-transform duration-500 transform group-hover:scale-102`
								: `hidden`
						}
					/>
					<div className="absolute top-0 bottom-0 left-0 w-full h-full bg-black opacity-20 hover:opacity-50 hover:bg-darkRed" />
				</div>
			</Link>
		</div>
	);
};

export default FourImageGridCard;
