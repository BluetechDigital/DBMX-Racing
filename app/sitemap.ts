// Imports
import {MetadataRoute} from "next";
import {getAllPagesSlugs} from "@/graphql/GetAllPagesSlugs";

const sitemap = async () => {
	const [pagesSlugs] = await Promise.all([getAllPagesSlugs()]);

	const siteUrl: any = process.env.SITE_URL;

	/* Pages, News Insights Posts Arrays */
	const pagesLinks: any = [];

	// Pages Dynamic Links
	pagesSlugs?.map((keys: any) => {
		const object = {
			url: `${siteUrl}/${keys?.slug}`,
			changefreq: "monthly",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		pagesLinks.push(object);
	});

	// Arrays with your all dynamic links
	const allLinks: MetadataRoute.Sitemap = [...pagesLinks];

	return allLinks;
};

export default sitemap;
