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
 