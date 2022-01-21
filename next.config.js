/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/discord',
                destination: 'https://discord.com/users/564250827959566359',
                permanent: false
            }
        ]
    }
}

module.exports = nextConfig