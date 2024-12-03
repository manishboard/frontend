/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Configure for static export
  images: {
    unoptimized: true, // Disable Image Optimization for static export
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**', // Be cautious with this. Only use if you need to load images from any domain
      },
    ],
  },
  webpack: (config) => {
    config.cache = false; // Disable Webpack cache
    return config;
  },
};

export default nextConfig;



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'http',
//         hostname: 'localhost',
//         port: '',
//         pathname: '/**',
//       },
//       {
//         protocol: 'https',
//         hostname: '**', // Be cautious with this. Only use if you need to load images from any domain
//       }
//     ],
//   },
//   webpack: (config) => {
//     config.cache = false; // Disable Webpack cache
//     return config;
//   },
// }

// export default nextConfig;
