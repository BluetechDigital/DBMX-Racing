import {FC} from "react";
import {motion} from "framer-motion";
import {fadeInUp, stagger} from "../animations/animations";
import FourImageGridCard from "./Cards/FourImageGridCard";

interface IProps {
	title: string;
	servicesGrid: [
		{
			id: string;
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
	];
}

const FourImageGrid: FC<IProps> = ({title, servicesGrid}) => {
	return (
		<section className="py-12 bg-pureBlack md:pt-16 md:pb-20">
			<div className="container px-4 mx-auto">
				<div className="flex flex-wrap items-end mb-10 -mx-4">
					<div className="w-full px-4 mb-6 sm:w-1/2 xl:w-3/5 sm:mb-0">
						<motion.h2
							variants={fadeInUp}
							className="text-3xl font-bold text-white md:text-4xl font-heading"
						>
							{title}
						</motion.h2>
					</div>
				</div>
				<motion.div
					variants={stagger}
					className="flex flex-col items-center -mx-4 sm:grid sm:grid-cols-2"
				>
					{servicesGrid.map((keys) => (
						<FourImageGridCard
							link={keys?.link}
							title={keys?.title}
							image={keys?.image}
							key={keys?.id || keys?.title}
						/>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default FourImageGrid;
