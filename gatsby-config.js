require('dotenv').config({
  path: `.env`,
})

let apiEndpoint = 'https://gatsby-prueba.prismic.io/graphql';
let repo = /([^\/]+)\.prismic\.io\/graphql/.exec(apiEndpoint);

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: repo[1],
        accessToken: process.env.API_KEY,
      },
    },
  ],
}
