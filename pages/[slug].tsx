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
import HeroTwo from "@/components/HeroTwo";
import Layout from "@/components/Layout/Layout";
import JumboContent from "../components/JumboContent";
import StoreLocation from "@/components/StoreLocation";
import ContactBanner from "@/components/ContactBanner";
import ContentSlider from "@/components/ContentSlider";
import TitleParagraph from "@/components/TitleParagraph";

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
	content,
	pageTitle,
	mainMenuLinks,
	navbarMenuLinks,
	footerMenuLinks,
	themesOptionsContent,
}) => {
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
							"Page_Flexiblecontent_FlexibleContent_HeroSection" ? (
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
							  "Page_Flexiblecontent_FlexibleContent_TitleParagraph" ? (
								<>
									<TitleParagraph
										key={keys}
										title={item?.title}
										paragraph={item?.paragraph}
									/>
								</>
							) : item?.fieldGroupName ===
							  "Page_Flexiblecontent_FlexibleContent_JumboContentSection" ? (
								<>
									<JumboContent
										key={keys}
										jumboContentSection={item?.jumboContentSection}
									/>
								</>
							) : item?.fieldGroupName ===
							  "Page_Flexiblecontent_FlexibleContent_ContactBanner" ? (
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
							  "Page_Flexiblecontent_FlexibleContent_OurLocation" ? (
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
		mainMenuLinks,
		navbarMenuLinks,
		footerMenuLinks,
		themesOptionsContent,
	] = await Promise.all([
		getMainMenuLinks(),
		getNavbarMenuLinks(),
		getFooterMenuLinks(),
		getThemesOptionsContent(),
	]);

	return {
		props: {
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
