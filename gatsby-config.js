module.exports = {
  siteMetadata: {
    title: `gatsby_demo_site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "http://localhost/gatsby_demo/graphql"
    }
  }, "gatsby-plugin-sitemap"]
};