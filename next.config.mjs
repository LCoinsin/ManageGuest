/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/home',
            permanent: false, // Mettez à true si la redirection est permanente
          },
        ];
      },
};

export default nextConfig;
