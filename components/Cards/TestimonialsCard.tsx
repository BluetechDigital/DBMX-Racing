// Imports
import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {ITestimonialsCard} from "@/types/components";
import {initial, stagger} from "@/animations/animations";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import RenderStars from "@/components/Elements/RenderStars";

const TestimonialsCard: FC<ITestimonialsCard> = ({
	name,
	image,
	rating,
	position,
	paragraph,
}) => {
	return (
		<>
			<div className="flex flex-col items-center justify-center gap-4 p-8 bg-white border-2 border-pureBlack border-solid w-full h-full min-h-[400px] sm:min-h-[310px]">
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="flex flex-col justify-between h-full"
				>
					<Paragraph
						content={
							paragraph?.length > 275
								? paragraph?.substring(0, 275) + "..."
								: paragraph
						}
						tailwindStyling="text-center lg:text-left text-pureBlack text-paragraph"
					/>
					<div className="flex items-center justify-center my-2 gap-4">
						<div className="w-full mb-1 h-[2px] bg-grey rounded-full hidden sm:block" />
						<div className="w-full sm:w-[12rem] flex flex-wrap items-center justify-center lg:justify-start mb-2">
							<RenderStars rating={5} color="Yellow" />
						</div>
					</div>
					<div>
						<div className="flex flex-wrap items-center justify-between px-5 -m-2 gap-4">
							<div className="flex items-center justify-between gap-2">
								<div className="w-auto p-2">
									<Image
										className="bg-lightGreyTwo m-auto lg:mx-0 rounded-full w-16 h-16 object-cover object-center"
										alt={image?.altText}
										src={
											image?.sourceUrl
												? image?.sourceUrl
												: `/img/logos/default-avatar-profile.jpg`
										}
										width={
											image?.mediaDetails?.width
												? image?.mediaDetails?.width
												: 500
										}
										height={
											image?.mediaDetails?.height
												? image?.mediaDetails?.height
												: 500
										}
									/>
								</div>
								<div className="flex flex-col gap-1">
									<span className="text-pureBlack text-medium uppercase font-VitroTrialHeavy text-center lg:text-left">
										{name}
									</span>
									<span
										className={
											position
												? "font-NeoGramTrial text-base text-pureBlack text-center lg:text-left"
												: "hidden"
										}
									>
										{position}
									</span>
								</div>
							</div>
							<div className="ml-5">
								<svg
									width="50"
									height="50"
									fill="none"
									viewBox="0 0 50 50"
									className="w-10 h-10 sm:w-12 sm:h-12"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clipPath="url(#clip0_2_9526)">
										<path
											d="M46.6421 9.99512C44.3826 7.45693 41.6404 6.16992 38.4917 6.16992C35.6618 6.16992 33.2628 7.17764 31.3607 9.16494C29.4708 11.1396 28.5125 13.5922 28.5125 16.4549C28.5125 19.1602 29.4804 21.5708 31.3895 23.62C33.0735 25.4278 35.1949 26.5777 37.7062 27.0464C37.2671 30.376 34.3236 33.3897 28.94 36.0157L27.9706 36.4887L31.9453 43.8266L32.8426 43.3718C44.2274 37.6009 50 29.4451 50 19.131C50 15.5726 48.8703 12.4989 46.6421 9.99512ZM32.8003 41.0638L30.8089 37.3878C36.7974 34.2498 39.8315 30.4776 39.8315 26.1647V25.2413L38.914 25.1374C36.4428 24.8577 34.4764 23.9004 32.9025 22.2106C31.3399 20.5332 30.5802 18.6506 30.5802 16.4549C30.5802 14.1104 31.3243 12.1936 32.8546 10.5945C34.3724 9.0085 36.2165 8.2375 38.4918 8.2375C41.0606 8.2375 43.2214 9.26211 45.0974 11.3697C47.0051 13.5131 47.9324 16.0518 47.9324 19.1309C47.9324 23.8581 46.6012 28.1259 43.9761 31.8156C41.4713 35.3361 37.7143 38.4442 32.8003 41.0638Z"
											className="fill-pureBlack"
										/>
										<path
											d="M18.617 9.99043C16.3325 7.45537 13.5789 6.16992 10.4325 6.16992C7.5999 6.16992 5.21172 7.17949 3.33467 9.17051C1.47373 11.1443 0.530078 13.5951 0.530078 16.4549C0.530078 19.1601 1.49805 21.5707 3.40693 23.62C5.0874 25.4239 7.1833 26.5728 9.64795 27.0436C9.21406 30.3757 6.29512 33.3909 0.954688 36.0174L0 36.4867L3.87578 43.8299L4.78193 43.3727C16.2185 37.6021 22.0173 29.4459 22.0173 19.1309C22.0172 15.5697 20.873 12.4944 18.617 9.99043ZM4.75186 41.0603L2.81475 37.3899C8.75986 34.2508 11.7723 30.4777 11.7723 26.1646V25.2433L10.8568 25.1376C8.43633 24.8583 6.49414 23.9009 4.91973 22.2105C3.35713 20.5332 2.59766 18.6505 2.59766 16.4549C2.59766 14.1073 3.33086 12.1885 4.83896 10.589C6.33066 9.00674 8.16045 8.2375 10.4325 8.2375C13.0039 8.2375 15.1788 9.26357 17.0809 11.3745C19.0112 13.5167 19.9496 16.0539 19.9496 19.1309C19.9496 23.8573 18.6127 28.1245 15.9757 31.8139C13.46 35.3334 9.68691 38.441 4.75186 41.0603Z"
											className="fill-pureBlack"
										/>
									</g>
									<defs>
										<clipPath id="clip0_2_9526">
											<rect width="50" height="50" fill="white" />
										</clipPath>
									</defs>
								</svg>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</>
	);
};

export default TestimonialsCard;
