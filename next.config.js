/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"dbmx-racing.local",
			"mydummysite.co.uk",
			"lh3.googleusercontent.com",
		],
	},
};

module.exports = nextConfig;
