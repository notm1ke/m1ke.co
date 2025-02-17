/** @type {import('next').NextConfig} */
const nextConfig = {
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
