module.exports = () => ({
  "shopify-fields": {
    enabled: true,
    config: {
      apiVersion: "2024-07", // Or one of Shopify's supported API versions
      accessToken: "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", // The environment variable containing your private app's access token
      shopName: "finishsense.myshopify.com", // The environment variable containing your myshopify.com domain
    },
  },
});
