// Import
import Link from "next/link";
import {gql} from "@apollo/client";
import {motion} from "framer-motion";
import {client} from "../config/apollo";
import {getThemesOptionsContent} from "../lib/themesOptions";
import {getMainMenuLinks, getFooterMenuLinks} from "../lib/MenuLinks";

// Components
import MetaTag from "../components/Meta/MetaTag";
import ContentSlider from "@/components/ContentSlider";
import TitleParagraph from "@/components/TitleParagraph";
import Hero from "@/components/Hero";
import StoreLocation from "@/components/StoreLocation";
import Logos from "@/components/Logos";
import Image from "next/image";
import Paragraph from "@/components/Elements/Paragraph";

export default function Home({
	seo,
	content,
	heroMenuLinks,
	mainMenuLinks,
	themesOptionsContent,
}: any) {
	// console.log(themesOptionsContent);
	return (
		<motion.div
			exit={{
				opacity: 0,
			}}
			initial="initial"
			animate="animate"
		>
			{/* <!--===== META TAG =====--> */}
			<MetaTag title={`DBMX Racing`} seo={seo} />

			<main>
				<Hero
					title={content?.heroSection?.title}
					email={themesOptionsContent?.email}
					paragraph={content?.heroSection?.paragraph}
					heroMenuLinks={heroMenuLinks?.heroMenuLinks}
					buttonLink={content?.heroSection?.buttonLink}
					twitterLink={themesOptionsContent?.twitterLink}
					phoneNumber={themesOptionsContent?.phoneNumber}
					linkedinLink={themesOptionsContent?.linkedinLink}
					facebookLink={themesOptionsContent?.facebookLink}
					buttonLinkTwo={content?.heroSection?.buttonLinkTwo}
					backgroundVideoUrl={content?.heroSection?.backgroundVideoUrl}
				/>

				<TitleParagraph
					title={content?.titleParagraph?.title}
					paragraph={content?.titleParagraph?.paragraph}
				/>

				<section className="py-12 bg-pureBlack md:pt-16 md:pb-20">
					<div className="container px-4 mx-auto">
						<div className="flex flex-wrap items-end mb-10 -mx-4">
							<div className="w-full px-4 mb-6 sm:w-1/2 xl:w-3/5 sm:mb-0">
								<h2 className="text-4xl font-bold text-white font-heading">
									We offer the following in-store range of products
								</h2>
							</div>
						</div>
						<div className="flex flex-wrap items-center -mx-4">
							<div className="w-full px-4 mb-6 lg:w-1/2 lg:mb-0">
								<Link className="relative block h-full group" href="/">
									<div className="absolute bottom-0 left-0 z-10 w-full p-8">
										<h4 className="mb-2 text-2xl font-bold text-white">
											Motorcycle gloves
										</h4>
									</div>
									<Image
										width={550}
										height={550}
										className="relative z-0 block object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-102"
										src="http://dbmx-racing.local/wp-content/uploads/2023/04/ezgif.com-webp-to-jpg.jpg"
										alt=""
									/>
								</Link>
							</div>
							<div className="w-full px-4 lg:w-1/2">
								<Link className="relative block h-full mb-6 group" href="/">
									<div className="absolute bottom-0 left-0 z-10 w-full p-8">
										<h4 className="mb-2 text-2xl font-bold text-white">
											Motocross boots
										</h4>
									</div>
									<Image
										width={550}
										height={550}
										className="relative z-0 block object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-102"
										src="http://dbmx-racing.local/wp-content/uploads/2023/04/How-to-break-in-motocross-boots.jpg"
										alt=""
									/>
								</Link>
								<Link className="relative block h-full group" href="/">
									<div className="absolute bottom-0 left-0 z-10 w-full p-8">
										<h4 className="mb-2 text-2xl font-bold text-white">
											Crash helmets
										</h4>
									</div>
									<Image
										width={550}
										height={550}
										className="relative z-0 block object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-102"
										src="http://dbmx-racing.local/wp-content/uploads/2023/04/Dot-Snell-Helmets-1100.jpg"
										alt=""
									/>
								</Link>
							</div>
						</div>
					</div>
				</section>

				<section className="py-12 bg-darkRed md:pt-16 md:pb-20">
					<div className="container px-4 mx-auto">
						<div className="max-w-lg mx-auto lg:max-w-none">
							<h2 className="mb-3 text-4xl font-bold text-white font-heading">
								We offer the following in-store range of products
							</h2>
							<Paragraph
								content={`<p>We stock and supply top-quality accessories and riding gear by top brands at our store.</p>`}
								tailwindStyling="mb-14 py-8 text-white text-center sm:text-left text-medium"
							/>
							<div className="flex flex-wrap items-center -mx-4 lg:-mx-8">
								<div className="w-full px-4 mb-12 lg:w-1/3 lg:px-8 lg:mb-0">
									<Image
										width={550}
										height={550}
										className="block object-cover object-center w-full h-full min-h-[450px] max-h-[450px] mb-6"
										src="http://dbmx-racing.local/wp-content/uploads/2023/04/893dcd734f8d89257a578c95135f6410_1400x.jpg"
										alt=""
									/>
									<div className="max-w-xs">
										<h3 className="mb-3 text-xl font-bold text-goldPrime">
											Motorcycle gloves
										</h3>
										<Paragraph
											content={`<p>Lorem ipsum dolor sit amet, consectetur elit. pur
												faucibus massa digniss.</p>`}
											tailwindStyling="py-4 text-white text-center sm:text-left text-medium"
										/>
									</div>
								</div>
								<div className="w-full px-4 mb-12 lg:w-1/3 lg:px-8 lg:mb-0">
									<Image
										width={550}
										height={550}
										className="block object-cover object-center w-full h-full min-h-[450px] max-h-[450px] mb-6"
										src="http://dbmx-racing.local/wp-content/uploads/2023/04/How-to-break-in-motocross-boots.jpg"
										alt=""
									/>
									<div className="max-w-xs">
										<h3 className="mb-3 text-xl font-bold text-goldPrime">
											Motocross boots Collection
										</h3>
										<Paragraph
											content={`<p>Lorem ipsum dolor sit amet, consectetur elit. pur
												faucibus massa digniss.</p>`}
											tailwindStyling="py-4 text-white text-center sm:text-left text-medium"
										/>
									</div>
								</div>
								<div className="w-full px-4 lg:w-1/3 lg:px-8">
									<Image
										width={550}
										height={550}
										className="block object-cover object-center w-full h-full min-h-[450px] max-h-[450px] mb-6"
										src="http://dbmx-racing.local/wp-content/uploads/2023/03/pexels-kaique-lopes-9304115-scaled.jpg"
										alt=""
									/>
									<div className="max-w-xs">
										<h3 className="mb-3 text-xl font-bold text-goldPrime">
											Crash helmets Collection
										</h3>
										<Paragraph
											content={`<p>Lorem ipsum dolor sit amet, consectetur elit. pur
												faucibus massa digniss.</p>`}
											tailwindStyling="py-4 text-white text-center sm:text-left text-medium"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<Logos
					title={content?.trustedBrands?.title}
					logoGrid={content?.trustedBrands?.logos}
				/>

				{/* CONTENT SLIDER */}
				<ContentSlider
					content={content?.contentSlider?.content}
					contentTwo={content?.contentSlider?.contentTwo}
					contentThree={content?.contentSlider?.contentThree}
				/>

				<StoreLocation
					title={content?.ourLocation?.title}
					paragraph={content?.ourLocation?.paragraph}
				/>
			</main>
		</motion.div>
	);
}

export async function getStaticProps() {
	const getHomePageContent: any = gql`
		{
			mainContent: pages(where: {id: 6, status: PUBLISH}) {
				edges {
					node {
						seo {
							canonical
							cornerstone
							focuskw
							fullHead
							metaDesc
							metaKeywords
							metaRobotsNofollow
							metaRobotsNoindex
							opengraphAuthor
							opengraphDescription
							opengraphImage {
								mediaItemUrl
							}
							opengraphModifiedTime
							opengraphPublishedTime
							opengraphPublisher
							opengraphSiteName
							opengraphTitle
							opengraphType
							opengraphUrl
							readingTime
							title
							twitterDescription
							twitterTitle
							twitterImage {
								mediaItemUrl
							}
						}
						homePage {
							heroSection {
								title
								paragraph
								backgroundVideoUrl
								buttonLink {
									url
									title
									target
								}
								buttonLinkTwo {
									url
									title
									target
								}
							}
							titleParagraph {
								title
								paragraph
							}
							trustedBrands {
								title
								logos {
									image {
										altText
										sourceUrl
										mediaDetails {
											height
											width
										}
									}
								}
							}
							contentSlider {
								content {
									tag
									title
									paragraph
									publishedDate
									buttonLink {
										url
										title
										target
									}
									backgroundVideoUrl
									backgroundImageOrVideo
									backgroundImage {
										sourceUrl
										mediaDetails {
											height
											width
										}
									}
								}
								contentTwo {
									tag
									title
									paragraph
									publishedDate
									buttonLink {
										url
										title
										target
									}
									backgroundVideoUrl
									backgroundImageOrVideo
									backgroundImage {
										sourceUrl
										mediaDetails {
											height
											width
										}
									}
								}
								contentThree {
									tag
									title
									paragraph
									publishedDate
									buttonLink {
										url
										title
										target
									}
									backgroundVideoUrl
									backgroundImageOrVideo
									backgroundImage {
										sourceUrl
										mediaDetails {
											height
											width
										}
									}
								}
							}
							ourLocation {
								title
								paragraph
							}
						}
					}
				}
			}
		}
	`;

	const response: any = await client.query({
		query: getHomePageContent,
	});

	const heroMenuLinks: object = await getMainMenuLinks();
	// const footerMenuLinks: object = await getFooterMenuLinks();
	const themesOptionsContent: object = await getThemesOptionsContent();

	return {
		props: {
			heroMenuLinks,
			themesOptionsContent,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			content: response.data?.mainContent?.edges[0]?.node?.homePage,
		},
		revalidate: 60,
	};
}
