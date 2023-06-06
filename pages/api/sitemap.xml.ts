// Import
import {getAllPagesSlugs} from "@/functions/GetAllPagesSlugs";
import {getAllBlogPostsSlugs} from "@/functions/GetAllBlogPostsSlugs";

const {SitemapStream, streamToPromise} = require("sitemap");
const {Readable} = require("stream");

const sitemap = async (req: any, res: any) => {
	const pagesSlugs = await getAllPagesSlugs();
	const postsSlugs = await getAllBlogPostsSlugs();

	// Pages & Blogs Arrays
	const pagesLinks: any = [];
	const postsLinks: any = [];

	// Pages Dynamic Links
	pagesSlugs?.map((keys: any) => {
		const object = {
			url: `${keys?.slug}`,
			changefreq: "monthly",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		pagesLinks.push(object);
	});

	// Blogs Dynamic Links
	postsSlugs?.map((keys: any) => {
		const object = {
			url: `/blogs/${keys?.slug}`,
			changefreq: "daily",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		postsLinks.push(object);
	});

	// Arrays with your all dynamic links
	const allLinks: any = [...pagesLinks, ...postsLinks];

	// Create a stream to write to
	const stream = new SitemapStream({hostname: process.env.SITE_URL});

	res.writeHead(200, {
		"Content-Type": "application/xml",
	});

	const xmlString = await streamToPromise(
		Readable.from(allLinks).pipe(stream)
	).then((data: any) => data.toString());

	res.end(xmlString);
};

export default sitemap;
