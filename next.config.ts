import { NextConfig } from 'next';
import { withPlausibleProxy } from 'next-plausible';

const nextConfig: NextConfig = {
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

export default withPlausibleProxy()(nextConfig);
