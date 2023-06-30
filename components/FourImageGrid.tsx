// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {IFourImageGrid} from "./types";
import {fadeInUp, stagger} from "../animations/animations";

// Components
import FourImageGridCard from "./Cards/FourImageGridCard";

const FourImageGrid: FC<IFourImageGrid> = ({title, servicesGrid}) => {
	return (
		<section className="bg-pureBlack md:pb-20">
			<div className="container px-4 py-12 mx-auto md:pt-16">
				<div className="flex flex-wrap items-end mb-10 -mx-4">
					<div className="w-full max-w-xl px-4 mb-6 xl:w-3/5 sm:mb-0">
						<motion.h2
							variants={fadeInUp}
							className="text-lg font-bold text-white sm:text-3xl md:text-4xl"
						>
							{title}
						</motion.h2>
					</div>
				</div>
				<motion.div
					variants={stagger}
					className="flex flex-col items-center -mx-4 sm:grid sm:grid-cols-2"
				>
					{servicesGrid?.length > 0 ? (
						servicesGrid.map((item: any, keys: any) => (
							<FourImageGridCard
								key={keys}
								link={item?.link}
								title={item?.title}
								image={item?.image}
							/>
						))
					) : (
						<></>
					)}
				</motion.div>
			</div>
		</section>
	);
};

export default FourImageGrid;
