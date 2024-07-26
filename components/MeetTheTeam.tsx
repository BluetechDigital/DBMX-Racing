// Imports
import {
	stagger,
	initial,
	fadeInUp,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IMeetTheTeam} from "@/types/components/index";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import MeetTheTeamCard from "@/components/Cards/MeetTheTeamCard";

const MeetTheTeam: FC<IMeetTheTeam> = ({title, paragraph, teamGrid}) => {
	return (
		<>
			<div
				className="py-12 px-4 bg-white bg-center bg-no-repeat bg-cover"
				style={{
					backgroundImage: `linear-gradient(
										0deg,
										rgba(255, 255, 255, 1),
										rgba(255, 255, 255, 0.95),
										rgba(255, 255, 255, 0.85),
										rgba(255, 255, 255, 0.80)
									),url("/svg/background/grid-background-06.svg")`,
				}}
			>
				<div className="lg:container m-auto flex flex-col items-center gap-6">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full"
					>
						<motion.h3
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="my-3 max-w-xl mx-auto lg:mx-0 text-pureBlack font-VitroTrialHeavy uppercase italic leading-relaxed text-center lg:text-left text-2xl lg:text-4xl"
						>
							{title}
						</motion.h3>
						<Paragraph
							content={paragraph}
							tailwindStyling="max-w-full lg:max-w-xl text-pureBlack text-lg text-center lg:text-left"
						/>
					</motion.div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6 px-0 gap-6 w-full">
						{teamGrid?.length > 0 ? (
							teamGrid?.map((item: any, index: number) => (
								<Fragment key={index}>
									<motion.div
										custom={index}
										initial={initial}
										whileInView="animate"
										viewport={{once: true}}
										variants={arrayLoopStaggerChildren}
									>
										<MeetTheTeamCard
											name={item?.name}
											image={item?.image}
											position={item?.position}
											twitterLink={item?.twitterLink}
											facebookLink={item?.facebookLink}
											linkedinLink={item?.linkedinLink}
											instagramLink={item?.instagramLink}
										/>
									</motion.div>
								</Fragment>
							))
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default MeetTheTeam;
