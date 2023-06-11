// Import
import {useContentContext} from "@/context/context";

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

const RenderFlexibleContent = () => {
	const content = useContentContext();

	const FlexibleContentComponent =
		"DefaultTemplate_Flexiblecontent_FlexibleContent";
	return (
		<>
			{content.content?.length > 0 ? (
				content.content.map((item: any, keys: any) => (
					<div key={keys}>
						{item?.fieldGroupName ===
						`${FlexibleContentComponent}_HeroSection` ? (
							<>
								<HeroTwo
									key={keys}
									title={item?.title}
									paragraph={item?.paragraph}
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
									backgroundVideoUrl={item?.backgroundVideoUrl}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_HeroSectionThree` ? (
							<>
								<HeroThree
									title={item?.title}
									paragraph={item?.paragraph}
									backgroundImage={item?.backgroundImage}
									backgroundVideoUrl={item?.backgroundVideoUrl}
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
									statsOne={item?.statsOne}
									statsTwo={item?.statsTwo}
									paragraph={item?.paragraph}
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
								<ContentSliderTwo />
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
								<Blogs />
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
								<ContactInfo title={item?.title} paragraph={item?.paragraph} />
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContentComponent}_ContactForm` ? (
							<>
								<ContactForm title={item?.title} />
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
