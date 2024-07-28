"use client";

// Imports
import useWindowSize from "@/Hooks/useWindowSize";
import {useGlobalContext} from "@/context/Global";
import {LazyMotion, domMax, motion} from "framer-motion";
import {FC, Fragment, useEffect, useRef, useState} from "react";

// Components
import GoogleReviewsCard from "@/components/Cards/GoogleReviewsCard";

const GoogleReviewsSlider: FC = () => {
	const {width} = useWindowSize();
	const globalContext = useGlobalContext();
	const [activeSlide, setActiveSlide] = useState(0);
	const [largeTranslate, setLargeTranslate] = useState(0);
	const largeSlideRef = useRef<HTMLDivElement | null>(null);
	const [activeImage, setActiveImage] = useState<any | null>(null);

	// Slider Handler
	const arrowHandler = (direction: "prev" | "next") => {
		if (direction === "prev") {
			if (activeSlide === 0) {
				return setActiveSlide(
					globalContext?.googleReviewsFeed?.reviewsArray?.length - 1
				);
			}

			return setActiveSlide(activeSlide - 1);
		}

		if (direction === "next") {
			if (
				activeSlide ===
				globalContext?.googleReviewsFeed?.reviewsArray?.length - 1
			) {
				return setActiveSlide(0);
			}

			return setActiveSlide(activeSlide + 1);
		}
	};

	useEffect(() => {
		if (largeSlideRef.current) {
			setLargeTranslate(-(activeSlide * largeSlideRef.current.offsetWidth));
		}
	}, [activeSlide]);

	useEffect(() => {
		setActiveSlide(0);
	}, [width]);

	return (
		<>
			<LazyMotion features={domMax}>
				<div className="w-full py-0 px-4 lg:py-10 pl-3/20 overflow-x-hidden">
					<div className="hidden w-full lg:flex items-center justify-end gap-8">
						{/* Prev */}
						<motion.button
							initial={{opacity: 0}}
							animate={{opacity: 1}}
							exit={{opacity: 0}}
							className="block"
							onClick={() => arrowHandler("prev")}
						>
							<span className="block w-fit h-[50px] bg-primary-default p-2 hover:bg-primary-dark transition-all ease-in-out duration-500">
								<svg
									width="800px"
									height="800px"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="w-full h-full object-center object-contain rotate-[90deg]"
								>
									<g id="SVGRepo_bgCarrier" strokeWidth="0" />

									<g
										id="SVGRepo_tracerCarrier"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>

									<g id="SVGRepo_iconCarrier">
										{" "}
										<path
											d="M6.34292 7.75734L4.92871 9.17155L11.9998 16.2426L19.0708 9.17158L17.6566 7.75737L11.9998 13.4142L6.34292 7.75734Z"
											fill="#ffffff"
										/>{" "}
									</g>
								</svg>
							</span>
						</motion.button>
						{/* Next */}
						<motion.button
							initial={{opacity: 0}}
							animate={{opacity: 1}}
							exit={{opacity: 0}}
							className="block rotate-180"
							onClick={() => arrowHandler("next")}
						>
							<span className="block w-fit h-[50px] bg-primary-default p-2 hover:bg-primary-dark transition-all ease-in-out duration-500">
								<svg
									width="800px"
									height="800px"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="w-full h-full object-center object-contain rotate-[90deg]"
								>
									<g id="SVGRepo_bgCarrier" strokeWidth="0" />

									<g
										id="SVGRepo_tracerCarrier"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>

									<g id="SVGRepo_iconCarrier">
										{" "}
										<path
											d="M6.34292 7.75734L4.92871 9.17155L11.9998 16.2426L19.0708 9.17158L17.6566 7.75737L11.9998 13.4142L6.34292 7.75734Z"
											fill="#ffffff"
										/>{" "}
									</g>
								</svg>
							</span>
						</motion.button>
					</div>
					{/* <motion.div
						initial={{translateX: "0px"}}
						animate={{translateX: `${largeTranslate}px`}}
						transition={{duration: 0.5, type: "spring"}}
						className="flex flex-row items-center py-10"
					>
						{globalContext?.googleReviewsFeed?.reviewsArray?.length > 0 ? (
							globalContext?.googleReviewsFeed?.reviewsArray?.map(
								(item: any, index: number) => (
									<Fragment key={index}>
										<div
											ref={largeSlideRef}
											className={`flex-shrink-0 w-4/5 lg:w-2/6 pr-3 sm:pr-4 transition-opacity duration-500 ease-in-out opacity-100`}
										>
											<GoogleReviewsCard
												date={item?.time}
												textarea={item?.text}
												rating={item?.rating}
												name={item?.author_name}
												profilePhoto={item?.profile_photo_url}
											/>
										</div>
									</Fragment>
								)
							)
						) : (
							<></>
						)}
					</motion.div> */}
					<div className="lg:hidden w-full flex items-center justify-end gap-8">
						{/* Prev */}
						<motion.button
							initial={{opacity: 0}}
							animate={{opacity: 1}}
							exit={{opacity: 0}}
							className="block"
							onClick={() => arrowHandler("prev")}
						>
							<span className="block w-fit h-[50px] bg-primary-default p-2 hover:bg-primary-dark transition-all ease-in-out duration-500">
								<svg
									width="800px"
									height="800px"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="w-full h-full object-center object-contain rotate-[90deg]"
								>
									<g id="SVGRepo_bgCarrier" strokeWidth="0" />

									<g
										id="SVGRepo_tracerCarrier"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>

									<g id="SVGRepo_iconCarrier">
										{" "}
										<path
											d="M6.34292 7.75734L4.92871 9.17155L11.9998 16.2426L19.0708 9.17158L17.6566 7.75737L11.9998 13.4142L6.34292 7.75734Z"
											fill="#ffffff"
										/>{" "}
									</g>
								</svg>
							</span>
						</motion.button>
						{/* Next */}
						<motion.button
							initial={{opacity: 0}}
							animate={{opacity: 1}}
							exit={{opacity: 0}}
							className="block rotate-180"
							onClick={() => arrowHandler("next")}
						>
							<span className="block w-fit h-[50px] bg-primary-default p-2 hover:bg-primary-dark transition-all ease-in-out duration-500">
								<svg
									width="800px"
									height="800px"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="w-full h-full object-center object-contain rotate-[90deg]"
								>
									<g id="SVGRepo_bgCarrier" strokeWidth="0" />

									<g
										id="SVGRepo_tracerCarrier"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>

									<g id="SVGRepo_iconCarrier">
										{" "}
										<path
											d="M6.34292 7.75734L4.92871 9.17155L11.9998 16.2426L19.0708 9.17158L17.6566 7.75737L11.9998 13.4142L6.34292 7.75734Z"
											fill="#ffffff"
										/>{" "}
									</g>
								</svg>
							</span>
						</motion.button>
					</div>
				</div>
			</LazyMotion>
		</>
	);
};

export default GoogleReviewsSlider;
