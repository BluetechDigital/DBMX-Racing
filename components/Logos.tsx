import {FC} from "react";
import {motion} from "framer-motion";
import {fadeIn, stagger} from "../animations/animations";

// Components
import LogoCard from "../components/Cards/LogoCard";

interface IProps {
	title: string;
	logoGrid: [
		{
			id: string;
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

const Logos: FC<IProps> = ({title, logoGrid}) => {
	return (
		<section className={`py-20 px-4 lg:px-0 bg-white`}>
			<div className="container px-0 mx-auto">
				<motion.h2
					variants={fadeIn}
					className=" mb-20 text-greenTwo text-center tracking-normal leading-[2.75rem] font-semibold text-2xl sm:text-3xl lg:text-5xl"
				>
					{title}
				</motion.h2>
				<div className="max-w-6xl mx-auto">
					<motion.div
						variants={stagger}
						className="grid items-center justify-center grid-cols-2 gap-4 lg:grid-cols-6 lg:justify-between"
					>
						{logoGrid.map((keys) => (
							<LogoCard
								image={keys?.image}
								key={keys?.id || Math.floor(Math.random() * 1001)}
							/>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Logos;
