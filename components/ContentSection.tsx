import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import Paragraph from "./Elements/Paragraph";
import {fadeIn} from "../animations/animations";

interface IProps {
	title: string;
	subtitle: string;

	bottomContent: {
		title: string;
		titleTwo: string;
		paragraph: string;
		mainContent: string;
		paragraphTwo: string;
		image: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				height: number;
				width: number;
			};
		};
	};
}

const ContentSection: FC<IProps> = ({title, subtitle, bottomContent}) => {
	return (
		<section className="overflow-hidden lg:px-0 bg-darkRed pt-28">
			<div className="container px-4 mx-auto mb-10 lg:px-0 lg:mb-28">
				<h2 className="mb-2 text-6xl font-bold leading-none text-center text-white lg:text-left md:text-8xl xl:text-10xl tracking-px-n">
					{title}
				</h2>
				<h2 className="text-xl font-bold leading-none text-center lg:text-left md:text-8xl xl:text-3xl text-goldPrime tracking-px-n">
					{subtitle}
				</h2>
			</div>
			<div className="flex flex-col-reverse items-center lg:flex-row xl:items-start">
				<div
					className="w-full h-full lg:h-[85vh] px-8 bg-center bg-no-repeat bg-cover lg:w-1/2 xl:px-10"
					style={{
						backgroundImage: `url("${bottomContent?.image?.sourceUrl}")`,
					}}
				>
					<Image
						alt={bottomContent?.image?.altText}
						src={bottomContent?.image?.sourceUrl}
						width={bottomContent?.image?.mediaDetails?.width}
						height={bottomContent?.image?.mediaDetails?.height}
						className="block object-cover object-center w-full h-full lg:hidden"
					/>
				</div>
				<div className="w-full p-8 lg:w-1/2 xl:flex-1 xl:px-10 xl:pl-20">
					<div className="flex flex-col items-center max-w-none lg:items-start lg:max-w-xl">
						<div className="pb-10 border-b lg:pb-32 border-goldPrime mb-11">
							<Paragraph
								content={bottomContent?.mainContent}
								tailwindStyling="lg:max-w-lg text-white text-left text-medium"
							/>
						</div>
						<div className="flex flex-col gap-6 lg:flex-row">
							<div className="w-auto lg:w-1/2">
								<div className="lg:max-w-xs">
									<h3 className="mb-4 text-xl font-semibold tracking-wider text-goldPrime">
										{bottomContent?.title}
									</h3>
									<Paragraph
										content={bottomContent?.paragraph}
										tailwindStyling="lg:max-w-lg py-6 text-white text-left text-base"
									/>
								</div>
							</div>
							<div className="w-auto lg:w-1/2">
								<div className="lg:max-w-xs">
									<h3 className="mb-4 text-xl font-semibold tracking-wider text-goldPrime">
										{bottomContent?.titleTwo}
									</h3>
									<Paragraph
										content={bottomContent?.paragraphTwo}
										tailwindStyling="lg:max-w-lg py-6 text-white text-left text-base"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContentSection;
