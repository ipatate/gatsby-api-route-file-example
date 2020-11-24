module.exports = {
  siteMetadata: {
    title: `Gatsby File System Route API`,
    description: `Gatsby JS example of new "File System Route API"`,
    author: `@PatrickFaramaz`,
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
