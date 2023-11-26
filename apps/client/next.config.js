/** @type {import('next').NextConfig} */

console.log("ENVIRONENT", process.env.NODE_ENV);
const path = require('path');
const dotenv = require('dotenv');

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
