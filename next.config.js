/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["frappe-charts"]);

const nextConfig = {
  reactStrictMode: false,
}

module.exports = withTM({
  nextConfig
})