import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {fadeInUp, stagger} from "../../animations/animations";

interface IProps {
	title: string;
	link: {
		url: string;
		title: string;
		target: string;
	};
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
}

const ProductCard: FC<IProps> = ({title, link, image}) => {
	return (
		<motion.div variants={stagger} className="w-full">
			<Link href={link?.url ? link?.url : `/`} target={link?.target}>
				<motion.div variants={fadeInUp} className="bg-white">
					<Image
						priority={true}
						alt={image?.altText}
						src={image?.sourceUrl}
						width={image?.mediaDetails?.width}
						height={image?.mediaDetails?.height}
						className={
							image?.sourceUrl
								? `block block w-full mb-5 transition-transform duration-500 transform h-full min-h-[350px] max-h-[350px] group-hover:scale-102 object-cover object center`
								: `hidden`
						}
					/>
				</motion.div>
				<motion.h4
					variants={fadeInUp}
					className="mt-2 text-base font-bold tracking-widest text-center sm:text-left text-goldPrime"
				>
					{title}
				</motion.h4>
			</Link>
		</motion.div>
	);
};

export default ProductCard;
