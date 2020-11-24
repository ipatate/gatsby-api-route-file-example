module.exports = {
  siteMetadata: {
    title: `Gatsby API ROUTE FILE SYSTEM`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: "gatsby-source-rest-api",
      options: {
        endpoints: [
          "https://jsonplaceholder.typicode.com/posts",
          "https://jsonplaceholder.typicode.com/users",
        ],
      },
    },
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
