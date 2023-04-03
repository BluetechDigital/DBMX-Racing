import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import Paragraph from "./Elements/Paragraph";
import {fadeIn} from "../animations/animations";

interface IProps {
	title: string;
	paragraph: string;
	backgroundImage: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
}

const ContactBanner: FC<IProps> = ({
	title,
	paragraph,
	buttonLink,
	backgroundImage,
}) => {
	return (
		<section
			className="px-4 py-20 bg-center bg-no-repeat bg-cover lg:px-0"
			style={{
				backgroundImage: `linear-gradient(
							0deg,
							rgba(78, 1, 4, 0.85),
							rgba(78, 1, 4, 0.85)
						),url("${backgroundImage}")`,
			}}
		>
			<div className="container p-0 mx-auto">
				<div className="flex flex-col items-center justify-between gap-10 px-0 py-8 lg:flex-row lg:px-8">
					<div className="flex flex-col items-center justify-between gap-4 lg:items-start">
						<h2 className="max-w-2xl mb-4 text-3xl font-semibold leading-tight text-center text-white md:text-4xl lg:text-left ">
							{title}
						</h2>
						<Paragraph
							content={paragraph}
							tailwindStyling="w-full lg:max-w-[40rem] mt-4 text-center lg:text-left text-white text-medium"
						/>
					</div>
					<Link href={`${buttonLink?.url}`} target={`${buttonLink?.target}`}>
						<motion.button
							variants={fadeIn}
							className="px-12 py-4 font-semibold tracking-widest text-white uppercase transition-all duration-500 ease-in-out text-medium md:py-6 xl:px-20 bg-red hover:bg-goldPrimeDarker"
						>
							{buttonLink?.title}
						</motion.button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ContactBanner;
