/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable compression for smaller bundle sizes
    compress: true,

    // Optimize images
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    },

    // Enable React strict mode for catching issues
    reactStrictMode: true,

    // Performance headers
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                ],
            },
            {
                // Cache static assets aggressively
                source: '/(.*)\\.(ico|png|svg|jpg|jpeg|gif|webp|avif|woff|woff2)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },

    // Experimental optimizations
    experimental: {
        optimizeCss: false,
        optimizePackageImports: ['lucide-react', 'framer-motion'],
    },
};

export default nextConfig;
