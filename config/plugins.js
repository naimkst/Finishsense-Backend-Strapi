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
