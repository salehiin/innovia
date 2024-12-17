/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: '',
        pathname: '**',
        search: '',
      },
      // {
      //   protocol: 'https',
      //   hostname: 'example.com',
      //   port: '',
      //   pathname: '**',
      //   search: '',
      // },
      // {
      //   protocol: 'https',
      //   hostname: 'i.ibb.co',
      //   port: '',
      //   pathname: '**',
      //   search: '',
      // },
    ],
  },
};

export default nextConfig;
