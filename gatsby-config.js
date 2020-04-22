const locales = require("./src/locales");

module.exports = {
  siteMetadata: {
    title: `bandsy`,
    description: `Finding Musicians. Simplified.`,
    author: `@bandsy`,
  },
  plugins: [
    `gatsby-plugin-ts-config`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `bandsy`,
        short_name: `bandsy`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#D96277`,
        display: `minimal-ui`,
        icon: `src/images/bandsy-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/locales`,
        // supported language
        languages: locales.map(e => e.lang),
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/en` when connecting `/`
        redirect: true,
      },
    },
  ],
};
