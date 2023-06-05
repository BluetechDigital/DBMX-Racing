// Import
import {motion} from "framer-motion";
import type {NextPage, GetStaticProps} from "next";
import {getAllPagesURLs} from "@/functions/GetAllPagesURLs";
import {getThemesOptionsContent} from "../functions/themesOptions";
import {getAllSeoPagesContent} from "@/functions/GetAllSeoPagesContent";
import {getAllFlexibleContentComponents} from "@/functions/GetAllFlexibleContentComponents";
import {
	getMainMenuLinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
} from "../functions/MenuLinks";

// Components
import Logos from "@/components/Logos";
import HeroTwo from "@/components/HeroTwo";
import Layout from "@/components/Layout/Layout";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import ProductGrid from "@/components/ProductGrid";
import ContentStats from "@/components/ContentStats";
import JumboContent from "../components/JumboContent";
import StoreLocation from "@/components/StoreLocation";
import ContactBanner from "@/components/ContactBanner";
import ContentSlider from "@/components/ContentSlider";
import FourImageGrid from "@/components/FourImageGrid";
import TitleParagraph from "@/components/TitleParagraph";
import Blogs from "@/components/Blogs";
import {getAllBlogsContent} from "@/functions/BlogPostsSlugs";

interface IDynamicPages {
	seo: {
		canonical: string;
		cornerstone: Boolean;
		focuskw: string;
		fullHead: string;
		metaDesc: string;
		metaKeywords: string;
		metaRobotsNofollow: string;
		metaRobotsNoindex: string;
		opengraphAuthor: string;
		opengraphDescription: string;
		opengraphImage: {
			mediaItemUrl: string;
		};
		opengraphModifiedTime: string;
		opengraphPublishedTime: string;
		opengraphPublisher: string;
		opengraphSiteName: string;
		opengraphTitle: string;
		opengraphType: string;
		opengraphUrl: string;
		readingTime: number;
		title: string;
		twitterDescription: string;
		twitterTitle: string;
		twitterImage: {
			mediaItemUrl: string;
		};
	};
	content: any;
	pageTitle: string;
	blogs: [
		{
			node: {
				id: string;
				uri: string;
				date: string;
				title: string;
				singleBlogPost: {
					titleParagraph: {
						paragraph: string;
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
	footerMenuLinks: {
		footerMenuLinks: [
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
		errorPageContent: {
			title: string;
			paragraph: string;
			buttonLink: {
				url: string;
				title: string;
				target: string;
			};
			backgroundImage: {
				sourceUrl: string;
			};
		};
	};
}

const dynamicPages: NextPage<IDynamicPages> = ({
	seo,
	blogs,
	content,
	pageTitle,
	mainMenuLinks,
	navbarMenuLinks,
	footerMenuLinks,
	themesOptionsContent,
}) => {
	const FlexibleContentComponent =
		"DefaultTemplate_Flexiblecontent_FlexibleContent";
	return (
		<motion.div
			exit={{
				opacity: 0,
			}}
			initial="initial"
			animate="animate"
		>
			<Layout
				seo={seo}
				pageTitle={pageTitle}
				themesOptionsContent={themesOptionsContent}
				footerMenuLinks={footerMenuLinks?.footerMenuLinks}
			>
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
							  `${FlexibleContentComponent}_TitleParagraph` ? (
								<>
									<TitleParagraph
										key={keys}
										title={item?.title}
										paragraph={item?.paragraph}
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
									Displays the latest three published posts content dynamically
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
							) : (
								<></>
							)}
						</div>
					))
				) : (
					<></>
				)}
			</Layout>
		</motion.div>
	);
};

export async function getStaticPaths() {
	const data = await getAllPagesURLs();
	const paths = data.map((item) => ({
		params: {
			slug: item?.slug as String,
		},
	}));

	return {paths, fallback: false};
}

export const getStaticProps: GetStaticProps = async ({params}: any) => {
	// Fetch priority content
	const seoContent: any = await getAllSeoPagesContent(params?.slug);

	const flexibleContentComponents: any = await getAllFlexibleContentComponents(
		params?.slug
	);

	// Fetch remaining content simultaneously
	const [
		blogs,
		mainMenuLinks,
		navbarMenuLinks,
		footerMenuLinks,
		themesOptionsContent,
	] = await Promise.all([
		getAllBlogsContent(),
		getMainMenuLinks(),
		getNavbarMenuLinks(),
		getFooterMenuLinks(),
		getThemesOptionsContent(),
	]);

	return {
		props: {
			blogs,
			mainMenuLinks,
			navbarMenuLinks,
			footerMenuLinks,
			seo: seoContent,
			themesOptionsContent,
			content: flexibleContentComponents?.content,
			pageTitle: flexibleContentComponents?.pageTitle,
		},
		revalidate: 60,
	};
};

export default dynamicPages;
