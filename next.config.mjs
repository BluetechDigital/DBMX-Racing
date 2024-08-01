/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	routes: [
		{
			path: "/api/email",
			page: "./app/api/email",
		},
	],
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: `${process.env.IMAGE_REMOTE_PATTERNS_HOSTNAME_ONE}`,
				port: "",
				pathname: `${process.env.IMAGE_REMOTE_PATHNAME_ONE}/**`,
			},
			{
				protocol: "https",
				hostname: `${process.env.IMAGE_REMOTE_PATTERNS_HOSTNAME_TWO}`,
				port: "",
				pathname: `${process.env.IMAGE_REMOTE_PATHNAME_TWO}/**`,
			},
			{
				protocol: "https",
				hostname: `${process.env.IMAGE_REMOTE_PATTERNS_HOSTNAME_THREE}`,
				port: "",
				pathname: `${process.env.IMAGE_REMOTE_PATHNAME_THREE}/**`,
			},
		],
	},
};

export default nextConfig;
