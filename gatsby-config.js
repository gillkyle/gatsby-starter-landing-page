module.exports = {
  siteMetadata: {
    title: `Starter Landing Page`,
    description: `A barebone landing page starter with some minimal styles.`,
    author: `@gillkyle`,
  },
  plugins: [
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
  ],
}
