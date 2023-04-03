import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {fadeInUp} from "../../animations/animations";

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

const FourImageGridCard: FC<IProps> = ({title, link, image}) => {
	return (
		<div className="w-full px-4">
			<Link
				href={link?.url}
				target={link?.target}
				className="relative block h-full mb-6 group"
			>
				<motion.div
					variants={fadeInUp}
					className="absolute bottom-0 left-0 z-10 w-full p-8"
				>
					<h4 className="mb-2 text-2xl font-bold text-white">{title}</h4>
				</motion.div>
				<div>
					<Image
						alt={image?.altText}
						src={image?.sourceUrl}
						width={image?.mediaDetails?.width}
						height={image?.mediaDetails?.height}
						className="relative z-0 block object-cover w-full h-full min-h-[450px] max-h-[450px] transition-transform duration-500 transform group-hover:scale-102"
					/>
					<div className="absolute top-0 bottom-0 left-0 w-full h-full bg-black opacity-20 hover:opacity-50 hover:bg-darkRed" />
				</div>
			</Link>
		</div>
	);
};

export default FourImageGridCard;
