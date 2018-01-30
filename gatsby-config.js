module.exports = {
  siteMetadata: {
    title: `Yinwei (Charlie) Zhang | @cyinwei`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
