// Imports
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {ILogos} from "@/types/components/index";
import {fadeIn, initial, stagger, initialTwo} from "@/animations/animations";

const Logos: FC<ILogos> = ({title, logoGrid}) => {
	return (
		<>
			<div className={`py-20 px-4 lg:px-0 bg-white`}>
				<div className="container px-0 mx-auto flex flex-col items-center justify-center gap-4">
					<motion.h2
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="mb-20 text-pureBlack uppercase font-VitroTrialHeavy italic text-center leading-relaxed text-2xl lg:text-4xl"
					>
						{title}
					</motion.h2>
					<div className="max-w-6xl mx-auto">
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="grid items-center justify-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:justify-between"
						>
							{logoGrid?.length > 0 ? (
								logoGrid.map((item: any, index: number) => (
									<Fragment key={index}>
										<Image
											src={item?.image?.sourceUrl}
											alt={`${item?.image?.altText}`}
											width={
												item?.image?.mediaDetails?.width
													? item?.image?.mediaDetails?.width
													: 500
											}
											height={
												item?.image?.mediaDetails?.height
													? item?.image?.mediaDetails?.height
													: 500
											}
											className={
												item?.image?.sourceUrl
													? `block w-[150px] h-full sm:w-[150px] lg:w-full lg:h-[125px] object-contain object-center`
													: `hidden`
											}
										/>
									</Fragment>
								))
							) : (
								<></>
							)}
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Logos;
