module.exports = [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      frameguard: false,
      contentSecurityPolicy: {
        directives: {
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "https://dl.airtable.com",
            "https://cdn.shopify.com",
          ],
          "frame-ancestors": null,
        },
        useDefaults: true,
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  {
    name: "strapi::body",
    config: {
      includeUnparsed: true,
    },
  },
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
