/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir:true,
    },
    env: {
        DB_URI: "mongodb://localhost:27017/next13-auth",
        NEXTAUTH_SECRET: "cod",
        
    }
}

module.exports = nextConfig
