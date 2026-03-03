import { NextConfig } from 'next';

const nextConfig: NextConfig = {
	transpilePackages: [
		"geist"
	],
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.m1ke.co",
				port: "",
				pathname: "/**",
				search: ""
			}
		]
	}
};

export default nextConfig;