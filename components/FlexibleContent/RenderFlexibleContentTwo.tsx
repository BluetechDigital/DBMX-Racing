// Import
import {useContentContext} from "@/context/context";

// Components
import Hero from "@/components/Hero";
import Blogs from "@/components/Blogs";
import Logos from "@/components/Logos";
import Maintenance from "../Maintenance";
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

	const postTemplate = "Post_Flexiblecontent_FlexibleContent";
	return (
		<>
			{content.content.length > 0 ? (
				content.content.map((item: any, keys: any) => (
					<div key={keys}>
						{item?.fieldGroupName === `${postTemplate}_HeroSection` ? (
							<>
								<HeroTwo
									title={item?.title}
									paragraph={item?.paragraph}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : item?.fieldGroupName === `${postTemplate}_HeroSectionTwo` ? (
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
						) : item?.fieldGroupName === `${postTemplate}_HeroSectionThree` ? (
							<>
								<HeroThree
									title={item?.title}
									paragraph={item?.paragraph}
									backgroundImage={item?.backgroundImage}
									backgroundVideoUrl={item?.backgroundVideoUrl}
									backgroundImageOrVideo={item?.backgroundImageOrVideo}
								/>
							</>
						) : item?.fieldGroupName === `${postTemplate}_TitleParagraph` ? (
							<>
								<TitleParagraph
									key={keys}
									title={item?.title}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName === `${postTemplate}_ContentSection` ? (
							<>
								<ContentSection
									title={item?.title}
									subtitle={item?.subtitle}
									bottomContent={item?.bottomContent}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${postTemplate}_JumboContentSection` ? (
							<>
								<JumboContent
									key={keys}
									jumboContentSection={item?.contentSection}
								/>
							</>
						) : item?.fieldGroupName === `${postTemplate}_ContentStats` ? (
							<>
								<ContentStats
									title={item?.title}
									statsOne={item?.statsOne}
									statsTwo={item?.statsTwo}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName === `${postTemplate}_ProductGrid` ? (
							<>
								<FourImageGrid
									title={item?.title}
									servicesGrid={item?.services}
								/>
							</>
						) : item?.fieldGroupName === `${postTemplate}_ProductGridTwo` ? (
							<>
								<ProductGrid
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									productGrid={item?.products}
								/>
							</>
						) : item?.fieldGroupName === `${postTemplate}_TrustedBrands` ? (
							<>
								<Logos title={item?.title} logoGrid={item?.logos} />
							</>
						) : item?.fieldGroupName === `${postTemplate}_ContentSlider` ? (
							<>
								<ContentSliderTwo />
							</>
						) : item?.fieldGroupName === `${postTemplate}_ContentSliderTwo` ? (
							<>
								<ContentSlider
									content={item?.content}
									contentTwo={item?.contentTwo}
									contentThree={item?.contentThree}
								/>
							</>
						) : item?.fieldGroupName === `${postTemplate}_BlogsGrid` ? (
							<>
								<Blogs />
							</>
						) : item?.fieldGroupName === `${postTemplate}_ContactBanner` ? (
							<>
								<ContactBanner
									key={keys}
									title={item?.title}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : item?.fieldGroupName === `${postTemplate}_ContactInfo` ? (
							<>
								<ContactInfo title={item?.title} paragraph={item?.paragraph} />
							</>
						) : item?.fieldGroupName === `${postTemplate}_ContactForm` ? (
							<>
								<ContactForm title={item?.title} />
							</>
						) : item?.fieldGroupName === `${postTemplate}_OurLocation` ? (
							<>
								<StoreLocation
									title={item?.title}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName === `${postTemplate}_Maintenance` ? (
							<>
								<Maintenance
									title={item?.title}
									paragraph={item?.paragraph}
									backgroundImage={item?.backgroundImage}
									backgroundVideoUrl={item?.backgroundVideoUrl}
									backgroundImageOrVideo={item?.backgroundImageOrVideo}
								/>
							</>
						) : item?.fieldGroupName === `${postTemplate}_ErrorPageContent` ? (
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
