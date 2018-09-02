module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-125028157-1",
        head: true,
        anonymize: true,
        respectDNT: true
      }
    }
  ]
};
