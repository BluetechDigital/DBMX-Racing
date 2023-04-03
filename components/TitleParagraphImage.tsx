import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import Paragraph from "./Elements/Paragraph";
import {fadeInUp, stagger} from "../animations/animations";

interface IProps {
	title: string;
	subtitle: string;
	paragraph: string;
	statsOne: {
		title: string;
		subtitle: string;
		paragraph: string;
	};
	statsTwo: {
		title: string;
		subtitle: string;
		paragraph: string;
	};
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
}

const TitleParagraphImage: FC<IProps> = ({
	title,
	subtitle,
	buttonLink,
	paragraph,
}) => {
	return (
		<section
			className="relative py-20 overflow-hidden bg-center bg-no-repeat bg-cover bg-darkerRedTwo"
			style={{
				backgroundImage: `url("/svg/blob.svg")`,
			}}
		>
			<div className="container relative px-4 mx-auto">
				<div className="flex flex-wrap items-center -mx-4">
					<div className="w-full px-4 mb-12 lg:w-1/2 lg:mb-0">
						<div className="max-w-lg">
							<span className="text-xs font-semibold text-white">{title}</span>
							<h2 className="mt-8 mb-6 text-4xl font-semibold text-white lg:mb-10 lg:pr-8">
								{subtitle}
							</h2>
							<Paragraph
								content={paragraph}
								tailwindStyling="w-full lg:max-w-2xl mx-auto mt-4 py-8 text-white text-center sm:text-left text-medium"
							/>
							<Link
								href={buttonLink?.url}
								target={buttonLink?.target}
								className="text-xl font-medium text-white underline hover:no-underline"
							>
								<motion.button variants={fadeInUp}>
									Learn more {buttonLink?.title}
								</motion.button>
							</Link>
						</div>
					</div>
					<div className="relative w-full px-4 lg:w-1/2">
						<Image
							alt=""
							width={550}
							height={550}
							className="object-cover lg:h-128 rounded-xl"
							src="http://dbmx-racing.local/wp-content/uploads/2023/04/pexels-cottonbro-studio-5802968-min-scaled.jpg"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TitleParagraphImage;
