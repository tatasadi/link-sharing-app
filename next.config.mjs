/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: `${process.env.AZURE_STORAGE_NAME}.blob.core.windows.net`,
				port: '',
				pathname: '/**',
			},
		],
	},
	output: "standalone"
}

export default nextConfig
