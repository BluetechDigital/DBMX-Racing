// Imports
import Image from "next/image";
import {FC, Fragment} from "react";
import dateFormat from "dateformat";
import {motion} from "framer-motion";
import {IGoogleReviewsCard} from "@/types/components";
import {stagger, initial} from "@/animations/animations";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const GoogleReviewsCard: FC<IGoogleReviewsCard> = ({
	name,
	date,
	rating,
	textarea,
	profilePhoto,
}) => {
	const ratingArray = Array.from({length: rating}, (_, index) => index);
	return (
		<>
			<motion.div
				initial={initial}
				variants={stagger}
				whileInView="animate"
				viewport={{once: true}}
				className="flex flex-col justify-start gap-4 p-8 bg-white border-2 border-solid border-pureBlack w-full h-full min-h-[400px] sm:min-h-[310px]"
			>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="flex flex-row justify-between item-center"
				>
					<div className="flex flex-col gap-4 mx-auto lg:mx-0 sm:flex-row">
						<Image
							width={500}
							height={500}
							alt={`${name ? name : "Default Avatar"} profile image`}
							src={
								profilePhoto
									? `${profilePhoto}`
									: `/img/Logos/default-avatar-profile.jpg`
							}
							className="object-cover object-center mx-auto sm:mx-0 w-16 h-16 transition-all duration-500 ease-in-out rounded-full cursor-pointer ring-pureBlack"
						/>
						<div className="flex flex-col gap-1">
							<span className="text-pureBlack text-medium uppercase font-VitroTrialHeavy text-center lg:text-left">
								{name}
							</span>
							<span className="font-NeoGramTrial text-base text-pureBlack text-center lg:text-left">
								{dateFormat(date, "mmmm d, yyyy")}
							</span>
						</div>
					</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 48 48"
						width="96px"
						height="96px"
						className="hidden w-8 h-8 fill-current lg:block"
					>
						<path
							fill="#FFC107"
							d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
						/>
						<path
							fill="#FF3D00"
							d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
						/>
						<path
							fill="#4CAF50"
							d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
						/>
						<path
							fill="#1976D2"
							d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
						/>
					</svg>
				</motion.div>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="flex flex-col gap-4"
				>
					<span className="flex flex-row items-center justify-center gap-1 text-lg font-semibold tracking-normal text-center text-pureBlack">
						{ratingArray?.length > 0 ? (
							ratingArray?.map((item: any, index: number) => (
								<Fragment key={index}>
									<svg
										fill="#f6ad37"
										viewBox="0 0 16 16"
										xmlns="http://www.w3.org/2000/svg"
										className="object-contain object-center w-[20px] h-[20px]"
									>
										<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
										<g
											id="SVGRepo_tracerCarrier"
											strokeLinecap="round"
											strokeLinejoin="round"
										></g>
										<g id="SVGRepo_iconCarrier">
											{" "}
											<g>
												{" "}
												<polygon points="8 11.43 3.67 14 4.84 9.19 1 5.97 6.05 5.57 8 1 9.95 5.57 15 5.97 11.15 9.19 12.33 14 8 11.43"></polygon>{" "}
											</g>{" "}
										</g>
									</svg>
								</Fragment>
							))
						) : (
							<></>
						)}
					</span>
					<Paragraph
						content={
							textarea?.length > 200
								? textarea?.substring(0, 200) + "..."
								: textarea
						}
						tailwindStyling="text-center lg:text-left text-pureBlack text-paragraph"
					/>
				</motion.div>
			</motion.div>
		</>
	);
};

export default GoogleReviewsCard;
