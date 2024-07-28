"use client";

// Imports
import React, {FC, Fragment} from "react";
import {usePageContext} from "@/context/providers/PageContextProvider";

// Components
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import CTATwo from "@/components/CTATwo";
import HeroTwo from "@/components/HeroTwo";
import ContactInfo from "@/components/ContactInfo";
import ProductGrid from "@/components/ProductGrid";
import MeetTheTeam from "@/components/MeetTheTeam";
import OurServices from "@/components/OurServices";
import ContactForm from "@/components/ContactForm";
import ServicesGrid from "@/components/ServicesGrid";
import GoogleReviews from "@/components/GoogleReviews";
import TitleParagraph from "@/components/TitleParagraph";
import SocialMediaGrid from "@/components/SocialMediaGrid";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import TitleContentImage from "@/components/TitleContentImage";
import AboutContentImage from "@/components/AboutContentImage";

const RenderFlexibleContent: FC = () => {
	const content = usePageContext();
	const FlexibleContent: any = content?.postTypeFlexibleContent;

	// Components Key Value Pairs
	const componentMap: any = {
		[`${FlexibleContent}_Cta`]: CTA,
		// [`${FlexibleContent}_Hero`]: Hero,
		[`${FlexibleContent}_Logos`]: Logos,
		[`${FlexibleContent}_CtaTwo`]: CTATwo,
		[`${FlexibleContent}_HeroTwo`]: HeroTwo,
		[`${FlexibleContent}_ProductGrid`]: ProductGrid,
		[`${FlexibleContent}_OurServices`]: OurServices,
		[`${FlexibleContent}_ContactForm`]: ContactForm,
		[`${FlexibleContent}_MeetTheTeam`]: MeetTheTeam,
		[`${FlexibleContent}_ContactInfo`]: ContactInfo,
		[`${FlexibleContent}_ServicesGrid`]: ServicesGrid,
		[`${FlexibleContent}_GoogleReviews`]: GoogleReviews,
		[`${FlexibleContent}_TitleParagraph`]: TitleParagraph,
		[`${FlexibleContent}_SocialMediaGrid`]: SocialMediaGrid,
		[`${FlexibleContent}_TestimonialsGrid`]: TestimonialsGrid,
		[`${FlexibleContent}_TitleContentImage`]: TitleContentImage,
		[`${FlexibleContent}_AboutContentImage`]: AboutContentImage,
	};

	return (
		<>
			{content?.content?.length > 0 &&
				content?.content?.map((item: any, index: number) => (
					<section
						key={index}
						className={item?.displaySection ? "block" : "hidden"}
					>
						{componentMap[item?.fieldGroupName] && (
							<Fragment>
								{React.createElement(componentMap[item?.fieldGroupName], {
									...item,
								})}
							</Fragment>
						)}
					</section>
				))}
		</>
	);
};

export default RenderFlexibleContent;
