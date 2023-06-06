// Import
import {FC} from "react";

// Components
import Hero from "@/components/Hero";
import Blogs from "@/components/Blogs";
import Logos from "@/components/Logos";
import HeroTwo from "@/components/HeroTwo";
import HeroThree from "@/components/HeroThree";
import ErrorPage from "@/components/ErrorPage";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import ProductGrid from "@/components/ProductGrid";
import ContentStats from "@/components/ContentStats";
import JumboContent from "@/components/JumboContent";
import StoreLocation from "@/components/StoreLocation";
import ContactBanner from "@/components/ContactBanner";
import ContentSlider from "@/components/ContentSlider";
import FourImageGrid from "@/components/FourImageGrid";
import ContentSection from "@/components/ContentSection";
import TitleParagraph from "@/components/TitleParagraph";
import ContentSliderTwo from "@/components/ContentSliderTwo";

interface IFlexibleContent {
	content: any;
	blogs: [
		{
			node: {
				id: string;
				uri: string;
				date: string;
				title: string;
				template: {
					flexibleContent: {
						flexibleContent: [
							{
								fieldGroupName: string;
								paragraph: string;
								title: string;
							}
						];
					};
				};
				featuredImage: {
					node: {
						altText: string;
						sourceUrl: string;
						mediaDetails: {
							width: number;
							height: number;
						};
					};
				};
			};
		}
	];
	mainMenuLinks: {
		mainMenuLinks: [
			{
				node: {
					id: string;
					url: string;
					label: string;
				};
			}
		];
	};
	navbarMenuLinks: {
		navbarMenuLinks: [
			{
				node: {
					id: string;
					url: string;
					label: string;
				};
			}
		];
	};
	themesOptionsContent: {
		address: string;
		email: string;
		emailTwo: string;
		phoneNumber: string;
		phoneNumberTwo: string;
		copyrightText: string;
		facebookLink: string;
		linkedinLink: string;
		twitterLink: string;
		businessHours: {
			content: string;
		};
	};
	contentSliderPostsContent: {
		content: [
			{
				uri: string;
				date: string;
				title: string;
				template: {
					flexibleContent: {
						flexibleContent: [
							{
								fieldGroupName: string;
								backgroundVideoUrl: string;
								backgroundImageOrVideo: string;
								backgroundImage: {
									altText: string;
									sourceUrl: string;
									mediaDetails: {
										height: number;
										width: number;
									};
								};
							},
							{
								fieldGroupName: string;
								paragraph: string;
								title: string;
							}
						];
					};
				};
			},
			{
				uri: string;
				date: string;
				title: string;
				template: {
					flexibleContent: {
						flexibleContent: [
							{
								fieldGroupName: string;
								backgroundVideoUrl: string;
								backgroundImageOrVideo: string;
								backgroundImage: {
									altText: string;
									sourceUrl: string;
									mediaDetails: {
										height: number;
										width: number;
									};
								};
							},
							{
								fieldGroupName: string;
								paragraph: string;
								title: string;
							}
						];
					};
				};
			},
			{
				uri: string;
				date: string;
				title: string;
				template: {
					flexibleContent: {
						flexibleContent: [
							{
								fieldGroupName: string;
								backgroundVideoUrl: string;
								backgroundImageOrVideo: string;
								backgroundImage: {
									altText: string;
									sourceUrl: string;
									mediaDetails: {
										height: number;
										width: number;
									};
								};
							},
							{
								fieldGroupName: string;
								paragraph: string;
								title: string;
							}
						];
					};
				};
			}
		];
	};
}
const RenderFlexibleContent: FC<IFlexibleContent> = ({
	blogs,
	content,
	mainMenuLinks,
	navbarMenuLinks,
	themesOptionsContent,
	contentSliderPostsContent,
}) => {
	const FlexibleContentComponent =
		"DefaultTemplate_Flexiblecontent_FlexibleContent";
	return (
		<>
			{content?.length > 0 ? (
				content.map((item: any, keys: any) => (
					<div key={keys}>
						{item?.fieldGroupName ===
						`${FlexibleContentComponent}_HeroSection` ? (
							<>
								<HeroTwo
									key={keys}
									title={item?.title}
									email={themesOptionsContent?.email}
									paragraph={item?.paragraph}
									mainMenuLinks={mainMenuLinks?.mainMenuLinks}
									twitterLink={themesOptionsContent?.twitterLink}
									phoneNumber={themesOptionsContent?.phoneNumber}
									linkedinLink={themesOptionsContent?.linkedinLink}
									facebookLink={themesOptionsContent?.facebookLink}
									navbarMenuLinks={navbarMenuLinks?.navbarMenuLinks}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_HeroSectionTwo` ? (
							<>
								<Hero
									title={item?.title}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									buttonLinkTwo={item?.buttonLinkTwo}
									email={themesOptionsContent?.email}
									mainMenuLinks={mainMenuLinks?.mainMenuLinks}
									backgroundVideoUrl={item?.backgroundVideoUrl}
									twitterLink={themesOptionsContent?.twitterLink}
									phoneNumber={themesOptionsContent?.phoneNumber}
									linkedinLink={themesOptionsContent?.linkedinLink}
									facebookLink={themesOptionsContent?.facebookLink}
									navbarMenuLinks={navbarMenuLinks?.navbarMenuLinks}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_HeroSectionThree` ? (
							<>
								<HeroThree
									title={item?.title}
									paragraph={item?.paragraph}
									email={themesOptionsContent?.email}
									backgroundImage={item?.backgroundImage}
									mainMenuLinks={mainMenuLinks?.mainMenuLinks}
									backgroundVideoUrl={item?.backgroundVideoUrl}
									twitterLink={themesOptionsContent?.twitterLink}
									phoneNumber={themesOptionsContent?.phoneNumber}
									linkedinLink={themesOptionsContent?.linkedinLink}
									facebookLink={themesOptionsContent?.facebookLink}
									navbarMenuLinks={navbarMenuLinks?.navbarMenuLinks}
									backgroundImageOrVideo={item?.backgroundImageOrVideo}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_TitleParagraph` ? (
							<>
								<TitleParagraph
									key={keys}
									title={item?.title}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_ContentSection` ? (
							<>
								<ContentSection
									title={item?.title}
									subtitle={item?.subtitle}
									bottomContent={item?.bottomContent}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_JumboContentSection` ? (
							<>
								<JumboContent
									key={keys}
									jumboContentSection={item?.contentSection}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_ContentStats` ? (
							<>
								<ContentStats
									title={item?.title}
									paragraph={item?.paragraph}
									statsOne={item?.statsOne}
									statsTwo={item?.statsTwo}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_ProductGrid` ? (
							<>
								<FourImageGrid
									title={item?.title}
									servicesGrid={item?.services}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_ProductGridTwo` ? (
							<>
								<ProductGrid
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									productGrid={item?.products}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_TrustedBrands` ? (
							<>
								<Logos title={item?.title} logoGrid={item?.logos} />
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_ContentSlider` ? (
							<>
								<ContentSliderTwo
									content={contentSliderPostsContent?.content[0]}
									contentTwo={contentSliderPostsContent?.content[1]}
									contentThree={contentSliderPostsContent?.content[2]}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_ContentSliderTwo` ? (
							<>
								<ContentSlider
									content={item?.content}
									contentTwo={item?.contentTwo}
									contentThree={item?.contentThree}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_BlogsGrid` ? (
							<>
								<Blogs blogs={blogs} />
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_ContactBanner` ? (
							<>
								<ContactBanner
									key={keys}
									title={item?.title}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_ContactInfo` ? (
							<>
								<ContactInfo
									title={item?.title}
									paragraph={item?.paragraph}
									email={themesOptionsContent?.email}
									contactAddress={themesOptionsContent?.address}
									phoneNumber={themesOptionsContent?.phoneNumber}
									phoneNumberTwo={themesOptionsContent?.phoneNumberTwo}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_ContactForm` ? (
							<>
								<ContactForm
									title={item?.title}
									businessHours={themesOptionsContent?.businessHours}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_OurLocation` ? (
							<>
								<StoreLocation
									title={item?.title}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_ErrorPageContent` ? (
							<>
								<ErrorPage
									title={item?.title}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : (
							<></>
						)}
					</div>
				))
			) : (
				<></>
			)}
		</>
	);
};

export default RenderFlexibleContent;
