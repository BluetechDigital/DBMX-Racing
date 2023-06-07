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
					className=" mb-20 text-darkerRed text-center tracking-normal leading-normal sm:leading-[2.75rem] font-semibold text-lg sm:text-3xl md:text-4xl"
				>
					{title}
				</motion.h2>
				<div className="max-w-6xl mx-auto">
					<motion.div
						variants={stagger}
						className="grid items-center justify-center grid-cols-2 gap-4 lg:grid-cols-6 lg:justify-between"
					>
						{logoGrid?.length > 0 ? (
							logoGrid.map((item: any, keys: any) => (
								<LogoCard key={keys} image={item?.image} />
							))
						) : (
							<></>
						)}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Logos;
