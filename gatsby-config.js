module.exports = {
  pathPrefix: "/stevendana.github.io",
  siteMetadata: {
    author: "Steven Dana",
    title: "Steven Dana",
    titleTemplate: "%s – Steven Dana",
    description:
      "Design and development portfolio of Steven Dana.",
    url: "http://www.stevendana.com", // No trailing slash allowed!
    image: "images/meta/og-image.png", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-layout`,
    // `gatsby-plugin-transition-link`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/icons/favicon@9x.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
