import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import DOMPurify from "isomorphic-dompurify";
import React, {useEffect, useRef, FC} from "react";
import styles from "../styles/components/ContentSlider.module.scss";

interface IProps {
	content: {
		tag: string;
		title: string;
		paragraph: string;
		publishedDate: string;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		backgroundVideoUrl: string;
		backgroundImageOrVideo: string;
		backgroundImage: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
	contentTwo: {
		tag: string;
		title: string;
		paragraph: string;
		publishedDate: string;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		backgroundVideoUrl: string;
		backgroundImageOrVideo: string;
		backgroundImage: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
	contentThree: {
		tag: string;
		title: string;
		paragraph: string;
		publishedDate: string;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		backgroundVideoUrl: string;
		backgroundImageOrVideo: string;
		backgroundImage: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
}

// Styling Components
const ContentSliderStyling = styled.div`
	width: 100%;
	height: 100%;
`;

const ContentSlider: FC<IProps> = ({content, contentTwo, contentThree}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden paragraph mt-2 text-white text-base text-left leading-[1.5rem]";
		} else {
			contentStyling =
				"block paragraph mt-2 text-white text-base text-left leading-[1.5rem]";
		}
		return contentStyling;
	}

	function createTrimmedParagraphMarkup(paragraphContent: string) {
		const sanitizedContent: string = DOMPurify.sanitize(paragraphContent);

		return {
			__html: `${sanitizedContent.substring(0, 185)}...`,
		};
	}

	// Content Slider
	const mainRef = useRef<HTMLDivElement>(null);
	const postRef = useRef<HTMLDivElement>(null);
	const mainImageVideoTailwindcss: string = `object-cover object-center w-full h-full`;
	const mainContentTailwindcss: string = `absolute top-[100%] right-0 left-0 bottom-0 w-full h-full`;
	const postContentTailwindcss: string = `relative px-8  py-4 text-white transition-all duration-75 ease-in-out opacity-30`;

	// Full Screen Nav Revealed Styling
	const mainPost: string = styles.mainPost;
	const mainActive: string = styles.mainActive;
	const mainNotActive: string = styles.mainNotActive;

	// Sub post (goldYellow Squares)
	const post: string = styles.post;
	const postPost: string = styles.postPost;
	const postActive: string = styles.postActive;
	const postNotActive: string = styles.postNotActive;

	const progressBarFill: string = styles.progressBarFill;
	const progressBarFillActive: string = styles.progressBarFillActive;

	useEffect(() => {
		// Main Content
		const mainParentElement: HTMLDivElement | null = mainRef?.current;
		const mainChildElements: NodeListOf<Element> | undefined =
			mainParentElement?.querySelectorAll<HTMLDivElement>(
				".mainPost > article"
			);

		// Post Content
		const postParentElement: HTMLDivElement | null = postRef?.current;
		const postChildElements: NodeListOf<Element> | undefined =
			postParentElement?.querySelectorAll<HTMLDivElement>(
				".postPost > article"
			);

		let currentIndex: number = 0;

		const intervalId: NodeJS.Timer = setInterval(() => {
			if (mainChildElements && postChildElements) {
				const currentMainPostChild = mainChildElements[currentIndex];
				const nextMainPostIndex =
					currentIndex + 1 >= mainChildElements.length ? 0 : currentIndex + 1;
				const nextMainPostChild = mainChildElements[nextMainPostIndex];

				const currentPostChild = postChildElements[currentIndex];
				const nextPostIndex =
					currentIndex + 1 >= postChildElements.length ? 0 : currentIndex + 1;
				const nextPostChild = postChildElements[nextPostIndex];

				if (
					currentMainPostChild &&
					nextMainPostChild &&
					currentPostChild &&
					nextPostChild
				) {
					// Rest of the code that uses currentMainPostChild, nextMainPostChild,
					// Main Content
					currentMainPostChild.classList.remove(mainActive);
					currentMainPostChild.classList.add(mainNotActive);
					nextMainPostChild.classList.remove(mainNotActive);
					nextMainPostChild.classList.add(mainActive);

					// Post Content
					currentPostChild.classList.remove(postActive);
					currentPostChild.classList.add(postNotActive);
					nextPostChild.classList.remove(postNotActive);
					nextPostChild.classList.add(postActive);
					currentIndex = nextMainPostIndex;
				}
			}
		}, 7000);

		return () => clearInterval(intervalId);
	}, [mainActive, mainNotActive, postActive, postNotActive]);

	return (
		<ContentSliderStyling className="w-full h-full">
			<div
				className="h-[100vh] sm:h-[65vh] lg:h-[100vh] grid relative gap-y-[2vh]"
				style={{
					gridTemplateRows: "1fr 3fr 1.5fr",
					gridTemplateColumns: "50px 1fr 1fr 1fr 1fr 50px",
				}}
			>
				<div
					className="relative h-full"
					style={{gridRow: "1 / 4", gridColumn: "1 / 7"}}
				>
					<div className={`mainPost ${mainPost}`} ref={mainRef}>
						<article
							className={`main-post ${mainActive} ${mainContentTailwindcss}`}
						>
							<div className="absolute top-0 bottom-0 left-0 w-full h-full main-post__image">
								{/* Video */}
								<video
									autoPlay
									muted
									loop
									className={
										content?.backgroundImageOrVideo === "Video"
											? `block ${mainImageVideoTailwindcss}`
											: ` hidden`
									}
								>
									<source
										src={contentTwo?.backgroundVideoUrl}
										type="video/mp4"
									/>
								</video>
								{/* Image */}
								<Image
									width={content?.backgroundImage?.mediaDetails?.width}
									height={content?.backgroundImage?.mediaDetails?.height}
									className={
										content?.backgroundImageOrVideo === "Image"
											? `block ${mainImageVideoTailwindcss}`
											: ` hidden`
									}
									src={content?.backgroundImage?.sourceUrl}
									alt={`${content?.backgroundImage?.altText} image`}
								/>
							</div>
							<div className="absolute top-[35%] sm:top-[50%] lg:top-[20%] xl:top-[25%] 2xl:top-[35%] left-[4%] transform translate-y-[-40%] text-white w-[90%]">
								<div className="inline-flex m-0 overflow-hidden tag">
									<span className="py-[6px] px-6 bg-goldYellow">
										{content?.tag}
									</span>
								</div>
								<h2
									className="title py-4 lg:py-8 text-white text-12xl w-full lg:w-[55rem] leading-[4.5rem]"
									style={{textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)"}}
								>
									{content?.title}
								</h2>
								<Link
									href={content?.buttonLink?.url}
									target={content?.buttonLink?.target}
									className="postLink text-white uppercase tracking-[0.25rem] inline-flex items-center no-underline hover:text-goldYellow hover:stroke-goldYellow"
								>
									<span className="font-bold text-medium">
										{content?.buttonLink?.title}
									</span>
									<svg
										className="ml-[12px]"
										width="37"
										height="12"
										viewBox="0 0 37 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M0 6H36.0001M36.0001 6L31.0001 1M36.0001 6L31.0001 11"
											stroke="white"
										/>
									</svg>
								</Link>
							</div>
						</article>
						<article
							className={`main-post ${mainNotActive} ${mainContentTailwindcss}`}
						>
							<div className="absolute top-0 bottom-0 left-0 w-full h-full">
								{/* Video */}
								<video
									autoPlay
									muted
									loop
									className={
										contentTwo?.backgroundImageOrVideo === "Video"
											? `block ${mainImageVideoTailwindcss}`
											: ` hidden`
									}
								>
									<source
										src={contentTwo?.backgroundVideoUrl}
										type="video/mp4"
									/>
								</video>
								{/* Image */}
								<Image
									width={contentTwo?.backgroundImage?.mediaDetails?.width}
									height={contentTwo?.backgroundImage?.mediaDetails?.height}
									className={
										contentTwo?.backgroundImageOrVideo === "Image"
											? `block ${mainImageVideoTailwindcss}`
											: ` hidden`
									}
									src={contentTwo?.backgroundImage?.sourceUrl}
									alt={`${contentTwo?.backgroundImage?.altText} image`}
								/>
							</div>
							<div className="absolute top-[35%] sm:top-[50%] lg:top-[20%] xl:top-[25%] 2xl:top-[35%] left-[4%] transform translate-y-[-40%] text-white w-[90%]">
								<div className="inline-flex m-0 overflow-hidden tag">
									<span className="py-[6px] px-6 bg-goldYellow">
										{contentTwo?.tag}
									</span>
								</div>
								<h2
									className="title py-4 lg:py-8 text-white text-12xl w-full lg:w-[55rem] leading-[4.5rem]"
									style={{textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)"}}
								>
									{contentTwo?.title}
								</h2>
								<Link
									href={contentTwo?.buttonLink?.url}
									target={contentTwo?.buttonLink?.target}
									className="postLink text-white uppercase tracking-[0.25rem] inline-flex items-center no-underline hover:text-orange hover:stroke-none"
								>
									<svg
										className="mr-[12px]"
										width="30"
										height="30"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle
											cx="10"
											cy="10"
											r="9"
											stroke="#fa1d26"
											strokeWidth="2"
										/>
										<path d="M14 10L8 6V14L14 10Z" fill="white" />
									</svg>
									<span className="font-bold text-medium">
										{contentTwo?.buttonLink?.title}
									</span>
								</Link>
							</div>
						</article>
						<article
							className={`main-post ${mainNotActive} ${mainContentTailwindcss}`}
						>
							<div className="absolute top-0 bottom-0 left-0 w-full h-full">
								{/* Video */}
								<video
									autoPlay
									muted
									loop
									className={
										contentThree?.backgroundImageOrVideo === "Video"
											? `block ${mainImageVideoTailwindcss}`
											: ` hidden`
									}
								>
									<source
										src={contentThree?.backgroundVideoUrl}
										type="video/mp4"
									/>
								</video>
								{/* Image */}
								<Image
									width={contentThree?.backgroundImage?.mediaDetails?.width}
									height={contentThree?.backgroundImage?.mediaDetails?.height}
									className={
										contentThree?.backgroundImageOrVideo === "Image"
											? `block ${mainImageVideoTailwindcss}`
											: ` hidden`
									}
									src={contentThree?.backgroundImage?.sourceUrl}
									alt={`${contentThree?.backgroundImage?.altText} image`}
								/>
							</div>
							<div className="absolute top-[35%] sm:top-[50%] lg:top-[20%] xl:top-[25%] 2xl:top-[35%] left-[4%] transform translate-y-[-40%] text-white w-[90%]">
								<div className="inline-flex m-0 overflow-hidden tag">
									<span className="py-[6px] px-6 bg-goldYellow">
										{contentThree?.tag}
									</span>
								</div>
								<h2
									className="title py-4 lg:py-8 text-white text-12xl w-full lg:w-[55rem] leading-[4.5rem]"
									style={{textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)"}}
								>
									{contentThree?.title}
								</h2>
								<Link
									href={contentThree?.buttonLink?.url}
									target={contentThree?.buttonLink?.target}
									className="postLink text-white uppercase tracking-[0.25rem] inline-flex items-center no-underline hover:text-goldYellow hover:stroke-goldYellow"
								>
									<span className="font-bold text-medium">
										{contentThree?.buttonLink?.title}
									</span>
									<svg
										className="ml-[12px]"
										width="37"
										height="12"
										viewBox="0 0 37 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M0 6H36.0001M36.0001 6L31.0001 1M36.0001 6L31.0001 11"
											stroke="white"
										/>
									</svg>
								</Link>
							</div>
						</article>
					</div>
				</div>

				<div ref={postRef} className={`postPost ${postPost}`}>
					<article
						className={`${post} ${postActive} ${postContentTailwindcss}`}
					>
						<Link
							href={content?.buttonLink?.url}
							target={content?.buttonLink?.target}
						>
							<div className="absolute top-0 left-0 h-[5px] w-full">
								<div
									className={`${progressBarFill} h-[inherit] bg-orange transition-all ease-in-out duration-75`}
								/>
							</div>
							<header className="flex items-center justify-between header">
								<span className="text-tiny text-white uppercase font-[600]">
									{content?.tag}
								</span>
								<span className="text-tiny text-white uppercase font-[600]">
									{content?.publishedDate}
								</span>
							</header>
							<div className="flex flex-col justify-between gap-4">
								<h3
									className="title py-4 mt-8 text-white text-5xl leading-[2rem]"
									style={{textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)"}}
								>
									{content?.title}
								</h3>
								<div
									className={isParagraphContent(content?.paragraph)}
									dangerouslySetInnerHTML={createTrimmedParagraphMarkup(
										content?.paragraph
									)}
								/>
							</div>
						</Link>
					</article>
					<article
						className={`${post} ${postNotActive} ${postContentTailwindcss}`}
					>
						<Link
							href={contentTwo?.buttonLink?.url}
							target={contentTwo?.buttonLink?.target}
						>
							<div className="absolute top-0 left-0 h-[5px] w-full">
								<div
									className={`${progressBarFill} h-[inherit] bg-orange transition-all ease-in-out duration-75`}
								/>
							</div>
							<header className="flex items-center justify-between header">
								<span className="text-tiny text-white uppercase font-[600]">
									{contentTwo?.tag}
								</span>
								<span className="text-tiny text-white uppercase font-[600]">
									{contentTwo?.publishedDate}
								</span>
							</header>
							<div className="flex flex-col justify-between gap-4">
								<h3
									className="title py-4 mt-8 text-white text-5xl leading-[2rem]"
									style={{textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)"}}
								>
									{contentTwo?.title}
								</h3>
								<div
									className={isParagraphContent(contentTwo?.paragraph)}
									dangerouslySetInnerHTML={createTrimmedParagraphMarkup(
										contentTwo?.paragraph
									)}
								/>
							</div>
						</Link>
					</article>
					<article
						className={`${post} ${postNotActive} ${postContentTailwindcss}`}
					>
						<Link
							href={contentThree?.buttonLink?.url}
							target={contentThree?.buttonLink?.target}
						>
							<div className="absolute top-0 left-0 h-[5px] w-full">
								<div
									className={`${progressBarFill} h-[inherit] bg-orange transition-all ease-in-out duration-75`}
								/>
							</div>
							<header className="flex items-center justify-between header">
								<span className="text-tiny text-white uppercase font-[600]">
									{contentThree?.tag}
								</span>
								<span className="text-tiny text-white uppercase font-[600]">
									{contentThree?.publishedDate}
								</span>
							</header>
							<div className="flex flex-col justify-between gap-4">
								<h3
									className="title py-4 mt-8 text-white text-5xl leading-[2rem]"
									style={{textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)"}}
								>
									{contentThree?.title}
								</h3>
								<div
									className={isParagraphContent(contentThree?.paragraph)}
									dangerouslySetInnerHTML={createTrimmedParagraphMarkup(
										contentThree?.paragraph
									)}
								/>
							</div>
						</Link>
					</article>
				</div>
			</div>
		</ContentSliderStyling>
	);
};

export default ContentSlider;
