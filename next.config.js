const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

module.exports = withStoreConfig({
  experimental: {
    serverActions: true,
  },
  features: store.features,
  reactStrictMode: true,
  images: {
    domains: [
      "medusa-public-images.s3.eu-west-1.amazonaws.com",
      "localhost",
      "pavi-marie.nyc3.digitaloceanspaces.com",
    ],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
