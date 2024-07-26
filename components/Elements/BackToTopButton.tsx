"use client";

// Imports
import Link from "next/link";
import {FC, useEffect, useState} from "react";

// Styling
import styles from "@/styles/components/Elements/BackHoverButton.module.scss";

const BackToTopButton: FC = () => {
	// Background color scroll position change
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentPosition = window.scrollY;
			setScrollPosition(currentPosition);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<div
				className={
					scrollPosition > 1000
						? "relative w-fit h-fit xl:block z-[998]"
						: "hidden"
				}
			>
				<div className="fixed right-6 z-20 bottom-[2.5rem] flex justify-center">
					<Link
						href="#"
						target="_self"
						aria-label={`back to the top Button`}
						className={styles.backToTopButton}
					>
						<span className={styles.span}>
							<svg
								width="800px"
								height="800px"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="w-[35px] h-[35px] object-center object-contain rotate-[180deg]"
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
					</Link>
				</div>
			</div>
		</>
	);
};

export default BackToTopButton;
