module.exports = () => ({
  "shopify-fields": {
    enabled: true,
    config: {
      apiVersion: "2024-10", // Or one of Shopify's supported API versions
      accessToken: "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", // The environment variable containing your private app's access token
      shopName: "finishsense.myshopify.com", // The environment variable containing your myshopify.com domain
    },
  },
});
