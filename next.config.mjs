import { withPayload } from '@payloadcms/next/withPayload'

// Always set this explicitly for production
const NEXT_PUBLIC_SERVER_URL = 'https://msme.iith.ac.in'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_SERVER_URL,
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
