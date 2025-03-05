import { NextConfig } from 'next';
import { withPlausibleProxy } from 'next-plausible';
import { NextPlausiblePublicProxyOptions } from 'next-plausible/dist/lib/common';

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

const plausibleConfig: NextPlausiblePublicProxyOptions = {
	customDomain: process.env.NEXT_PUBLIC_ANALYTICS_HOST
}

export default withPlausibleProxy(plausibleConfig)(nextConfig);
